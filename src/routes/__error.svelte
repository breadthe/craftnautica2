<script context="module">
    export function load({ error, status }) {
		return {
			props: {
				status: status,
				message: error.message,
			}
		};
	}
</script>

<script>
	export let status;
	export let message;
</script>

<svelte:head>
    <title>Error: {status} | Subnautica | Craftnautica</title>
</svelte:head>

<main class="flex flex-col items-center justify-center h-screen">
    <h1 class="text-6xl font-black">{status}</h1>
    <p class="font-mono">{message}</p>
</main>
