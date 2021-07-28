<script>
	import Icon from '$lib/components/Icon.svelte';
	import ExportData from '$lib/components/ExportData.svelte';
	// import ImportData from '$lib/components/ImportData.svelte';
</script>

<section class="max-w-4xl mx-auto">
	<h1 class="flex items-center">
		<Icon icon="settings" size="40" color="text-blue-600" title="Settings" klass="mr-4" />
		Settings
	</h1>

	<ExportData />

	<!-- <ImportData /> -->
</section>
