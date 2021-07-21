<script>
	import { createEventDispatcher } from 'svelte';
	import { cart } from '$store';
	import util from '$lib/util';
	import AddToInventory from '$lib/components/AddToInventory.svelte';
	import ItemIcon from '$lib/components/ItemIcon.svelte';
	import Icon from '$lib/components/Icon.svelte';

	export let id; // String
	export let domain; // String

	const dispatch = createEventDispatcher();
	let addingToCart = false;
	let addingToInventory = false;

	function addToCart() {
		addingToCart = true;
		cart.addToCart({ domain: domain, id: id, qty: 1 });
		setTimeout(() => {
			addingToCart = false;
			dispatch('closeItemMenu');
		}, 750);
	}

	function addToInventory() {
		addingToInventory = true;
	}
</script>

<div class="item-menu">
	<!-- ============= Item Header ============= -->
	<div
		class="flex items-center justify-between bg-blue-500 font-normal border-b border-cn-blue-900 p-2"
	>
		<a
			href={`${domain}/i/${id}`}
			class="flex items-center text-cn-blue-900 text-lg hover:text-gray-100"
		>
			<ItemIcon {id} small />

			{util.pretty(id)}
		</a>

		{#if addingToInventory}
			<span>&nbsp;</span>
		{/if}

		<button type="button" on:click={() => dispatch('closeItemMenu')}>
			<Icon icon="x" color="text-cn-blue-900" klass="" />
		</button>
	</div>

	<!-- ============= Add to Cart ============= -->
	{#if addingToCart && !addingToInventory}
		<div class="added">Added to cart</div>
	{/if}

	{#if !addingToCart && !addingToInventory}
		<div on:click|stopPropagation|preventDefault={addToCart} class="menu-entry">
			<Icon icon="shopping-cart" color="text-cn-blue-900" title="Shopping cart" klass="mr-2" />
			Add to Cart
		</div>
	{/if}

	<!-- ============= Add to Inventory ============= -->
	{#if addingToInventory}
        <AddToInventory {id} {domain} on:closeItemMenu />
	{:else}
        <div on:click|stopPropagation|preventDefault={addToInventory} class="menu-entry">
            <Icon icon="folder-plus" color="text-cn-blue-900" title="Shopping cart" klass="mr-2" />
            Add to Inventory
        </div>
	{/if}
</div>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.item-menu {
		@apply flex;
		@apply flex-col;
		@apply absolute;
		@apply border;
		@apply border-blue-600;
		@apply rounded;
		@apply bg-blue-600;
		@apply inset-x-0;
		@apply top-0;
		@apply w-64;
		@apply z-10;
		margin-left: -1px;
		margin-right: -1px;

		.menu-entry {
			@apply flex;
			@apply items-center;
			@apply text-cn-blue-900;
			@apply font-normal;
			@apply p-2;
			@apply py-4;
			@apply cursor-pointer;
			&:hover {
				@apply bg-blue-500;
			}
		}

		.added {
			@apply font-normal;
			@apply p-2;
			@apply py-4;
			@apply text-center;
			@apply text-green-400;
		}
	}
</style>
