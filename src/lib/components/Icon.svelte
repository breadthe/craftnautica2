<script>
	import Box from '$lib/components/icons/Box.svelte';
	import ChevronDown from '$lib/components/icons/ChevronDown.svelte';
	import ChevronUp from '$lib/components/icons/ChevronUp.svelte';
	import FolderPlus from '$lib/components/icons/FolderPlus.svelte';
	import Github from '$lib/components/icons/Github.svelte';
	import MinusCircle from '$lib/components/icons/MinusCircle.svelte';
	import PlusCircle from '$lib/components/icons/PlusCircle.svelte';
	import Search from '$lib/components/icons/Search.svelte';
	import Settings from '$lib/components/icons/Settings.svelte';
	import ShoppingCart from '$lib/components/icons/ShoppingCart.svelte';
	import Twitter from '$lib/components/icons/Twitter.svelte';
	import X from '$lib/components/icons/X.svelte';
	import XCircle from '$lib/components/icons/XCircle.svelte';

	export let icon;
	export let color;
	export let title = '';
	export let size = 24;
	export let klass = ''; // Merge default classes with prop classes; aka "class" but it's an invalid keyword so wth

	const icons = [
		{ id: 'box', component: Box },
		{ id: 'chevron-down', component: ChevronDown },
		{ id: 'chevron-up', component: ChevronUp },
		{ id: 'folder-plus', component: FolderPlus },
		{ id: 'github', component: Github },
		{ id: 'minus-circle', component: MinusCircle },
		{ id: 'plus-circle', component: PlusCircle },
		{ id: 'search', component: Search },
		{ id: 'settings', component: Settings },
		{ id: 'shopping-cart', component: ShoppingCart },
		{ id: 'twitter', component: Twitter },
		{ id: 'x', component: X },
		{ id: 'x-circle', component: XCircle },
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
	class={`feather icon ${color} ${klass}`}
>
	<svelte:component this={icons.find((i) => i.id === icon).component} />
</svg>
