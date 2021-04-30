<script>
  export let sections;
  export let activeSection;

  let navbarOpen = false;

  const toggleNavbar = () => {
    navbarOpen = !navbarOpen;
  }

  const handleSectionClick = () => {
    navbarOpen = false;
  }
</script>

<style lang="scss">
  nav {
    display: block;
    position: sticky;
    background: #fff;
    width: 100%;
    transition: top 0.8s ease;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    z-index: 90;
    top: -100vh;
    grid-column: span 12;

    &.open {
      top: 0;
    }

    @media screen and (min-width: 560px) {
      top: 0;
    }

    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      text-align: center;
      li {
        display: inline-block;
        transition: all 0.5s ease;
        flex: 1 1 auto;
        padding: 0.75rem 0.5rem;
        &:hover, &:focus {
          background: #3c71da;
          color: #fff;
        }

        @media screen and (min-width: 560px) {

          &.selected {
            border-bottom: 3px solid #3c71da;
          }
        }

        a, a:link, a:visited, a:active, a:hover {
          letter-spacing: 1px;
          width: 100%;
          height: 100%;
          text-decoration: none;
          color: inherit;
          display: block;
        }
      }
    }

    @media screen and (min-width: 560px) {

      ul {
        flex-direction: row;
      }
    }
  }

  .nav-icon {
    width: 36px;
    height: 36px;
    position: fixed;
    margin: 32px 24px;
    bottom: 0;
    right: 0;
    transform: scale(1.25);
    transition: .5s ease-in-out;
    background: #1556d6;
    border-radius: 100%;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,.14),
      0 3px 1px -2px rgba(0,0,0,.12),
      0 1px 5px 0 rgba(0,0,0,.2);
    cursor: pointer;
    z-index: 100;

    span {
      display: block;
      position: absolute;
      height: 2px;
      width: 22px;
      background: #fff;
      border-radius: 2px;
      opacity: 1;
      left: 7px;
      transform: rotate(0deg);
      transition: .25s ease-in-out;
    }

    span:nth-child(1) {
      top: 10px;
    }

    span:nth-child(4) {
      top: 24px;
    }

    span:nth-child(2),
    span:nth-child(3) {
      top: 17px;
    }

    &.open span:nth-child(1) {
      top: 17px;
      width: 0%;
      left: 50%;
    }

    &.open span:nth-child(2) {
      transform: rotate(45deg);
    }

    &.open span:nth-child(3) {
      transform: rotate(-45deg);
    }

    &.open span:nth-child(4) {
      top: 16px;
      width: 0%;
      left: 50%;
    }

    @media screen and (min-width: 560px) {
      display: none;
    }
  }
</style>

<div
  class="nav-icon{navbarOpen ? ' open': ''}"
  on:click={toggleNavbar}
>
  <span /><span /><span /><span />
</div>
<nav class="{navbarOpen ? ' open': ''}">
  <ul>
    {#each sections as [id, title]}
      <li
        class="{activeSection === id ? 'selected' : ''}"
        on:click={() => handleSectionClick(id)}
      >
          <a href="#{id}">{title}</a>
      </li>
    {/each}
  </ul>
</nav>
