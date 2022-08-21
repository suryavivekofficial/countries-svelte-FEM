import type { Writable } from 'svelte/store';
import { writable } from 'svelte/store';

export const isDarktheme: Writable<boolean> = writable(false);
