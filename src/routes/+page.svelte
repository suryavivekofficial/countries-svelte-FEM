<script lang="ts">
	import Country from '$lib/components/Country.svelte';
	import Search from '$lib/components/Search.svelte';
	import { countries } from '$lib/stores/countryStore';

	let searchTerm = '';

	let searchedCountries: any[] = [];

	$: {
		if (searchTerm) {
			searchedCountries = $countries.filter((country) =>
				country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
			);
		} else {
			searchedCountries = [...$countries];
		}
	}
</script>

<Search bind:searchTerm />

<div class="grid gap-16 px-8 rounded mt-16 relative">
	{#each searchedCountries as country}
		<Country {country} />
	{:else}
		<div type="button" class=" absolute right-1/2 top-1/3 translate-x-2/4" disabled>
			<svg
				class="animate-spin h-8 w-8"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
			>
				<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
				<path
					class="opacity-75"
					fill="currentColor"
					d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
				/>
			</svg>
		</div>
	{/each}
</div>

<style>
	.grid {
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
	}
</style>
