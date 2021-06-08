<script>
	import { search } from '$store';
	import util from '$lib/util';
	import Item from '$lib/components/Item.svelte';

	export let type; // String
	export let types; // Array (used to be Object -- how did I iterate over an object???)

	$: filteredItems = $search.length ? util.search(types, $search) : types;
	$: render = Object.entries(filteredItems).length || false;
</script>

{#if render}
	<section class="mx-4 xs:mx-0">
		<h3 class="mt-8 mb-4 font-bold text-lg">{type}</h3>

		<div class="flex flex-wrap justify-start -mx-2">
			{#each filteredItems as item, id (id)}
				<Item {item} />
			{/each}
		</div>
	</section>
{/if}
