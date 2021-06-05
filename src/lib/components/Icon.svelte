<script>
	import Box from '$lib/components/icons/Box.svelte';
	import Github from '$lib/components/icons/Github.svelte';
	import Settings from '$lib/components/icons/Settings.svelte';
	import ShoppingCart from '$lib/components/icons/ShoppingCart.svelte';
	import Twitter from '$lib/components/icons/Twitter.svelte';

    export let icon, color, title = '';
    export let size = 24;

	const icons = [
        { id: 'box', component: Box },
        { id: 'github', component: Github },
        { id: 'settings', component: Settings },
        { id: 'shopping-cart', component: ShoppingCart },
        { id: 'twitter', component: Twitter },
    ];
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 24 24"
	fill="rgba(0,0,0,0)"
	stroke="currentColor"
	stroke-width="2"
	stroke-linecap="round"
	stroke-linejoin="round"
    width={size}
    height={size}
    {title}
	class="feather icon {color} {`w-${size}`} {`h-${size}`}"
>
	<svelte:component this={icons.find(i => i.id === icon).component} />
</svg>
