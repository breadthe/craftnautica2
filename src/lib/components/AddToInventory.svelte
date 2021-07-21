<script>
	import { createEventDispatcher } from 'svelte';
	import { inventories } from '$store';
	import util from '$lib/util';
	import Icon from '$lib/components/Icon.svelte';

	export let id; // String
	export let domain; // String

	const dispatch = createEventDispatcher();

	let newInventory = '';
	let selectedInventory = null;
	let quantity = 0; // TODO: get the actual quantity of the item in that inventory, computed
	let creatingNewInventory = false;
	let addingToInventory = false;
	let addedToInventory = false;

    /**
     * @todo This does not get custom inventories
     */
	$: inventoriesList = inventories.inventoriesList(domain);

	function openAddingToInventory(inventory) {
		addingToInventory = true;
		selectedInventory = inventory;

		// Fill in the existing quantity of this item in the selected inventory, if it exists
		quantity = parseInt(itemCountInInventory(selectedInventory), 10) || 0;
	}

	function closeAddingToInventory() {
		addingToInventory = false;
		selectedInventory = null;
	}

	function addToInventory(event) {
		// If there was a keyboard event, allow only Enter to trigger
		if (typeof event !== 'undefined' && event.code !== 'Enter') return;

		const qty = util.validatedQty(quantity);

		// Checking for quantity allows using Enter to add/create instead of clicking the button
		if (qty) {
			inventories.addToInventory({
				domain: domain,
				inv: selectedInventory,
				id: id,
				qty: qty
			});

			addedToInventory = true;

			setTimeout(() => {
				addedToInventory = false;
				dispatch('closeItemMenu');
			}, 750);
		}
	}

	function addToNewInventory(event) {
		// If there was a keyboard event, allow only Enter to trigger
		if (event && event.code !== 'Enter') return;

		// Check if the inventory name already exists
		const ix = inventoriesList
			.map((i) => i.toUpperCase())
			.indexOf(newInventory.trim().toUpperCase());

		// If inventory name exists (case insensitive)...
		if (ix > -1) {
			selectedInventory = inventoriesList[ix]; // use the existing inventory name, preserving case
		} else {
			selectedInventory = newInventory; // otherwise use the new name
		}

		addToInventory();

		// TODO: otherwise show an error message requesting uniqueness
	}

	function cancelAddingToNewInventory() {
		creatingNewInventory = false;
		newInventory = '';
	}

    /**
     * Counts how much qty of an item is in a specific inventory
     * @todo Consider moving this to utils (used to be in store)
     */
	function itemCountInInventory(inventory) {
		const domainInventories = $inventories[domain];
		if (typeof domainInventories === 'undefined') {
			return 0;
		}
		if (typeof domainInventories[inventory] === 'undefined') {
			return 0;
		}
		return parseInt(domainInventories[inventory][id], 10);
	}

	function focusInputAction(node, select = false) {
		node.focus();

		if (select) node.select();
	}
</script>

<div class="">
	<!-- ============= Inventories ============= -->
	{#if !creatingNewInventory && !addingToInventory}
		<div class="h-48 overflow-x-hidden overflow-y-scroll">
			{#each inventoriesList as inventory (inventory)}
				<div on:click={openAddingToInventory(inventory)} class="menu-entry justify-between">
					{inventory}

					{#if itemCountInInventory(inventory)}
						<small class="text-blue-400 font-bold mr-2">{itemCountInInventory(inventory)}</small>
					{/if}
				</div>
			{/each}
		</div>
	{/if}

	<!-- ============= Added to Inventory ============= -->
	{#if addedToInventory}
		<div class="added">Added to inventory</div>
	{/if}

	<!-- ============= + New Inventory ============= -->
	{#if !creatingNewInventory && !addingToInventory && !addedToInventory}
		<div
			on:click={() => (creatingNewInventory = true)}
			class="flex items-center bg-blue-500 text-cn-blue-900 font-normal border-t border-blue-900 p-2 py-4 cursor-pointer"
		>
			<Icon icon="plus" color="text-cn-blue-900" title="New Inventory" klass="mr-2" />New Inventory
		</div>
	{/if}

	<!-- ============= Adding to Inventory ============= -->
	{#if addingToInventory && !addedToInventory}
		<div class="flex flex-wrap items-center bg-blue-600 text-cn-blue-900 font-normal p-2">
			<div class="mb-4">
				Adding to <span class="text-xl font-bold">{selectedInventory}</span>
			</div>

			<small class="w-full leading-loose">Quantity (0-9999)</small>

			<input
				type="number"
				name="quantity"
				min="1"
				max="9999"
				bind:value={quantity}
				on:keyup={(e) => addToInventory(e)}
				use:focusInputAction={true}
				placeholder="Quantity (1-9999)"
				class="w-full p-2 text-right focus:bg-cn-blue-900 focus:outline-none focus:ring-1 focus:ring-gray-100"
			/>

			<div class="flex items-center justify-between w-full mt-2">
				<button
					type="button"
					on:click={() => addToInventory()}
					class:disabled={() => parseInt(quantity, 10) < 1}
					class="bg-blue-900 hover:bg-cn-blue-900 text-gray-100 hover:text-white px-4 py-2 rounded"
					>Add</button
				>

				<button
					type="button"
					on:click={closeAddingToInventory}
					class="underline text-gray-100 hover:text-white hover:text-blue-900 p-2 rounded"
					>Cancel</button
				>
			</div>
		</div>
	{/if}

	<!-- ============= Create New Inventory ============= -->
	{#if creatingNewInventory && !addedToInventory}
		<div class="flex flex-wrap bg-blue-600 text-blue-900 font-normal border-blue-900 p-2">
			<input
				type="text"
				name="newInventory"
				bind:value={newInventory}
				on:keyup={(e) => addToNewInventory(e)}
				use:focusInputAction
				placeholder="New Inventory"
				class="w-full p-2 mb-4 focus:bg-cn-blue-900 focus:outline-none focus:ring-1 focus:ring-gray-100"
			/>

			<small class="w-full">Quantity (0-9999)</small>

			<input
				type="number"
				name="quantity"
				min="1"
				max="9999"
				bind:value={quantity}
				on:keyup={(e) => addToNewInventory(e)}
				placeholder="Quantity (1-9999)"
				class="w-full p-2 text-right focus:bg-cn-blue-900 focus:outline-none focus:ring-1 focus:ring-gray-100"
			/>

			<div class="flex items-center justify-between w-full mt-2">
				<button
					type="button"
					on:click={() => addToNewInventory()}
					class:disabled={() => quantity < 1}
					class="bg-blue-900 hover:bg-cn-blue-900 text-gray-100 hover:text-white px-4 py-2 rounded">Create & Add</button
				>

				<button
					type="button"
					on:click={cancelAddingToNewInventory}
					class="underline text-gray-100 hover:text-white hover:text-blue-900 p-2 rounded">Cancel</button
				>
			</div>
		</div>
	{/if}
</div>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.menu-entry {
		@apply flex;
		@apply items-center;
		@apply text-gray-100;
		@apply text-lg;
		@apply font-light;
		@apply p-2;
		@apply py-3;
		@apply cursor-pointer;
		&:hover {
			@apply bg-blue-500;
			@apply text-white;
		}
	}

	.added {
		@apply font-normal;
		@apply p-2;
		@apply py-4;
		@apply text-center;
		@apply text-green-400;
	}
</style>
