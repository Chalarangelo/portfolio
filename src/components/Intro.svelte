<style lang="scss">
  h1 {
    font-size: 3rem;
    margin-bottom: 8px;
    margin-top: 16px;

    small {
      display: block;
      font-size: 1.25rem;
      color: #424242;
    }
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

  .flex-media-obj {
    flex: 0 0 auto;
    padding: 8px;
    max-width: calc(100% - 16px);
    flex-basis: 100%;
    text-align: center;

    @media screen and (min-width: 560px) {
      max-width: 136px;
      flex-basis: 120px;
    }
  }

  .flex-fill {
    flex: 0 0 auto;
    max-width: 100%;
    flex-grow: 1;
    flex-basis: 0;
    text-align: center;

    @media screen and (min-width: 560px) {
      text-align: left;
      padding-left: 1.25vw;
    }

    a:not(:first-of-type) {
      padding-left: 4px;
    }
  }

  .profile-picture {
    width: 120px;
    border-radius: 50%;
    max-width: 100%;
    height: auto;
  }
</style>


<div class="flex-container">
  <div class="flex-media-obj">
    <img src="https://avatars2.githubusercontent.com/u/8281875?v=4" class="profile-picture" alt="Angelos Chalaris">
  </div>
  <div class="flex-fill">
    <h1>Angelos Chalaris
      <small><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 8px;">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
        <circle cx="12" cy="10" r="3"></circle>
      </svg>Athens, Greece</small>
    </h1>
    <a href="mailto:chalarangelo@gmail.com" target="_blank" class="social-icon" title="Email"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
      </svg></a>
    <a href="https://github.com/Chalarangelo" target="_blank" class="social-icon" title="GitHub"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg></a>
    <a href="https://www.linkedin.com/in/angelos-chalaris-b0933314a/" target="_blank" class="social-icon" title="LinkedIn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect x="2" y="9" width="4" height="12"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg></a>
    <a href="https://stackoverflow.com/users/1650200/angelos-chalaris?tab=profile" target="_blank" class="social-icon" title="Stack Overflow"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 511.627 511.627" fill="currentColor" stroke="currentColor"
      stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M324.907 344.893l-200.994-18.559-3.997 42.828 201.281 18.555zM320.055 399.996l-201.853.287v43.106l201.853-.278zM363.734 239.255L189.865 136.471l-21.982 37.115L341.751 276.37zM338.329 288.361l-195.002-52.249-11.136 41.686 195.002 52.249z" />
      <path d="M354.594 477.651H89.649V301.212H55.104V511.34h.287l9.995.287h323.187v-.287l.287-9.993V301.212h-34.266zM421.98 0l-42.544 7.423 34.553 198.998 42.534-7.422zM256.958 66.522L370.873 233.26l35.409-24.267L292.643 41.971z" />
    </svg></a>
    <a href="https://codepen.io/chalarangelo" target="_blank" class="social-icon" title="Codepen"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon>
      <line x1="12" y1="22" x2="12" y2="15.5"></line>
      <polyline points="22 8.5 12 15.5 2 8.5"></polyline>
      <polyline points="2 15.5 12 8.5 22 15.5"></polyline>
      <line x1="12" y1="2" x2="12" y2="8.5"></line>
    </svg></a>
  </div>
</div>

<h2>Introduction</h2>

<p>I'm Angelos Chalaris, {new Date(new Date() - new Date('1993-12-08')).getFullYear() - 1970} years old, a web developer from <strong>Athens, Greece.</strong> Programming is not just a career path for me, but also a hobby and a passion of mine. I have a BSc in Computer Science and a MSc in Advanced Information Systems I started coding sometime around 2011, which is when I started studying <strong>Computer Science</strong> in the University of Piraeus. After getting my BSc, I studied for a MSc in Advanced Information Systems with a concentration in <strong>Advanced Software Development Technologies</strong>. I've worked with various technologies in the past, but recently I've taken an interest in web development and web applications.</p>

<p><strong>Skills:</strong> HTML, CSS/SCSS, JavaScript, Node.js, React, Web Components, Ruby on Rails, MySQL/MariaDB, Git, Figma</p>
