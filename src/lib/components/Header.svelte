<script>
	import { getStores, navigating, page, session } from '$app/stores';
	import Icon from '$lib/components/Icon.svelte';

	$: domain = $page.path.split('/')[1]; // ['/', 'sn']

	/* export default {
      name: 'NavMain',
      components: {
        VIcon,
      },
      computed: {
        domain: vm => vm.$route.path.split(/\//)[1],
        showCart: vm => ['sn', 'bz'].indexOf(vm.domain) > -1,
        cartCount: function () {
          const cart = this.$store.state.Cart.cart[this.domain];
          return cart ? cart.length : 0;
        },
        inventoriesCount: function () {
          return this.$store.getters.inventoriesCount(this.domain);
        },
      },
    }; */
</script>

<header>
	<nav id="nav" class="bg-black">
		<div class="flex items-center justify-between max-w-6xl mx-4 sm:mx-8 lg:mx-auto">
			<!-- Left side -->
			<div class="flex-1 flex items-center -ml-3 sm:-ml-0">
				<a
					href="/"
					class="flex items-center justify-center mr-4"
					aria-label="Craftnautica - Subnautica & Subnautica: Below Zero crafting helper"
				>
					<span class="logo hidden sm:block uppercase">
						<span class="sub">Craft</span><span class="nautica">nautica</span>
					</span>
					<span class="flex sm:hidden">
						<img
							src="favicons/favicon-32x32.png"
							alt="Craftnautica - Subnautica & Subnautica: Below Zero crafting helper"
							title="Craftnautica - Subnautica & Subnautica: Below Zero crafting helper"
						/>
					</span>
				</a>

				<a
					href="/sn"
					class="border-b-4 border-black pb-2 mt-3 mr-4 text-gray-400 hover:text-white text-sm sm:text-base {domain ===
					'sn'
						? 'font-bold text-blue-100 border-blue-600'
						: 'hover:border-gray-400'}"
				>
					Subnautica
				</a>

				<a
					href="/bz"
					class="border-b-4 border-black pb-2 mt-3 mr-4 text-gray-400 hover:text-white text-sm sm:text-base {domain ===
					'bz'
						? 'font-bold text-blue-100 border-blue-600'
						: 'hover:border-gray-400'}"
				>
					Below Zero
				</a>
			</div>

			<!-- Right side -->
			<div class="flex items-center -mr-2 sm:-mr-0">
				<!-- Inventories -->
				<!-- <router-link
				v-if="showCart"
				:to="`/${domain}/inventories`"
				class="flex items-center ml-4 sm:ml-8"
			>
				<v-icon
					icon="box"
					:color="inventoriesCount ? 'blue-dark' : 'blue-darkest'"
					title="Inventories"
				/>
				<span
					v-if="inventoriesCount"
					class="ml-2 w-4 h-4 sm:w-6 sm:h-6 flex items-center justify-center rounded-full border-2 border-blue bg-blue text-black text-sm"
					:title="`${inventoriesCount} inventories`"
				>
					{{ inventoriesCount }}
				</span>
			</router-link> -->

				<!-- Cart -->
				<!-- <router-link v-if="showCart" :to="`/${domain}/cart`" class="flex items-center ml-4 sm:ml-8">
				<v-icon
					icon="shopping-cart"
					:color="cartCount ? 'blue-dark' : 'blue-darkest'"
					title="Shopping cart"
				/>
				<span
					v-if="cartCount"
					class="ml-2 w-4 h-4 sm:w-6 sm:h-6 flex items-center justify-center rounded-full border-2 border-blue bg-blue text-black text-sm"
					:title="`${cartCount} items in cart`"
				>
					{{ cartCount }}
				</span>
			</router-link> -->

				<!-- Settings -->
				<a href="/settings" class="flex items-center ml-4 sm:ml-8">
                    <Icon icon="settings" color="blue-600" title="Settings" />
				</a>
			</div>
		</div>
	</nav>
</header>
