<script context="module">
	// Is called once on initial page load
	export async function load({ page, fetch, session, context }) {
        const id = page.params.slug; // Example: 'Titanium_Ingot'

        if (!id) {
			return {
                status: 404,
				error: new Error('You must specify an item')
			};
		}
	}
</script>

<svelte:head>
    <title>Subnautica: Below Zero item list | Craftnautica</title>
</svelte:head>
