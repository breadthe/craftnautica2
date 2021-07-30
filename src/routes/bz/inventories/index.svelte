<script>
	import { page } from '$app/stores';
	import util from '$lib/util';
	import Inventories from '$lib/components/Inventories.svelte';

	const domain = $page.path.split('/')[1]; // ['/', 'bz']
	const fullDomainName = util.fullDomainName(domain);
</script>

<svelte:head>
    <title>Subnautica: Below Zero item inventories | Craftnautica</title>
</svelte:head>

<section>
	<Inventories {domain} {fullDomainName} />
</section>
