<script>
  export let section;

  let sectionElement;

  export const getElement = () => sectionElement;
</script>

<style lang="scss">
  section {
    padding: 14px 8px;

    @media screen and (min-width: 560px) {
      padding: 20px 12px;
    }
  }

  .col-centered {
    grid-column: span 12;
    max-width: 100%;

    @media screen and (min-width: 768px) {
      grid-column: 3/11;
    }

    @media screen and (min-width: 1280px) {
      grid-column: 4/10;
    }
  }

  .col-full {
    grid-column: span 12;
  }

  h2 {
    font-size: 3.25rem;
    letter-spacing: -.1rem;
    margin-left: -4px;

    &::after {
      display: block;
      content: '';
      width: 22.5%;
      max-width: 130px;
      height: 2px;
      background: linear-gradient(135deg, #ffa361 0%, #638de0 100%);
      position: relative;
      top: 12px;
      left: 4px;
    }
  }

  .flex-container {
    display: flex;
    flex-flow: row wrap;
  }

  .flex-media-logo {
    flex: 0 0 auto;
    padding: 4px 8px 4px 0;
    max-width: 64px;
    flex-basis: 64px;
    text-align: center;
    align-self: center;
    box-sizing: border-box;

    img {
      width: 56px;
      height: auto;
    }
  }

  .flex-title {
    flex: 0 0 auto;
    max-width: 100%;
    flex-grow: 1;
    flex-basis: 0;

    @media screen and (min-width: 560px) {
      padding-left: 0.75vw;
    }

    h3 {
      font-size: 1.25rem;

      small {
        font-size: 0.8rem;
        display: block;

        + small {
          font-size: 0.75rem;
          color: #424242;
        }
      }
    }
  }

  .content-left-offset {
    margin-left: 64px;
    margin-top: -24px;

    @media screen and (min-width: 560px) {
      margin-left: calc(0.75vw + 64px);
    }

    p {
      margin-bottom: 8px;
    }

    ul {
      padding-left: 12px;
      margin-top: 8px;
      list-style: none;

      li:before {
        content: "-";
        position: absolute;
        margin-left: -12px;
      }
    }
  }
</style>

<section
  class="col-centered container"
  id="{section.id}"
  bind:this={sectionElement}
>
  <div class="col-full">
    <slot>
      <h2>{section.title}</h2>
      {#each section.items as item}
        <div class="flex-container">
          <div class="flex-media-logo">
            <img src="/assets/{item.asset}" alt="{item.title}">
          </div>
          <div class="flex-title">
            <h3>{item.title}
              {#if item.link}
                <a href="{item.link}" target="_blank">
                  <img src="/assets/link-external.svg" alt="{item.title}"/>
                </a>
              {/if}
              <small>{item.subtitle}</small>
              {#if item.detail}
                <small>{item.detail}</small>
              {/if}
            </h3>
          </div>
        </div>
        <div class="content-left-offset">
          <p>{@html item.content.intro}</p>
          {#if item.content.points && item.content.points.length}
            <ul>
              {#each item.content.points as point}
                <li>{@html point}</li>
              {/each}
            </ul>
          {/if}
        </div>
      {/each}
    </slot>
  </div>
</section>
