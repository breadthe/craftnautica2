<script>
	export let fullDomainName;

	const prefix = fullDomainName === 'Subnautica' ? 'Sub' : 'Below';
	const suffix = fullDomainName === 'Subnautica' ? 'nautica' : 'Zero';
</script>

<h1 class="logo flex items-center">
	<slot />
	<span class="sub tracking-wider">{prefix}</span><span class="nautica tracking-wider">{suffix}</span>
</h1>
