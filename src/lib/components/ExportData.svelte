<script>
	import Button from '$lib/components/Button.svelte';

	let filename;
	$: {
		const date = new Date();
		const now = `${date.getFullYear()}-${
			date.getMonth() + 1
		}-${date.getDate()}T${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`;

		filename = `craftnautica-data_${now}.json`;
	}

	function exportData() {
		const exportStr = JSON.stringify({
			cart: localStorage.getItem('cart'),
			inventory: localStorage.getItem('inventory')
		});
		const dataUri = `data:application/json;charset=utf-8,${encodeURIComponent(exportStr)}`;

		const link = document.createElement('a');
		link.href = dataUri;
		link.style = 'visibility:hidden';
		link.download = filename;
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	}
</script>

<section class="border-b border-blue-900 flex flex-col sm:flex-row my-8 pb-8">
	<h2 class="w-full sm:w-1/6 text-2xl font-bold">Export</h2>

	<div class="w-full sm:w-5/6">
		<p class="mb-4 mt-4 sm:mt-0">
			You can export your <strong>Cart</strong> and <strong>Inventory</strong> in JSON format and then
			restore them from the saved backup.
		</p>
		<p class="mb-4">The file is saved to your default Downloads directory.</p>

		<Button icon="download" on:click={() => exportData()}>Export</Button>
	</div>
</section>
