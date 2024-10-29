// Animasi Scroll Reveal
window.addEventListener('scroll', revealElements);

function revealElements() {
  const sections = document.querySelectorAll('.section');
  const revealPoint = 150; // Nilai titik di mana animasi akan dimulai

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight - revealPoint) {
      section.classList.add('active');
    } else {
      section.classList.remove('active');
    }
  });
}

// Efek Hover untuk Bagian Pengalaman
const experienceItems = document.querySelectorAll('.section p');

experienceItems.forEach(item => {
  item.addEventListener('mouseover', () => {
    item.style.color = 'orangered';
    item.style.transform = 'scale(1.1)';
    item.style.transition = '0.3s ease';
  });

  item.addEventListener('mouseout', () => {
    item.style.color = '';
    item.style.transform = 'scale(1)';
  });
});
