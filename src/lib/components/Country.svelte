<script lang="ts">
	export let country: any;
</script>

<div>
	<div>
		<img src={country.flags.png} alt={country.name.common} />
	</div>
	<div>
		<h3>{country.name.common}</h3>
		<div>
			<h6>Population: {country.population}</h6>
			<h6>Region: {country.region}</h6>
			<h6>Capital: {country.capital}</h6>
		</div>
	</div>
</div>
