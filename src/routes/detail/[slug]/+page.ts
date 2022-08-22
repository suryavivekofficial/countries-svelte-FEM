/** @type {import('./$types').PageLoad} */

export async function load({ params }) {
	try {
		const res = await fetch(`https://restcountries.com/v3.1/alpha/${params.slug}`);
		const data = await res.json();
		return data[0];
	} catch (error) {
		console.error(404, 'Not found');
	}
}
