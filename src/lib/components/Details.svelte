<script>
	import { itemsStore, cart, inventories } from '$store';
	import util from '$lib/util';
	import Algo from '$lib/algo';
	import ComponentsList from '$lib/components/ComponentsList.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import ItemIcon from '$lib/components/ItemIcon.svelte';
	import ItemMenu from '$lib/components/ItemMenu.svelte';

	export let id; // String
	export let domain; // String
	export let fullDomainName; // String

	$: items = $itemsStore;
	$: type = items[id].t;
	$: rawMat = type.split('.')[0] === 'Raw_Materials';
	$: components = new Algo(items).listOfMaterials(id);
	$: usedIn = util.usedIn(id, items);

	const domainInventories = $inventories[domain];

	let menu = false;
	let addingToCart = false;

	function addToCart() {
		addingToCart = true;
		cart.addToCart({ domain: domain, id: id, qty: 1 });
		setTimeout(() => {
			addingToCart = false;
		}, 750);
	}

	function wikiLink(item) {
		return domain === 'sn'
			? `https://subnautica.fandom.com/wiki/${item}`
			: `https://subnautica-belowzero.fandom.com/wiki/${item}`;
	}

	function closeItemMenu() {
		menu = false;
	}

	/**
	 * How much quantity of the current item is in each inventory
	 */
	function qtyInInventories() {
		const arr = [];

		if (!domainInventories) return arr;

		Object.entries(domainInventories).forEach((inventory) => {
			const itemsInInventory = Object.entries(inventory[1]); // all the items in the inventory being iterated over

			itemsInInventory.forEach((item) => {
				if (item[0] === id) {
					arr.push({
						i: inventory[0],
						q: item[1]
					});
				}
			});
		});

		return arr;
	}

	/**
	 * Total quantity of the current item across all inventories
	 */
	function totalQtyInInventories() {
		return qtyInInventories().reduce((total, i) => total + i.q, 0);
	}
</script>

<section class="mx-4 sm:mx-auto">
	<div class="flex justify-start">
		<a href={`/${domain}`}>{fullDomainName}</a>
		&nbsp;&gt;
		{util.formatType(type)}
	</div>

	<div class="flex justify-between items-center my-8 text-lg font-light">
		<div class="flex items-center">
			<ItemIcon {id} />

			<div class="flex flex-col ml-4">
				<h2 class="text-2xl font-bold">{util.pretty(id)}</h2>

				<a
					href={wikiLink(id)}
					target="_blank"
					class="flex items-center"
					title={`${fullDomainName} wiki link for ${util.pretty(id)}`}
				>
					wiki&nbsp;
					<Icon
						icon="external-link"
						size="16"
						color="text-blue-600"
						klass="group-hover:text-white"
					/>
				</a>
			</div>
		</div>

		<div class="flex">
			<!-- ============= Add to Inventory ============= -->
			<div use:util.clickOutsideAction={closeItemMenu} class="relative ml-4">
				<button
					on:click={() => (menu = true)}
					class="flex items-center text-gray-400 border border-blue-600 rounded p-2 text-2xl hover:bg-blue-600 group hover:text-white"
					title="Add to Inventory"
				>
					+&nbsp;
					<Icon
						icon="box"
						color="text-blue-600"
						title="Inventories"
						klass="group-hover:text-white"
					/>
				</button>

				{#if menu}
					<ItemMenu {id} {domain} on:closeItemMenu={closeItemMenu} />
				{/if}
			</div>

			<!-- ============= Add to Cart ============= -->
			<div class="ml-4">
				<button
					on:click={() => addToCart()}
					class="flex items-center text-gray-400 border border-blue-600 rounded p-2 text-2xl hover:bg-blue-600 group hover:text-white relative"
					title="Add to Cart"
				>
					+&nbsp;
					<Icon
						icon="shopping-cart"
						color="text-blue-600"
						title="Shopping cart"
						klass="group-hover:text-white"
					/>

					{#if addingToCart}
						<div
							class="text-center bg-blue-900 p-4 w-64 border border-blue-900 text-base text-white absolute right-0 -mr-1 transition"
						>
							Added to cart
						</div>
					{/if}
				</button>
			</div>
		</div>
	</div>

	<!-- ============= Recipe / Base Components ============= -->
	{#if rawMat}
		<div class="text-center text-lg">This item is a raw material or base component.</div>
	{:else}
		<!-- ============= Recipe ============= -->
		<ComponentsList {domain} list={util.recipe(id)} title="Recipe" />

		<!-- ============= Base Components ============= -->
		<ComponentsList {domain} list={components} title="Base Components" />
	{/if}

	<!-- ============= Used In ============= -->
	{#if usedIn.length}
		<ComponentsList {domain} list={usedIn} title="Used In" />
	{/if}

	<!-- ============= Inventories containing this item ============= -->
	{#if qtyInInventories()}
		<div class="mt-8">
			<div class="flex items-center justify-between border-b border-gray-600 py-2">
				<h3 class="flex items-center space-x-2">
					<a href={`/${domain}/inventories`} class="flex items-center space-x-2">
						<Icon icon="box" color="text-blue-600" title="Inventories" />
						<span>Inventories</span>
					</a>
					<small class="font-light">({qtyInInventories().length})</small>
				</h3>
                <span class="text-lg">
                    <strong class="font-bold">{totalQtyInInventories()}</strong> item{totalQtyInInventories() === 1 ? '' : 's'}
                </span>
			</div>

			{#each qtyInInventories() as inventory, i (i)}
				<div
					class="flex justify-between items-center my-2 -mx-2 p-2 text-lg font-light hover:bg-blue-darker"
				>
					<div class="flex items-center font-bold">
						{util.pretty(inventory.i)}
					</div>
					<div>{inventory.q}</div>
				</div>
			{/each}
		</div>
	{/if}
</section>
