<script lang="ts">
	import { isDropdown } from '../stores/dropdownStore';

	let searchTerm = '';

	const continents = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];
</script>

<div class="px-4 py-6 md:px-6 lg:px-8 flex justify-between items-center">
	<div
		class="bg-white dark:bg-darkBlue rounded-md flex space-x-4 px-4 justify-around items-center drop-shadow w-1/3"
	>
		<span>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				fill="currentColor"
				viewBox="0 0 16 16"
			>
				<path
					d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
				/>
			</svg>
		</span>
		<input
			class="dark:bg-darkBlue rounded-md py-4 w-full outline-none"
			type="text"
			bind:value={searchTerm}
			placeholder="Search for a country..."
		/>
	</div>

	<div class="relative inline-block text-left w-1/5">
		<div>
			<button
				on:click={() => ($isDropdown = !$isDropdown)}
				type="button"
				class="inline-flex justify-between items-center w-full rounded-md drop-shadow p-4 bg-white dark:bg-darkBlue"
				id="menu-button"
				aria-expanded="true"
				aria-haspopup="true"
			>
				<span>Filter by Region</span>
				<span>
					<svg
						class="ml-2 w-4 h-4"
						aria-hidden="true"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M19 9l-7 7-7-7"
						/>
					</svg>
				</span>
			</button>
		</div>

		<!--
    Dropdown menu, show/hide based on menu state.

    Entering: "transition ease-out duration-100"
      From: "transform opacity-0 scale-95"
      To: "transform opacity-100 scale-100"
    Leaving: "transition ease-in duration-75"
      From: "transform opacity-100 scale-100"
      To: "transform opacity-0 scale-95"
  -->
		<div
			class="{$isDropdown ? '' : 'hidden'} 
				origin-top-left absolute left-1 right-1 mt-3 shadow-lg bg-white dark:bg-darkBlue rounded-md"
			role="menu"
			aria-orientation="vertical"
			aria-labelledby="menu-button"
			tabindex="-1"
		>
			<div class="p-1 bg-white dark:bg-darkBlue rounded-md" role="none">
				{#each continents as continent}
					<a
						href="/"
						class="text-darkBlueText dark:text-white block px-4 py-2 text-sm hover:bg-lightGray dark:hover:bg-darkBlueBg"
						role="menuitem"
						tabindex="-1"
						id="menu-item-0">{continent}</a
					>
				{/each}
			</div>
		</div>
	</div>
</div>
