<script>
	import '../app.scss'; // app.postcss
</script>

<nav>
	<a href=".">Home</a>
	<a href="about">About</a>
	<a href="settings">Settings</a>
</nav>

<slot />

<style lang="scss">
    a {
        color: blue;
        text-decoration: underline;

        &:visited {
            color: purple;
        }
    }
</style>
