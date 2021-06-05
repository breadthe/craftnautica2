<script>
	import { itemsStore } from '../../store';
	import Recipes from '$lib/components/Recipes.svelte';

	console.log($itemsStore);
</script>

<section>
	<Recipes />
</section>
