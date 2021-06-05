<script>
	import Box from '$lib/components/icons/Box.svelte';
	import Github from '$lib/components/icons/Github.svelte';
	import Search from '$lib/components/icons/Search.svelte';
	import Settings from '$lib/components/icons/Settings.svelte';
	import ShoppingCart from '$lib/components/icons/ShoppingCart.svelte';
	import Twitter from '$lib/components/icons/Twitter.svelte';
	import X from '$lib/components/icons/X.svelte';

    export let icon, color, title = '';
    export let size = 24;

	const icons = [
        { id: 'box', component: Box },
        { id: 'github', component: Github },
        { id: 'search', component: Search },
        { id: 'settings', component: Settings },
        { id: 'shopping-cart', component: ShoppingCart },
        { id: 'twitter', component: Twitter },
        { id: 'x', component: X },
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
