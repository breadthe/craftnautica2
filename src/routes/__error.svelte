<script>
	export let status;
	export let error;
</script>

<main class="flex flex-col items-center justify-center h-screen">
    <h1 class="text-6xl font-black">{status}</h1>
    <p class="font-mono">{error.message}</p>
</main>
