<script lang="ts">
	import { onMount } from 'svelte';
	import Country from '$lib/components/Country.svelte';

	let countries: any = [];

	onMount(async () => {
		const res = await fetch(`https://restcountries.com/v3.1/all`);
		countries = await res.json();
	});
</script>

<div class="grid">
	{#each countries as country}
		<Country {country} />
	{:else}
		<span>loading...</span>
	{/each}
</div>
