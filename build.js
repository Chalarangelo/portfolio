const fs = require('fs');
const sass = require('node-sass');

const filesToCopy = ['index.html', 'main.js'];
const sourceDir = 'src';
const targetDir = 'docs';

filesToCopy.forEach(f => {
  fs.copyFileSync(`./${sourceDir}/${f}`, `./${targetDir}/${f}`);
});

sass.render(
  {
    file: `./${sourceDir}/style.scss`,
    outFile: `./${targetDir}/style.css`,
    outputStyle: 'compressed'
  },
  function (err, result) {
    if (!err) {
      fs.writeFileSync(`./${targetDir}/style.css`, result.css, function (err2) {
        if (!err2) console.log('SUCCESS: style.css file generated!');
        else console.log(`ERROR: During style.css file generation- ${err2}`);
      });
    } else
      console.log(`ERROR: During style.css file generation- ${err}`);
  }
);

console.log('SUCCESS: Compiled website!');