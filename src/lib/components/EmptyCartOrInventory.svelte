<script>
	import { cart, inventories } from '$store';
	import Button from '$lib/components/Button.svelte';

	export let what; // String
	export let domain; // String
	export let inventory; // String

	let confirmEmpty = false;

	function emptyIt() {
		switch (what) {
			case 'Cart':
				cart.emptyCart({ domain: domain });
				break;
			case 'Inventory':
                inventories.emptyInventory({ domain: domain, inventory: inventory });
				break;
			default:
				break;
		}
	}
</script>

{#if confirmEmpty}
	<div class="flex items-center justify-end mt-4">
		Are you sure?

		<Button link on:click={() => (confirmEmpty = false)}>Cancel</Button>

		<Button icon="trash-2" on:click={emptyIt}>Yes, Empty It</Button>
	</div>
{:else}
	<div class="flex justify-end mt-4">
		<Button icon="trash-2" on:click={() => (confirmEmpty = true)}>Empty { what }</Button>
	</div>
{/if}
