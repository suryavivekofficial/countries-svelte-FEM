import { writable, type Writable } from 'svelte/store';

export const countrySelected: Writable<string> = writable('');
export const countries: Writable<[]> = writable([]);

const fetchCountries = async () => {
	try {
		const res = await fetch('https://restcountries.com/v3.1/all');
		const data = await res.json();
		countries.set(data);
	} catch (error) {
		console.error(error);
	}
};

fetchCountries();
