<script>
  import Splash from './Splash.svelte';
  import Nav from './Nav.svelte';

  export let sections;
  export let activeSection;
</script>

<style>
  header {
    max-width: 100%;
    height: 100vh;
    overflow-x: hidden;
    display: flex;
    justify-content: center;
    grid-column: span 12;
  }
</style>

<header>
  <Splash />
</header>

<Nav
  sections={sections}
  activeSection={activeSection}
/>
