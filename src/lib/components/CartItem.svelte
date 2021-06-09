<script>
	import { cart } from '$store';
	import util from '$lib/util';
	import ItemIcon from '$lib/components/ItemIcon.svelte';
	import Icon from '$lib/components/Icon.svelte';

	export let domain; // String
	export let item; // Object | Example: {Gas_Pod: 1}
	export let showRecipe; // Boolean
	export let recipe; // Array

	function qty(item) {
		return item[Object.keys(item)[0]];
	}

	function deleteItem(id) {
		cart.deleteItem({ domain: domain, id: id });
	}

	function incrementQty(id) {
		cart.incrementQty({ domain: domain, id: id });
	}

	function decrementQty(id) {
		cart.decrementQty({ domain: domain, id: id });
	}

	/* export default {
      computed: {
        showingRecipe: {
          get: function () { return this.showRecipe; },
          set: function (data) { this.showRecipe = data; },
        },
      },
      watch: {
        dataShowRecipe: function () {
          this.showingRecipe = this.dataShowRecipe;
        },
      },
      methods: {
        // TODO: refactor the following cart methods into 1 with an additional action param
        deleteItem: function (id) {
          this.$store.dispatch('deleteItem', { domain: this.domain, id: id });
        },
        incrementQty: function (id) {
          this.$store.dispatch('incrementQty', { domain: this.domain, id: id });
        },
        decrementQty: function (id) {
          this.$store.dispatch('decrementQty', { domain: this.domain, id: id });
        },
      },
    }; */
</script>

<section class="flex flex-col hover:bg-blue-900 -mx-4 px-4">
	<div class="flex justify-between items-center my-2 -mx-2 p-2 text-lg font-light">
		<div class="flex items-center w-1/2">
			<a href={`/${domain}/i/${util.id(item)}`}>
				<ItemIcon id={util.id(item)} />
			</a>

			<div class="relative flex flex-col ml-4 -my-2">
				<a href={`/${domain}/i/${util.id(item)}`} class="my-1">
					{util.pretty(util.id(item))}
				</a>

				{#if recipe.length}
					<button
						type="button"
						on:click|stopPropagation|preventDefault={() => (showRecipe = !showRecipe)}
						class="flex items-center text-sm text-gray-400 focus:outline-none"
					>
						{showRecipe ? 'Hide recipe' : 'Show recipe'}
						<Icon
							icon={showRecipe ? 'chevron-up' : 'chevron-down'}
							color="text-gray-400"
							title="Show recipe"
						/>
					</button>
				{/if}
			</div>
		</div>

		<div class="flex items-center justify-end w-1/4">
			{#if qty(item) > 1}
				<button on:click={decrementQty(util.id(item))} class="flex mr-4">
					<Icon icon="minus-circle" color="text-blue-600" title="Decrement quantity" />
				</button>
			{/if}
			{qty(item)}
			<button on:click={incrementQty(util.id(item))} class="flex ml-4">
				<Icon icon="plus-circle" color="text-blue-600" title="Incrment quantity" />
			</button>
		</div>

		<div class="flex items-center">
			<button on:click={deleteItem(util.id(item))} class="flex ml-4">
				<Icon icon="x-circle" color="text-blue-600" title="Delete item" />
			</button>
		</div>
	</div>

	<!-- ============= Recipe ============= -->
	{#if showRecipe && recipe.length}
		<div class="flex p-1 -mt-2 -mx-2 mb-6 z-10 flex-wrap">
			{#each recipe as item, index (index)}
				<div class="mx-2 flex items-center rounded-full bg-blue-900 pr-2">
					<a href={`/${domain}/i/${item.c}`}>
						<ItemIcon small id={item.c} />
					</a>

					{util.pretty(item.c)}
					&nbsp;x&nbsp;
					{item.q}
				</div>
			{/each}
		</div>
	{/if}
</section>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
