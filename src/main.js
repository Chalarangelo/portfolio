document.addEventListener("scroll", function (e) {
  if (document.body.scrollTop > window.innerHeight * 0.95 || document.documentElement.scrollTop > window.innerHeight * 0.95) {
    document.getElementById('navbar').classList.add('shown');
  }
  else {
    document.getElementById('navbar').classList.remove('shown');
  }
  setSelectedNavLink();
});

const setSelectedNavLink = () => {
  let counts =
    [{
      name: 'education',
      count: (0.85 * countOccurrences([...document.querySelectorAll('#education, #education *')].map(elementIsVisibleInViewport), true) / [...document.querySelectorAll('#education, #education *')].length) + 0.15 * document.getElementById(`educationLink`).classList.contains('selected')
    },
    {
      name: 'work',
      count: (0.85 * countOccurrences([...document.querySelectorAll('#work, #work *')].map(elementIsVisibleInViewport), true) / [...document.querySelectorAll('#work, #work *')].length) + 0.15 * document.getElementById(`workLink`).classList.contains('selected')
    },
    {
      name: 'introduction',
      count: (0.85 * countOccurrences([...document.querySelectorAll('#introduction, #introduction *')].map(elementIsVisibleInViewport), true) / [...document.querySelectorAll('#introduction, #introduction *')].length) + 0.15 * document.getElementById(`introductionLink`).classList.contains('selected')
    }
    ];
  counts.sort((a, b) => b.count - a.count);
  document.querySelectorAll('nav ul li').forEach(e => (e.classList.remove('selected')));
  document.getElementById(`${counts[0].name}Link`).classList.add('selected');
}

const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

const elementIsVisibleInViewport = (el) => {
  const { top, left, bottom, right } = el.getBoundingClientRect();
  const { innerHeight, innerWidth } = window;
  return ((top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight)) &&
    ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth));
};