<script context="module">
	// Is called once on initial page load
	export async function load({ page, fetch, session, context }) {
		const domain = page.path.split('/')[1]; // ['/', 'bz']

		return {
            props: {
                domain: domain
            }
        };
	}
</script>

<script>
	import util from '$lib/util';
	import Cart from '$lib/components/Cart.svelte';

    export let domain;
	const fullDomainName = util.fullDomainName(domain);
</script>

<svelte:head>
    <title>Subnautica: Below Zero shopping cart | Craftnautica</title>
</svelte:head>

<section>
	<Cart {domain} {fullDomainName} />
</section>
