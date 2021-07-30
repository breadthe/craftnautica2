<script>
	import { cart, inventories } from '$store';
	import Cart from '../../cart';
	import Inventories from '../../inventories';
	import Button from '$lib/components/Button.svelte';
	import Icon from '$lib/components/Icon.svelte';

	let fileImportForm;
	let importedFileName = '';
	let importedData = null;
	let restoreConfirm = false;
	let restoredSuccessfully = false;
	let error = null;
	let draggingOver = false;

	function restoreData() {
		const cart = new Cart();
		cart.set(JSON.parse(importedData.cart));
		// cart.init();

		const inventories = new Inventories();
		inventories.set(JSON.parse(importedData.inventory));
		// inventories.init();

		restoredSuccessfully = true;
		restoreConfirm = false;
		resetImportedData();
		setTimeout(() => {
			restoredSuccessfully = false;
		}, 5000);
	}

	async function readFile($event) {
		const file = $event.target.files[0];

		if (file && file.type === 'application/json') {
			importedFileName = file.name;
			const reader = new FileReader();

			reader.onload = await function (event) {
				importedData = JSON.parse(event.target.result);

				showImportedData();
			}.bind(this);

			reader.onerror = await function () {
				// handle file read error
			};

			await reader.readAsText(file);
		} else {
			resetImportedData();
		}
	}

	function showImportedData() {
		restoreConfirm = true;
	}

	function resetImportedData() {
		// Reset the file input explicitly; simply clearing the data won't reset it properly
		// fileImportForm.reset();
		importedFileName = '';
		importedData = null;
	}

	function cancelImport() {
		resetImportedData();
		restoreConfirm = false;
	}

	function onDragenter(e) {
		draggingOver = true;
	}

	function onDragleave(e) {
		draggingOver = false;
	}

	function onDrop(e) {
		draggingOver = false;
		error = null;
	}
</script>

<section class="border-b border-blue-900 flex flex-col sm:flex-row my-8 pb-8">
	<h2 class="w-full sm:w-1/6 text-2xl font-bold">Import</h2>

	<div class="w-full sm:w-5/6">
		<p class="mb-4 mt-4 sm:mt-0">Import a previously saved JSON export of your data.</p>
		<p class="mb-4 text-red-500">
			This will overwrite your existing <strong class="font-bold">Cart</strong> and
			<strong class="font-bold">Inventory</strong>!
		</p>

		{#if !restoreConfirm && !restoredSuccessfully}
			<form bind:this={fileImportForm}>
				<label
					for="fileUploader"
					class="relative flex flex-col justify-center items-center mt-2 sm:mt-0 p-8 sm:p-4 border-2 rounded border-dashed w-full font-light text-lg text-center"
					class:border-red-600={error}
					class:bg-red-500={error}
					class:border-blue-600={!error}
					class:bg-blue-600={draggingOver}
					class:bg-blue-900={!draggingOver}
				>
					<span class="font-bold mb-4">Upload a file by clicking or dragging here</span>
					<span><strong>.json</strong> files only</span>

					<input
						id="fileUploader"
						name=""
						type="file"
						alt="Image upload"
						on:change={(event) => readFile(event)}
						on:dragenter={onDragenter}
						on:dragleave={onDragleave}
						on:drop={onDrop}
						class="absolute w-full inset-0 opacity-0 bg-green-100"
					/>
				</label>
			</form>
		{/if}

		{#if restoredSuccessfully}
			<div
				class="mt-2 sm:mt-0 p-4 border-2 rounded border-dashed w-full font-light text-center text-2xl bg-green-900 border-green-600 text-green-100"
			>
				Data restored successfully!
			</div>
		{/if}

		<!--  Restore confirmation  -->
		{#if restoreConfirm}
			<section>
				<div class="flex flex-col max-w-sm mx-auto my-4 mt-8 p-4 rounded border-2 border-blue-900">
					<p>Are you sure you want to restore the following data?</p>

					<div class="flex flex-row justify-between mt-4">
						<Button link icon="x" on:click={cancelImport}>Cancel</Button>

						<Button icon="upload" on:click={restoreData}>Restore</Button>
					</div>
				</div>

				<h2
					class="mt-8 p-4 bg-blue-900 rounded rounded-b-none border-b border-cn-blue-900 text-2xl font-bold"
				>
					Cart
				</h2>
				<div
					class="bg-blue-900 p-4 shadow-inner rounded rounded-t-none overflow-auto font-mono max-w-full"
				>
					{importedData.cart}
				</div>

				<h2
					class="mt-8 p-4 bg-blue-900 rounded rounded-b-none border-b border-cn-blue-900 text-2xl font-bold"
				>
					Inventory
				</h2>
				<div
					class="bg-blue-900 p-4 shadow-inner rounded rounded-t-none overflow-auto font-mono max-w-full"
				>
					{importedData.inventory}
				</div>
			</section>
		{/if}
	</div>
</section>
