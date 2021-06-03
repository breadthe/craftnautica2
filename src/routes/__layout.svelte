<script>
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
