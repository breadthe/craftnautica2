<script>
	import util from '$lib/util';
	import ItemIcon from '$lib/components/ItemIcon.svelte';

	export let domain; // String
	export let list; // Array, components list
	export let title; // String
</script>

<div class="flex flex-col mt-4">
	<h3 class="flex justify-between border-b border-gray-600 py-2">
		{title}

		{#if list.length}
			<span class="font-light">
				<strong class="font-bold">{list.length}</strong> item{list.length === 1 ? '' : 's'}
			</span>
		{/if}
	</h3>

	{#each list as component (component.c)}
		<div
			class="flex justify-between items-center my-2 -mx-2 p-2 text-lg font-light hover:bg-blue-900"
		>
			<a href={`/${domain}/i/${component.c}`} class="flex items-center">
				<ItemIcon id={component.c} klass="mr-4" />

				{util.pretty(component.c)}
			</a>

			<div>{component.q}</div>
		</div>
	{/each}
</div>
