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
	<section class="flex justify-around">
		<div>
			<img src={data.flags.png} alt={data.name.common} />
		</div>
		<div>something</div>
	</section>
</div>
