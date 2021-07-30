<script context="module">
	// Is called once on initial page load
	export async function load({ page, fetch, session, context }) {
		const domain = page.path.split('/')[1]; // ['/', 'sn']

		return {
            props: {
                domain: domain
            }
        };
	}
</script>

<script>
	import util from '$lib/util';
	import Inventories from '$lib/components/Inventories.svelte';

    export let domain;
	const fullDomainName = util.fullDomainName(domain);
</script>

<svelte:head>
    <title>Subnautica item inventories | Craftnautica</title>
</svelte:head>

<section>
	<Inventories {domain} {fullDomainName} />
</section>
