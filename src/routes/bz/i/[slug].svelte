<script context="module">
	// Is called once on initial page load
	export async function load({ page, fetch, session, context, error }) {
		const id = page.params.slug; // Example: 'Titanium_Ingot'
		const domain = page.path.split('/')[1]; // ['/', 'bz']

		return {
			props: {
				id: id,
				domain: domain
			}
		};
	}
</script>

<script>
	import { itemsStore } from '../../../store';
	import util from '$lib/util';
    import Error from './__error.svelte';
	import Details from '$lib/components/Details.svelte';

	export let id;
	export let domain;

    const fullDomainName = util.fullDomainName(domain);
    const item = $itemsStore[id];
</script>

<svelte:head>
    <title>{util.pretty(id)} | Subnautica: Below Zero | Craftnautica</title>
</svelte:head>

<section>
    {#if item}
	    <Details {id} {domain} {fullDomainName} />
    {:else}
        <Error status=404 message="Item does not exist" />
    {/if}
</section>
