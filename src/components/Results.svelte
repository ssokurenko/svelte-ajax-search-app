<div class="app-results">
  <strong>Found: {data.response.total}</strong>

  <div class="app-products">
    {#each data.response.products as product}
      <Product data={{product}} />
    {/each}
  </div>
</div>

<script>
import Product from './Product.svelte';
export default {
	oncreate() {
		let data = this.get();
	},
	components: {
    Product
  }
};
</script>

<style>
.app-results {
  text-align: center;
}

.app-products {
  text-align: center;
  height: 100%;
  max-height: 500px;
  overflow-y: scroll;
  margin-top: 16px;
}
</style>