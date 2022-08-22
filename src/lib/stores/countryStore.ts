import { writable, type Writable } from 'svelte/store';

export const countrySelected: Writable<string> = writable('');

countrySelected.subscribe((value) => console.log(value));
