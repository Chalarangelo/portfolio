<script>
  import '../app.scss';
</script>

<div class="container">
  <slot />
</div>

<style lang="scss">
  .container {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: 0.25rem;
  }
</style>
