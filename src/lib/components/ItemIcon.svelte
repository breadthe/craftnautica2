<script>
	import util from '$lib/util';

    export let id; // String
    export let small = false; // Boolean
</script>

<div
	class={small ? 'item-icon--sm mr-2' : 'item-icon'}
    style={`background-image: url(${util.icon(id)})`}
/>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.item-icon {
		@apply flex;
		@apply items-center;
		@apply justify-center;
		@apply w-12;
		@apply h-12;
		@apply p-6;
		@apply rounded-full;
		@apply bg-gray-900;
        @apply bg-contain;
        @apply bg-center;
        @apply bg-no-repeat;

		&--sm {
			@extend .item-icon;
			@apply w-8;
			@apply h-8;
			@apply p-4;
			background-size: 100%;
		}
	}
</style>
