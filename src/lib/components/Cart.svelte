<script>
	import 'array-flat-polyfill';
	import { itemsStore, cart } from '$store';
	import util from '$lib/util';
	import Algo from '$lib/algo';
	import CartItem from '$lib/components/CartItem.svelte';
	import EmptyCartOrInventory from '$lib/components/EmptyCartOrInventory.svelte';
	// import ComponentsList from '@/components/ComponentsList.vue';
	import SubNautica from '$lib/components/SubNautica.svelte';
	import Icon from '$lib/components/Icon.svelte';

	export let domain;
	export let fullDomainName;

	let confirmEmptyCart = false;
	let showAllRecipes = false;

	$: cartItems = $cart[domain];
	$: items = $itemsStore;
	// shoppingList: vm => (new Algo(vm.items)).shoppingList(vm.cart),

	function components(id) {
		return new Algo(items).listOfMaterials(id);
	}

	/* export default {
      data: () => ({
        pretty: util.pretty,
        icon: util.icon,
        recipe: util.recipe,
        confirmEmptyCart: false,
        showAllRecipes: false,
      }),
      computed: {
        domain: vm => vm.$route.name.replace(/cart/, ''), // strip out "cart" from "sncart"
        fullDomainName: vm => util.fullDomainName(vm.domain),
        cart: vm => vm.$store.state.Cart.cart[vm.domain] || [],
        items: vm => vm.$store.state.App['items_' + vm.domain],
        shoppingList: vm => (new Algo(vm.items)).shoppingList(vm.cart),
      },
      methods: {
        components: function (id) {
          return (new Algo(this.items)).listOfMaterials(id);
        },
      },
    }; */
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
		{#if cartItems.length}
			<span>{cartItems.length} items</span>
		{/if}
	</div>

	{#if cartItems.length}
		<button
			type="button"
			on:click={() => (showAllRecipes = !showAllRecipes)}
			class="mx-4 flex items-center text-blue-600 border border-blue-600 p-2 rounded hover:bg-blue-900 mb-4"
		>
			{(showAllRecipes ? 'Hide ' : 'Show ') + 'All Recipes'}
		</button>
	{/if}

	<!-- ============= Cart Items ============= -->
	{#if cartItems.length}
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
			<!-- <components-list :domain="domain" title="Shopping List" :list="shoppingList" /> -->
		</div>
	{:else}
		<div class="flex flex-col text-center">Your cart is empty.</div>
	{/if}
</main>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
