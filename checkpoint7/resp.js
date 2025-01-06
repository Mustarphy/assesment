const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('hidden');
  navLinks.classList.toggle('flex');
  navLinks.classList.toggle('flex-col');
  navLinks.classList.toggle('items-center');
  navLinks.classList.toggle('px-4');
  navLinks.classList.toggle('py-2');
  navLinks.classList.toggle('bg-gray-900');
  navLinks.classList.toggle('rounded');
});
