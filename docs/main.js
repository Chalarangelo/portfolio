let lastWindowWidth = document.documentElement.clientWidth;
const scrollAndResizeHandler = (e) => {
  if ((lastWindowWidth >= 560 && document.documentElement.clientWidth < 560)
    || (lastWindowWidth < 560 && document.documentElement.clientWidth >= 560)) {
    document.getElementsByClassName('nav-icon')[0].classList.remove('open');
    document.getElementById('navbar').classList.remove('shown');
  }
  if (document.documentElement.clientWidth < 560) {
    document.querySelectorAll('nav ul li').forEach(e => (e.classList.remove('selected')));
    return;
  }
  if (document.body.scrollTop > window.innerHeight * 0.95 || document.documentElement.scrollTop > window.innerHeight * 0.95) {
    document.getElementById('navbar').classList.add('shown');
  }
  else {
    document.getElementById('navbar').classList.remove('shown');
  }
  setSelectedNavLink();
  lastWindowWidth = document.documentElement.clientWidth;
}

const setSelectedNavLink = () => {
  let sections = ['community', 'writing', 'projects', 'education', 'experience', 'introduction'];
  let sectionScrolls = sections.map(v => ({
    name: v,
    visible: document.getElementById(v).offsetTop <= (document.documentElement.scrollTop + 0.333 * document.documentElement.clientHeight)
  }));
  sectionScrolls.sort((a, b) => b.visible - a.visible);
  console.log(JSON.stringify(sectionScrolls));
  document.querySelectorAll('nav ul li').forEach(e => (e.classList.remove('selected')));
  document.getElementById(`${sectionScrolls[0].name}Link`).classList.add('selected');
}

document.addEventListener('scroll', scrollAndResizeHandler);
window.addEventListener('resize', scrollAndResizeHandler);

document.getElementsByClassName('nav-icon')[0].addEventListener('click', e => {
  document.getElementsByClassName('nav-icon')[0].classList.toggle('open');
  document.getElementById('navbar').classList.toggle('shown');
});

document.querySelectorAll('nav ul li').forEach(el => 
  el.addEventListener('click', function(e){
  if(document.documentElement.clientWidth < 560) {
    document.getElementsByClassName('nav-icon')[0].classList.remove('open');
    document.getElementById('navbar').classList.remove('shown');
  }
}));

document.getElementById('age').innerHTML = (new Date(new Date() - new Date('1993-12-08')).getFullYear() - 1970);