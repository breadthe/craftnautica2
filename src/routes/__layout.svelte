<script context="module">
	// Is called once on initial page load
	export async function load({ page, fetch, session, context }) {
		const domain = page.path.split('/')[1]; // ['/', 'sn']

		// Load the items into the store, based on domain
		if (domain === 'sn' || domain === 'bz') {
			itemsStore.init(domain);

			// Initialize the cart
			cart.init();

			// Initialize inventories
            inventories.init();
		}

		return {};
	}
</script>

<script>
	import { itemsStore, cart, inventories } from '$store';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '../app.scss'; // app.postcss
</script>

<Header />

<main class="container max-w-6xl mx-auto p-4">
	<slot />
</main>

<Footer />

<style lang="scss">
</style>
