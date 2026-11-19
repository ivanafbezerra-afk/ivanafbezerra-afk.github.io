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
