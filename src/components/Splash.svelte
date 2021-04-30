<style lang="scss">
  .backdrop {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    height: 100%;
    width: 100%;
    background-image: url('/splash.jpg');
    background-size: cover;
    background-position: center;

    &.filtered {
      filter: blur(0.5px) grayscale(12%) brightness(62.5%);
    }
  }

  .title {
    z-index: 5;
    align-self: center;
    padding: 0.5rem;
    max-width: 960px;
    text-align: center;

    @media screen and (min-width: 320px) {
      padding: 2rem;
    }

    h1 {
      text-shadow: 1px 2px 6px #212121;
      font-size: 2rem;
      text-transform: uppercase;
      line-height: 0.8;
      color: #fff;
      letter-spacing: 1px;

      @media screen and (min-width: 490px) {
        letter-spacing: 3px;
        font-size: 2.5rem;
      }

      @media screen and (min-width: 510px) {
        font-size: 3.25rem;
      }

      @media screen and (min-width: 768px) {
        font-size: 4rem;
      }

      small {
        margin-top: 24px;
        display: block;
        font-size: 1rem;
        letter-spacing: 2px;

        @media screen and (min-width: 320px) {
          margin-top: 32px;
          font-size: 1.25rem;
          letter-spacing: 5px;
        }
      }
    }
    .separator {
      background: #fff;
      height: 2px;
      width: 70px;
      margin: auto;

      @media screen and (max-height: 500px) {
        display: none;
      }
    }
  }
  .laptop {
    transform: scale(0.7);
    height: 160px;
    margin-bottom: -16px;

    @media screen and (max-height: 500px) {
      display: none;
    }

    @media screen and (min-width: 320px) {
      transform: scale(0.85);
      margin-bottom: 4px;
    }

    @media screen and (min-width: 768px) {
      transform: scale(1);
      height: 180px;
      margin-top: 16px;
      margin-bottom: 12px;
    }
  }
  .scroll-down {
    position: absolute;
    left: calc(50% - 0.5rem);
    bottom: 5vh;
    display: block;
    text-align: center;
    font-size: 1.25rem;
    z-index: 100;
    text-decoration: none;
    text-shadow: 0;
    width: 1rem;
    height: 1rem;
    border-bottom: 2px solid #fff;
    border-right: 2px solid #fff;
    transform: translate(-50%, 0%) rotate(45deg);
    animation: fade_move_down 2s ease-in-out infinite;
  }

  @keyframes fade_move_down {
    0% {
      transform:translate(0, -10px) rotate(45deg);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform:translate(0, 10px) rotate(45deg);
      opacity: 0;
    }
  }
</style>

<div class="backdrop" />
<div class="backdrop filtered" />
<div class="title">
  <img class="laptop" src="laptop.svg" alt=""/>
  <div class="separator" />
  <h1>Chalarangelo
    <small>Web developer</small>
  </h1>
</div>

<!-- svelte-ignore a11y-missing-content -->
<a href="#introduction" class="scroll-down"></a>
