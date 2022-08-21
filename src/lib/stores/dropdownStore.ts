import type { Writable } from 'svelte/store';
import { writable } from 'svelte/store';

export const isDropdown: Writable<boolean> = writable(false);
