<script lang="ts">
	import Nav from '$lib/components/Nav.svelte';
	import { isDarktheme } from '../lib/stores/themeStore';

	import '../app.css';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" />
	<link
		href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap"
		rel="stylesheet"
	/>
	<title>Country</title>
</svelte:head>

<div class={$isDarktheme ? `dark` : ``}>
	<div
		class="min-h-screen w-full bg-lightGray text-darkBlueText dark:bg-darkBlueBg dark:text-white"
	>
		<Nav />
		<slot />
	</div>
</div>

<style>
	* {
		font-family: 'Nunito Sans', sans-serif;
	}
</style>
