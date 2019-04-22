

<main class="app-main app-theme">
	<div class="app-container">
		<div class="app-title">
			{ title }
		</div>
		<div class="app-search">
			<input placeholder="Search query..." class="app-search-input app-theme" bind:value=searchQuery>
			<button class="app-search-button app-theme" on:click="onSearch(searchQuery)">
				Search
			</button>
		</div>
		{#if response}
			{#if response.products}
				<Results data={{response}} />
			{:else}
				<p>
					No results. Please try another search query.
				</p>
			{/if}
		{/if}
	</div>
	
</main>

<script>

import Results from './Results.svelte';

const fetchResults = async (data, component, query) => {
	const token = '5cbd9ef4733fac0032d53b01-1555930868688-31732973';
  const r = await fetch(`https://api.altoshift.com/v1/search?query=${query}&token=${token}`);
	const json = await r.json();
  const response = json;
  component.set({ response });
	data.response = Object.assign({}, json);
};

export default {
	oncreate() {
		let data = this.get();
		this.set({searchQuery: ''});
	},
	methods: {
		search(query) {
			let data = this.get();
			fetchResults(data, this, query);
		},

		onSearch() {
			let data = this.get();
			if (data.searchQuery && data.searchQuery.length > 1) {
				this.search(data.searchQuery);
			}
		}
	},
	components: {
		Results
	}
};


</script>

<style>
	.app-main {
		background: #fafafa;
		color: #000;
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		right: 0;
		font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif; 
		 font-weight: 300;
		 z-index: 100000;
	}

	.app-container {
		background: #fff;
		padding: 16px;
		margin: 16px auto;
		width: 100%;
		max-width: 800px;
		box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);
		border-radius: 4px;
	}

	.app-title {
		font-size: 2rem;
	}

	.app-search {
		padding: 22px 0;
		text-align: center;
	}

	.app-search-input {
		padding: 12px;
    font-size: 1rem;
    border-radius: 4px 0 0 4px;
		border: 1px solid lightgrey;
		outline: none;
	}

	.app-search-button {
		cursor: pointer;
    font-size: 1rem;
    font-weight: 700;
    padding: 13px;
    background: lightgray;
    border: none;
    margin-left: -10px;
		border-radius: 0 4px 4px 0;
		outline: none;
	}
</style>
