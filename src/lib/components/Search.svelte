<script>
	import { search } from '../../store';
	import Icon from '$lib/components/Icon.svelte';

	export let fullDomainName;

	const placeholder = `Search ${fullDomainName}... (Hit "/" to focus)`;

	let searchBar; // Reference to the search input

	// Register the "/" key as search keyboard shortcut
	function registerSearchShortcutAction() {
		window.addEventListener('keyup', handleKeyPress);

		return {
			destroy() {
				window.removeEventListener('keyup', handleKeyPress);
			}
		};
	}

	function handleKeyPress(e) {
		switch (e.key) {
			case '/':
				e.preventDefault();
				searchBar.focus();
				break;
			case 'Escape':
				e.preventDefault();
				search.set('');
				searchBar.blur();
				break;
			default:
				break;
		}
	}
</script>

<div class="flex items-center relative w-full max-w-lg">
	<Icon
		icon="search"
		color="text-gray-400"
		klass="absolute left-0 ml-4 sm:ml-8 mt-2 sm:mt-0 border-0 bg-transparent p-0"
	/>
	<input
		type="text"
		bind:this={searchBar}
		bind:value={$search}
        on:input={(e) => search.set(e.target.value)}
		{placeholder}
		class="flex-1 w-full sm:w-4/5 max-w-lg mt-4 sm:mt-0 ml-0 sm:ml-4 p-4 px-12 border-blue-900 bg-blue-900 text-gray-100"
		use:registerSearchShortcutAction
	/>

	{#if $search}
		<button
			on:click={() => search.set('')}
			class="absolute right-0 mr-4 border-0 bg-transparent p-0 text-blue-600"
		>
			<Icon icon="x" color="text-blue-500" klass="mt-4 sm:mt-0" />
		</button>
	{/if}
</div>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	button {
		margin-top: 1px;
	}
</style>
