<script lang="ts">
	// import { countrySelected } from '../stores/countryStore';

	const selectCountry = () => {
		// console.log(country.cca2);
		// countrySelected.set(country.cca2);
		// console.log($countrySelected);
		window.location.replace(`/${country.cca2}`);
	};

	export let country: any;
</script>

<div on:click={selectCountry} class="bg-white dark:bg-darkBlue rounded-md drop-shadow-md">
	<div class="rounded-t-md h-1/2">
		<img
			class="rounded-t-md h-full w-full object-cover"
			src={country.flags.png}
			alt={country.name.common}
		/>
	</div>
	<div class="p-4 space-y-4">
		<h3 class="text-xl font-semibold">{country.name.common}</h3>
		<div>
			<h6>Population: {country.population.toLocaleString('en-US')}</h6>
			<h6>Region: {country.region}</h6>
			<h6>Capital: {country.capital}</h6>
		</div>
	</div>
</div>
