<script>
	import { inventories } from '$store';
	import Inventory from '$lib/components/Inventory.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import SubNautica from '$lib/components/SubNautica.svelte';

	export let domain; // String
	export let fullDomainName; // String

	// Example: [{"inventory": "Lifepod","items": {"Ion_Cube": 123}},{"inventory": "Cyclops","items": {"Copper_Ore": 3}}]
	$: domainInventories =
		domain && $inventories[domain]
			? Object.keys($inventories[domain]).map((i) => ({
					inventory: i,
					items: $inventories[domain][i]
			  }))
			: [];

	// Total inventories per domain
	$: inventoriesCount = domainInventories.length;
</script>

<main class="container mx-auto mt-4">
	<div class="flex flex-col sm:flex-row items-center justify-center sm:justify-between mb-8">
		<SubNautica {fullDomainName}>
			<Icon
				icon="box"
				size="40"
				color="text-blue-600"
				klass="mr-4"
				title="{fullDomainName} Inventories"
			/>
		</SubNautica>

		{#if inventoriesCount}
			<span class="text-2xl"><strong class="font-bold">{inventoriesCount}</strong> inventor{inventoriesCount === 1 ? 'y' : 'ies'}</span>
		{/if}
	</div>

	<!-- ============= Inventories ============= -->
	{#if inventoriesCount}
		<div>
			<div class="max-w-4xl mx-4 sm:mx-auto">
				An overview of all your inventories (vehicles, bases, lockers, and other storage locations)
				where you store items and materials. You can easily see how much quantity of a certain
				material you have in each location.
			</div>

			{#each domainInventories as inventory (inventory.inventory)}
                <Inventory {domain} inventory={inventory.inventory} items={inventory.items} />
			{/each}
		</div>
	{:else}
		<div class="flex flex-col text-center">You don't have items in inventories yet.</div>
	{/if}
</main>
