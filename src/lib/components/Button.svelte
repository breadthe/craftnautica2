<script>
	import { createEventDispatcher } from 'svelte';
	import Icon from '$lib/components/Icon.svelte';

	export let link = false; // Boolean, true: render as link (no border, used mostly for Cancel), false: render as button
	export let icon;

	const dispatch = createEventDispatcher();
</script>

<button
	on:click={() => dispatch('click')}
	class="flex items-center text-blue-600 p-2 {link
		? 'mx-2'
		: 'border border-blue-600 rounded hover:bg-blue-900'}"
>
	{#if icon}
		<Icon {icon} color="text-blue-600" klass="mr-2" />
	{/if}
	<slot />
</button>
