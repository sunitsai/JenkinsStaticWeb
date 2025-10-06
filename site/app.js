const button = document.getElementById('cta');
const msg = document.getElementById('msg');

button.addEventListener('click', () => {
  const now = new Date().toLocaleString();
  msg.textContent = `Hello from Jenkins! (${now})`;
});