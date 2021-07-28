<script>
	import { version } from '../../../package.json';
	import Icon from '$lib/components/Icon.svelte';

	/* export default {
      name: 'AppFooter',
      components: {
        VIcon,
      },
      props: {
        version: {
          type: String,
          required: true,
          default: '',
        },
      },
    }; */
</script>

<footer
    class="static bottom-0 mt-8 p-4 sm:p-8 bg-black flex flex-col items-center"
>
	<div class="flex items-start justify-between w-full max-w-2xl">
		<div class="flex flex-col">
			v{ version }
		</div>
		<div class="w-16 flex justify-between">
			<a href="https://github.com/breadthe/craftnautica2" aria-label="Craftnautica 2.0 on Github">
				<Icon icon="github" color="text-blue-500"></Icon>
			</a>
			<a href="https://twitter.com/brbcoding" aria-label="Find me on Twitter">
				<Icon icon="twitter" color="text-blue-500"></Icon>
			</a>
		</div>
		<div class="flex flex-col">
			<a href="/contact" class="mb-4 sm:mb-2" title="About/Contact">About/Contact</a>
			<a href="/privacy" class="mb-4 sm:mb-2" title="Privacy policy">Privacy Policy</a>
		</div>
	</div>

	<div class="mt-4 text-xs">All images and icons are copyright to their respective owners.</div>
</footer>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
