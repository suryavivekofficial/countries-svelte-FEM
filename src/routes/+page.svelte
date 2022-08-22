<script lang="ts">
	import { onMount } from 'svelte';
	import Country from '$lib/components/Country.svelte';
	import Search from '$lib/components/Search.svelte';

	let countries: any = [];

	onMount(async () => {
		const res = await fetch(`https://restcountries.com/v3.1/all`);
		countries = await res.json();
	});
</script>

<Search />

<div class="grid gap-16 px-8 rounded mt-16">
	{#each countries as country}
		<Country {country} />
	{:else}
		<div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
			<div class="animate-pulse flex space-x-4">
				<div class="rounded-full bg-darkBlue h-10 w-10" />
				<div class="flex-1 space-y-6 py-1">
					<div class="h-2 bg-darkBlue rounded" />
					<div class="space-y-3">
						<div class="grid grid-cols-3 gap-4">
							<div class="h-2 bg-darkBlue rounded col-span-2" />
							<div class="h-2 bg-darkBlue rounded col-span-1" />
						</div>
						<div class="h-2 bg-darkBlue rounded" />
					</div>
				</div>
			</div>
		</div>
	{/each}
</div>

<style>
	.grid {
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
	}
</style>
