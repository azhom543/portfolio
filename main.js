document.querySelectorAll('nav a').forEach(link => {
link.addEventListener('click', e => {
e.preventDefault();
document.querySelector(link.getAttribute('href'))
.scrollIntoView({ behavior: 'smooth' });
});
});


// Simple scroll animation
window.addEventListener('scroll', () => {
document.querySelectorAll('.card').forEach(card => {
const rect = card.getBoundingClientRect();
if (rect.top < window.innerHeight - 100) {
card.style.transform = 'translateY(0)';
card.style.opacity = '1';
}
});
});


// Initial card animation state
document.querySelectorAll('.card').forEach(card => {
card.style.opacity = '0';
card.style.transform = 'translateY(30px)';
card.style.transition = 'all 0.6s ease';
});