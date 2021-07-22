<script>
	import { page } from '$app/stores';
	import util from '$lib/util';
	import ItemIcon from '$lib/components/ItemIcon.svelte';
	import ItemMenu from '$lib/components/ItemMenu.svelte';

	$: domain = $page.path.split('/')[1]; // ['/', 'sn']

	// Array (used to be Object in v1)
	// Example:
	// ["Thermoblade", {m: [{c: "Survival_Knife", q: 1}, {c: "Battery", q: 1}], t: "Recipes.Modification_Station.Survival_Knife"}]
	export let item;

	$: id = item[0]; // The item unique identifier

	let menu = false; // whether to show the item menu

	function closeItemMenu() {
		menu = false;
	}

	function clickOutsideAction(element, callbackFunction) {
		function onClick(event) {
			if (!element.contains(event.target)) {
				callbackFunction();
			}
		}

		document.body.addEventListener('click', onClick);

		return {
			update(newCallbackFunction) {
				callbackFunction = newCallbackFunction;
			},
			destroy() {
				document.body.removeEventListener('click', onClick);
			}
		};
	}
</script>

<div class="relative" use:clickOutsideAction={closeItemMenu}>
	<div on:click={() => (menu = true)} class="item-frame">
		<ItemIcon {id} />

		<span class="ml-2">
			{util.pretty(id)}
		</span>
	</div>

	{#if menu}
		<ItemMenu {id} {domain} on:closeItemMenu={closeItemMenu} />
	{/if}
</div>

<style scoped lang="scss">
	.item-frame {
		@apply flex;
		@apply items-center;
		@apply m-2;
		@apply py-2;
		@apply px-3;
		@apply cursor-pointer;
		@apply border;
		@apply border-blue-600;
		@apply rounded;
		@apply text-lg;
		@apply font-light;
		&:hover {
			@apply bg-blue-900;
			@apply border-blue-600;
		}
	}
</style>
