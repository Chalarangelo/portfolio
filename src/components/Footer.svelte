<style lang="scss">
  footer {
    background:linear-gradient(180deg, #f7f7f7 0%, #f0f0f0 100%);
    margin-top: 44px;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: 0.25rem;
    grid-column: span 12;
    padding: 14px 8px;

    @media screen and (min-width: 560px) {
      padding: 20px 12px;
    }

    > div {
      grid-column: span 12;
      max-width: 100%;

      @media screen and (min-width: 768px) {
        grid-column: 3/11;
      }

      @media screen and (min-width: 1280px) {
        grid-column: 4/10;
      }
    }

    p, a, a:link, a:visited {
      font-size: 0.8rem;
      color: #666;
      line-height: 1.4;
    }

    a {
      font-weight: 400;
    }
  }
</style>

<footer class="col-full container">
  <div>
    <p>Designed and developed by Angelos Chalaris &copy; 2017 - 2022<br/>
      Photo by <a href="https://unsplash.com/photos/OQr38nR9DDs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" rel="noopener noreferrer" target="_blank">Sander Crombach</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" rel="noopener noreferrer" target="_blank">Unsplash</a><br/>
      Icons made by <a href="https://www.flaticon.com/authors/dave-gandy" rel="noopener noreferrer" target="_blank">Dave Gandy</a> and <a href="https://www.freepik.com/" rel="noopener noreferrer" target="_blank">Freepik</a> from <a href="https://www.flaticon.com/" target="_blank">Flaticon</a>, as well as <a href="https://twitter.com/colebemis" rel="noopener noreferrer" target="_blank">Cole Blemis</a> from <a href="https://feathericons.com/" rel="noopener noreferrer" target="_blank">Feather</a>
    </p>
  </div>
</footer>
