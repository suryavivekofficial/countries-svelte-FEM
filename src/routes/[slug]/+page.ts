export async function load({ params, fetch }) {
	try {
		const res = await fetch(`https://restcountries.com/v3.1/alpha/${params.slug}`);
		const data = await res.json();
		const country = data[0];
		return {
			name: country.name.common,
			nativeName: country.name.nativeName,
			img: country.flags.png,
			region: country.region,
			population: country.population,
			subRegion: country.subregion,
			capitals: country.capital,
			tld: country.tld,
			currencies: country.currencies,
			languages: country.languages,
			borders: country.borders
		};
	} catch (error) {
		console.error(404, 'Not found');
	}
}
