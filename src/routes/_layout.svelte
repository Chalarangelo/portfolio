<style lang="scss">
  .container {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: 0.25rem;
  }
</style>

<div class="container">
	<slot></slot>
</div>
