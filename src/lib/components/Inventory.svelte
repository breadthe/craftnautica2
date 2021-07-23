<script>
	import { inventories } from '$store';
	import util from '$lib/util';
	import EmptyCartOrInventory from '$lib/components/EmptyCartOrInventory.svelte';
	import InventoryItem from '$lib/components/InventoryItem.svelte';
	import Button from '$lib/components/Button.svelte';
	import Icon from '$lib/components/Icon.svelte';

	export let domain; // String
	export let inventory; // String
	export let items; // Object

	let confirmDeleteInventory = false;
	let renamingInventory = false;
	let newInventoryName = inventory; // computed?

	$: isDefaultInventory = util.isDefaultInventory(inventory);
	$: inventoryCount = Object.keys(items).length; // number of items in current inventory

	function deleteInventory() {
		inventories.deleteInventory({
			domain: domain,
			inventory: inventory
		});
	}

	function renameInventory(event) {
		// If there was a keyboard event, allow only Enter to trigger
		if (typeof event !== 'undefined' && event.code !== 'Enter') return;

		renamingInventory = false;

		inventories.renameInventory({
			domain: domain,
			oldInventoryName: inventory,
			newInventoryName: newInventoryName
		});
	}
</script>

<section class="mx-4 my-8">
	{#if renamingInventory}
		<div class="flex items-center border-b border-grey-darkest py-2">
			<input
				type="text"
				name="inventoryName"
				bind:value={newInventoryName}
				on:keyup={(e) => renameInventory(e)}
				use:util.focusInputAction={true}
				placeholder="Inventory name"
				class="p-2 text-gray-100 focus:bg-cn-blue-900 focus:outline-none focus:ring-1 focus:ring-gray-100"
			/>

			<Button link on:click={() => (renamingInventory = false)}>Cancel</Button>

			<Button on:click={() => renameInventory()}>Save</Button>
		</div>
	{:else}
		<h3
			on:click={() => (!isDefaultInventory ? (renamingInventory = true) : null)}
			class="flex items-center justify-between border-b border-grey-darkest py-2"
		>
			{inventory}

			{#if !isDefaultInventory}
				<button
					on:click={() => (renamingInventory = true)}
					class="flex ml-2"
					title="Edit inventory name"
				>
					<Icon icon="edit" color="text-blue-600" />
				</button>
			{/if}

			<span>{inventoryCount} <span class="font-light">item{inventoryCount === 1 ? '' : 's'}</span></span>
		</h3>
	{/if}

	{#if inventoryCount}
		<div>
			{#each Object.entries(items) as item (item[0])}
				<InventoryItem {domain} {inventory} item={{ [item[0]]: item[1] }} />
			{/each}

			<!-- ============= Empty Inventory ============= -->
			<EmptyCartOrInventory what="Inventory" {domain} {inventory} />
		</div>
	{:else}
		<div class="mt-4">
			{#if confirmDeleteInventory}
				<p class="flex items-center">
					Are you sure?

					<Button link on:click={() => (confirmDeleteInventory = false)}>Cancel</Button>

					<Button icon="trash-2" on:click={deleteInventory}>Yes, Delete {inventory}</Button>
				</p>
			{:else}
				<p>
					This custom inventory is empty and can be deleted. <a
						href="#"
						on:click|preventDefault={() => (confirmDeleteInventory = true)}>Delete inventory?</a
					>
				</p>
			{/if}
		</div>
	{/if}
</section>
