<script>
	import { page } from '$app/stores';
	import util from '$lib/util';
	import Cart from '$lib/components/Cart.svelte';

	const domain = $page.path.split('/')[1]; // ['/', 'bz']
	const fullDomainName = util.fullDomainName(domain);
</script>

<svelte:head>
    <title>Subnautica: Below Zero shopping cart | Craftnautica</title>
</svelte:head>

<section>
	<Cart {domain} {fullDomainName} />
</section>
