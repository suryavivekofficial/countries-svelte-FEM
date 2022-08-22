<script lang="ts">
	export let data: any;
</script>

<div class="px-8">
	<a
		href="/"
		class="bg-darkBlue flex px-8 py-4 justify-center items-center my-4 rounded-md w-min space-x-4"
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
					fill-rule="evenodd"
					d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
				/>
			</svg>
		</span><span>Back</span>
	</a>
	<section class="flex justify-between items-center px-16 py-8">
		<div>
			<img src={data.img} alt={data.name} />
		</div>
		<div class="flex flex-col space-y-8 w-1/2">
			<h4 class="font-bold text-xl">{data.name}</h4>
			<div class="flex justify-between">
				<div>
					<h6 class="font-semibold">
						Native name: <span class="font-normal"
							>{data.nativeName[Object.keys(data.nativeName)[0]].common}</span
						>
					</h6>
					<h6 class="font-semibold">
						Population: <span class="font-normal">{data.population.toLocaleString('en-US')}</span>
					</h6>
					<h6 class="font-semibold">
						Region: <span class="font-normal">{data.region}</span>
					</h6>
					<h6 class="font-semibold">
						Sub region: <span class="font-normal">{data.subRegion}</span>
					</h6>
					<h6 class="font-semibold">
						Capital:
						{#each data.capitals as capital}
							<span class="font-normal">{capital}</span>
						{/each}
					</h6>
				</div>
				<div>
					<h6 class="font-semibold">
						Top level domain: <span class="font-normal">{data.tld}</span>
					</h6>
					<h6 class="font-semibold">
						Currencies:
						<span class="font-normal">{data.currencies[Object.keys(data.currencies)[0]].name}</span>
					</h6>
					<h6 class="font-semibold">
						Languages:
						<span class="font-normal">language</span>
					</h6>
				</div>
			</div>
			<div>
				<span class="font-semibold">Border countries:</span>
				{#each data.borders as border}
					<span class="bg-white dark:bg-darkBlue py-2 px-4 rounded-md mx-2 text-xs">{border}</span>
				{/each}
			</div>
		</div>
	</section>
</div>
