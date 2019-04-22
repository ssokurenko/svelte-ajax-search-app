<div class="app-product">
  <div class="app-product-title">
    {data.product.title}
  </div>
  <img src="{data.product.image_link}" alt="" class="app-product-image">
</div>

<script>
export default {
	oncreate() {
		let data = this.get();
	},
	components: {}
};
</script>

<style>
.app-product {
  display: inline-block;
  width: 30%;
  margin: 4px;
  padding: 8px;
  text-align: center;
  border: 1px solid lightgray;
}

.app-product-title {
  max-width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 16px auto;
}

.app-product-image {
  height: 90px;
  margin-top: 12px;
}
</style>
