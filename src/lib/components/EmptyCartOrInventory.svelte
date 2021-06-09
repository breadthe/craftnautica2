<script>
	import { cart } from '$store';
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
				if (inventory) {
					// TODO
					/* $store.dispatch('inventoryAction', {
						action: 'empty',
						domain: domain,
						inventory: inventory,
						id: null,
						quantity: null
					}); */
				}
				break;
			default:
				break;
		}
	}
</script>

{#if confirmEmpty}
	<div class="flex items-center justify-end mt-4">
		Are you sure?

		<!-- <v-button link @click="confirmEmpty = false">Cancel</v-button> -->
		<Button link on:click={() => (confirmEmpty = false)}>Cancel</Button>

		<!-- <v-button icon="trash-2" @click="emptyIt">Yes, Empty It</v-button> -->
		<Button icon="trash-2" on:click={emptyIt}>Yes, Empty It</Button>
	</div>
{:else}
	<div class="flex justify-end mt-4">
		<!-- <v-button icon="trash-2" @click="confirmEmpty = true">Empty {{ what }}</v-button> -->
		<Button icon="trash-2" on:click={() => (confirmEmpty = true)}>Empty { what }</Button>
	</div>
{/if}
