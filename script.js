const hoverLeft = document.querySelector('.left');

const hoverRight = document.querySelector('.right');

const container = document.querySelector('.container');

hoverLeft.addEventListener('mouseenter', function () {
  container.classList.add('hover-left');
});
hoverLeft.addEventListener('mouseleave', function () {
  container.classList.remove('hover-left');
});

hoverRight.addEventListener('mouseenter', function () {
  container.classList.add('hover-right');
});
hoverRight.addEventListener('mouseleave', function () {
  container.classList.remove('hover-right');
});
