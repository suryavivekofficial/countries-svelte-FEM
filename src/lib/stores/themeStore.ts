import type { Writable } from 'svelte/store';
import { writable } from 'svelte/store';
import { browser } from '$app/env';

let storedTheme = false;

if (browser) {
	storedTheme = localStorage.theme === 'dark';
}

export const isDarktheme: Writable<boolean> = writable(storedTheme || false);

if (browser) {
	isDarktheme.subscribe((value) => localStorage.setItem('theme', value ? 'dark' : 'light'));
}
