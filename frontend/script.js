document.addEventListener('DOMContentLoaded', function() {
  const btn = document.getElementById('actionBtn');
  const msg = document.createElement('div');
  msg.textContent = 'Thanks for clicking!';
  msg.classList.add('hidden-message');
  btn.insertAdjacentElement('afterend', msg);

  btn.addEventListener('click', () => {
    msg.style.display = 'block';
  });
});
