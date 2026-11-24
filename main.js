// Display the newest project first in both language versions.
// Set data-order to the next higher number when adding a new project card.
const gallery = document.getElementById('projectGallery');
if (gallery) {
  [...gallery.querySelectorAll(':scope > .project-card')]
    .sort((a, b) => Number(b.dataset.order || 0) - Number(a.dataset.order || 0))
    .forEach(card => gallery.appendChild(card));
}

// Interactive filtering shared by both language versions.
const filters = [...document.querySelectorAll('.filter')];
const cards = [...document.querySelectorAll('.project-card')];
filters.forEach(button => {
  const count = button.querySelector('span');
  if (count) count.textContent = cards.filter(card =>
    button.dataset.filter === 'todos' || card.dataset.category.split(/\s+/).includes(button.dataset.filter)
  ).length;
  button.setAttribute('aria-pressed', String(button.classList.contains('active')));
});
filters.forEach(button => button.addEventListener('click', () => {
  const selected = button.dataset.filter;
  filters.forEach(item => {
    const active = item === button;
    item.classList.toggle('active', active);
    item.setAttribute('aria-pressed', String(active));
  });
  cards.forEach(card => card.classList.toggle('hidden', selected !== 'todos' && !card.dataset.category.split(/\s+/).includes(selected)));
}));
