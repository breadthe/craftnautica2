<script>
	import 'array-flat-polyfill';
	import { itemsStore, cart } from '$store';
	import util from '$lib/util';
	import Algo from '$lib/algo';
	import CartItem from '$lib/components/CartItem.svelte';
	import EmptyCartOrInventory from '$lib/components/EmptyCartOrInventory.svelte';
	import ComponentsList from '$lib/components/ComponentsList.svelte';
	import SubNautica from '$lib/components/SubNautica.svelte';
	import Icon from '$lib/components/Icon.svelte';

	export let domain;
	export let fullDomainName;

	const items = $itemsStore;

    let showAllRecipes = false;

	$: cartItems = $cart[domain];
    $: shoppingList = (new Algo(items)).shoppingList(cartItems);
    $: cartCount = cartItems.length;
</script>

<main class="container mx-auto mt-4">
	<div class="flex flex-col sm:flex-row items-center justify-center sm:justify-between mb-8">
		<SubNautica {fullDomainName}>
			<Icon
				icon="shopping-cart"
				size="40"
				color="text-blue-600"
				title="Shopping cart"
				klass="mr-4"
			/>
		</SubNautica>
		{#if cartCount}
			<span class="text-2xl"><strong class="font-bold">{cartCount}</strong> item{cartCount === 1 ? '' : 's'}</span>
		{/if}
	</div>

	{#if cartCount}
		<button
			type="button"
			on:click={() => (showAllRecipes = !showAllRecipes)}
			class="mx-4 flex items-center text-blue-600 border border-blue-600 p-2 rounded hover:bg-blue-900 mb-4"
		>
			{(showAllRecipes ? 'Hide ' : 'Show ') + 'All Recipes'}
		</button>
	{/if}

	<!-- ============= Cart Items ============= -->
	{#if cartCount}
		<div class="mx-4">
			{#each cartItems as item, index (index)}
				<div class="">
					<CartItem
						{domain}
						{item}
						showRecipe={showAllRecipes}
						recipe={util.recipe(util.id(item), items)}
					/>
				</div>
			{/each}

			<!-- ============= Empty Cart ============= -->
			<EmptyCartOrInventory what="Cart" {domain} />

			<!-- ============= Shopping List ============= -->
            <ComponentsList {domain} list={shoppingList} title="Shopping List" />
		</div>
	{:else}
		<div class="flex flex-col text-center text-xl">Your cart is empty.</div>
	{/if}
</main>
