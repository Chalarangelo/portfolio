<script>
  import Section from '../components/Section.svelte';
  import Intro from '../components/Intro.svelte';
  import Header from '../components/Header.svelte';
  import Footer from '../components/Footer.svelte';

  import { sections, sectionIds } from '../data';

  let sectionComponents = {};
  let activeSectionId = null;

  const handleScroll = () => {
    const scrollPos = document.documentElement.scrollTop +
      0.333 * document.documentElement.clientHeight;
    const activeSection = Object
      .values(sectionComponents)
      .map(s => {
        const el = s.getElement();
        const visible = el.offsetTop <= scrollPos;
        return [el, visible];
      })
      .reverse()
      .find(([_, visible]) => visible);

    if (!activeSection) return;
    activeSectionId = activeSection[0].id;
  };
</script>

<svelte:head>
  <title>Angelos Chalaris - Web Developer</title>
  <meta name="description" content="Angelos Chalaris (chalarangelo) is a web developer from Greece.">
  <meta name="author" content="Angelos Chalaris (chalarangelo)">
  <meta property="og:title" content="Angelos Chalaris (chalarangelo)">
  <meta property="og:type" content="website">
  <meta property="og:description" content="Angelos Chalaris (chalarangelo) is a web developer from Greece.">
  <meta property="og:image" content="https://avatars2.githubusercontent.com/u/8281875?v=4">
</svelte:head>

<svelte:window
  on:scroll={handleScroll}
/>

<Header
  sections={sectionIds.map(id => [id, sections[id].shortTitle])}
  activeSection={activeSectionId}
/>

{#each sectionIds as sectionId}
  {#if sectionId === 'introduction'}
  <Section
    section={sections[sectionId]}
    bind:this={sectionComponents[sectionId]}
  >
    <Intro />
  </Section>
  {:else}
    <Section
      section={sections[sectionId]}
      bind:this={sectionComponents[sectionId]}
    />
  {/if}
{/each}

<Footer />
