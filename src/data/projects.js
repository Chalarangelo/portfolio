export default {
  id: 'projects',
  title: 'Projects & Open Source',
  shortTitle: 'Projects',
  items: [
    {
      title: '30 seconds of code',
      subtitle: 'JavaScript, ES6, React, Node.js, HTML',
      detail: 'Dec 2017 - Present',
      asset: '30-seconds-of-code.png',
      link: 'https://30secondsofcode.org/',
      content: {
        intro: 'I am the founder and original creator of <strong>30 seconds of code</strong>, a curated collection of over 1000 modern JavaScript, CSS and React snippets, that can be easily copied into any new or existing project. I maintain the platform for the project, as well as create and cureate content for the website. The project has over 250 contributors and 70.000 stars on GitHub, while most of its systems utilize continuous integration tools to streamline the build and update process of the project. It\'s currently one of the most extensive learning resources for ES6 on GitHub. My core responsibilites as a mainter include, but are not limited to:',
        points: [
          'Development, Indexing, Unit-testing and Maintenance of a JavaScript (ES6) and React Codebase',
          'Maintenance of Automation Tools and Continuous Integration (Node.js, GitHub Actions)',
          'Website Administration and Continuous Development (Next.js, Netlify)',
          'Content Curation and Community Management (Code Reviews, Twitter)'
        ]
      }
    },
    {
      title: 'furl',
      subtitle: 'React, Sass/SCSS',
      detail: 'Mar 2019 - Jul 2019',
      asset: 'furl.png',
      link: 'https://furl.netlify.app/',
      content: {
        intro: 'I developed <strong>furl</strong>, a library of components written entirely in a functional style, utilizing the hooks API provided by React. The library contains a variety of full-fledged reusable UI components with multiple variants, extensive documentation and examples.'
      }
    },
    {
      title: 'mini.css',
      subtitle: 'CSS, Sass/SCSS, HTML',
      detail: 'Aug 2016 - Oct 2018',
      asset: 'minicss.png',
      link: 'https://minicss.org/',
      content: {
        intro: 'I am the creator of <strong>mini.css</strong>, a minimal, responsive and easily customizable alternative to popular CSS frameworks like Bootstrap and Semantic UI. It utilizes modern technologies, techniques and design patterns, such as the Flexbox module, CSS variables and material design, while it\'s written in SCSS without the need for any Javascript code. It runs on most modern browsers and is actively maintained and updated frequently. It was also the basis for my Master\'s Dissertation, which explored the application of UI/UX design principles in web interface design. The project is currently archived.'
      }
    },
    {
      title: 'Node Static Page Generator',
      subtitle: 'Node.js, JavaScript',
      detail: 'Nov 2017 - May 2018',
      asset: 'node-static-page-generator.png',
      link: 'https://github.com/Chalarangelo/node-static-page-generator',
      content: {
        intro: 'I built the <strong>Node Static Page Generator</strong> as a simple tool for creating static websites. The tool supports static HTML generation from Markdown files and metadata injection via JSON files, while it allows users to fully customize it by tweaking its code. The project is not actively maintained anymore.'
      }
    },
    {
      title: 'mocka',
      subtitle: 'CSS, Sass/SCSS, HTML',
      detail: 'May 2017 - Jun 2017',
      asset: 'code.svg',
      link: 'https://chalarangelo.github.io/mocka/',
      content: {
        intro: 'I built the <strong>mocka placeholder</strong> to be a very simple, yet elegant content placeholder, used to enhance user experience when a page is loading. Crafted with customization in mind, it is written in SCSS, can be altered easily to accommodate any and all needs and runs on all browsers. The project is not actively maintained anymore.'
      }
    },
    {
      title: 'Demos & Smaller Projects',
      subtitle: 'JavaScript, Node.js, React, HTML, CSS, Sass/SCSS',
      detail: 'Jun 2016 - Present',
      asset: 'code.svg',
      link: 'https://github.com/Chalarangelo?utf8=%E2%9C%93&tab=repositories&q=&type=source&language=',
      content: {
        intro: 'I have built various demos and toy projects over the years. Here are some of the most interesting:',
        points: [
          'I\'ve tinkered with progressive web apps for a long time, producing a handful of demos, such as <a href="https://chalarangelo.github.io/mock-pwa/" target="_blank">Mock PWA</a>, <a href="https://github.com/Chalarangelo/autumn-pwa" target="_blank">Autumn Blog</a> and <a href="https://github.com/Chalarangelo/pwapp-demo" target="_blank">PWApp Demo</a>.',
          'I have dabbled in WebSockets a little bit, creating <a href="https://github.com/Chalarangelo/cows-js" target="_blank">Cows.js</a>, a simple chat platform powered by React.',
          'I built <a href="" target="_blank">Reactor</a> back in the days before create-react-app was the de facto choice for kickstarting React projects. It\'s a simple set of Bash/Batch scripts for creating a React project without having to set up everything yourself.',
          'One of my earliest demos is <a href="https://chalarangelo.github.io/starclock-js/" target="_blank">Starclock-js</a>, a beautiful astronomical clock built with JavaScript/jQuery, HTML and CSS.',
          'While exploring HTML5, I put together <a href="https://chalarangelo.github.io/htmltemplategenerator/" target="_blank">HTML5 Template Generator</a>, a replacement tool for commonly-found HTML5 boilerplates.',
          'I\'ve tried my hand at simple interpreters and parsers, producing <a href="https://github.com/Chalarangelo/parse-md-js" target="_blank">Parse-MD.js</a> for Markdown and <a href="https://gist.github.com/Chalarangelo/576773ef989ff9229f2befde57c82043" target="_blank">brainsource.js</a> for brainf**k, both written in JavaScript.',
          'While my experience with Python is quite limited, I have created a few demos, such as <a href="https://github.com/Chalarangelo/unscrape" target="_blank">Unscrape</a>, a simple image scraper for Unsplash, and <a href="https://github.com/Chalarangelo/multisort" target="_blank">Multisort</a>, a sort of joke sorting algorithm.'
        ]
      }
    }
  ]
};
