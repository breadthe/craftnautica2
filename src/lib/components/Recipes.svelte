<script>
	import { page } from '$app/stores';
	import { itemsStore } from '../../store';
	import util from '$lib/util';
	import Search from '$lib/components/Search.svelte';
	import SubNautica from '$lib/components/SubNautica.svelte';
	import Type from '$lib/components/Type.svelte';

	$: domain = $page.path.split('/')[1]; // ['/', 'sn']
	$: fullDomainName = util.fullDomainName(domain);

	const items = $itemsStore;
	const types = util.types(items);

	function formatType(type) {
		return util.formatType(type);
	}
</script>

<section class="">
	<header
		class="flex flex-col sm:flex-row items-center sm:items-baseline justify-center sm:justify-between mx-4"
	>
		<SubNautica {fullDomainName} />

		<Search {fullDomainName} />
	</header>

	{#each types as type (type)}
		<Type type={formatType(type)} types={util.filterByType(items, type)} />
	{/each}
</section>
