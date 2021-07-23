<script>
	import { inventories } from '$store';
	import util from '$lib/util';
	import Icon from '$lib/components/Icon.svelte';
	import ItemIcon from '$lib/components/ItemIcon.svelte';
	import Button from '$lib/components/Button.svelte';

	export let domain; // String
	export let inventory; // String
	export let item; // Object

	let confirmDelete = false;
	let quantityRef;

	$: id = util.id(item);
	$: quantity = qty(item);

	function qty(item) {
		return parseInt(item[Object.keys(item)[0]], 10);
	}

	function deleteItem() {
		inventories.deleteItem({
			domain: domain,
			inventory: inventory,
			id: id
		});
	}

	/**
	 * Lazy way of (de|in)crementing
	 * Instead of separate store method, simply add the item with the new quantity
	 * Can also use it to set quantity explicitly
	 */
	function changeQty(direction = null) {
		let q;

		switch (direction) {
			case 'increment':
				q = util.validatedQty(parseInt(quantity, 10) + 1);
				break;
			case 'decrement':
				q = util.validatedQty(parseInt(quantity, 10) - 1);
				break;

			default:
				q = util.validatedQty(parseInt(quantity, 10));
				break;
		}

		inventories.addToInventory({
			domain: domain,
			inventory: inventory,
			id: id,
			qty: q
		});
	}
</script>

<section class="flex flex-col hover:bg-blue-darker -mx-4 px-4">
	<div class="flex flex-wrap sm:flex-nowrap justify-between items-center my-2 -mx-2 p-2 font-light">
		<a href={`/${domain}/i/${id}`} class="flex items-center w-1/2 text-lg">
			<ItemIcon {id} klass="mr-4" />

			{util.pretty(id)}
		</a>

		{#if confirmDelete}
			<div class="flex flex-grow items-center justify-end mx-auto sm:mx-0 mt-2 sm:mt-0">
				Are you sure?

				<Button link on:click={() => (confirmDelete = false)}>Cancel</Button>

				<Button icon="trash-2" on:click={deleteItem}>Delete</Button>
			</div>
		{:else}
			<div class="flex items-center justify-end w-1/4">
				{#if qty(item) > 1}
					<div class="w-12 flex justify-center mr-1">
						<button on:click={() => changeQty('decrement')} class="flex" title="Decrement quantity">
							<Icon icon="minus-circle" color="text-blue-600" />
						</button>
					</div>
				{:else}
					<div class="w-12">&nbsp;</div>
				{/if}

				<input
					type="number"
					name="quantity"
					min="1"
					max="9999"
					class="w-24 p-2 text-right text-gray-100 focus:bg-cn-blue-900 focus:outline-none focus:ring-1 focus:ring-gray-100"
					bind:this={quantityRef}
					bind:value={quantity}
					on:keyup={() => quantityRef.blur()}
					placeholder="Quantity (1-9999)"
				/>

				{#if qty(item) < 9999}
					<div class="w-12 flex justify-center ml-1">
						<button on:click={() => changeQty('increment')} class="flex" title="Increment quantity">
							<Icon icon="plus-circle" color="text-blue-600" />
						</button>
					</div>
				{:else}
					<div class="w-12">&nbsp;</div>
				{/if}
			</div>

			<div class="flex items-center">
				<button on:click={() => (confirmDelete = true)} class="flex ml-4" title="Delete item">
					<Icon icon="x-circle" color="text-blue-600" />
				</button>
			</div>
		{/if}
	</div>
</section>
