// Simple interactivity for the demo
document.addEventListener('DOMContentLoaded', function () {
  const mic = document.getElementById('mic');
  const input = document.getElementById('chatInput');
  const send = document.getElementById('sendBtn');

  mic.addEventListener('click', () => {
    mic.classList.toggle('active');
    if (mic.classList.contains('active')) {
      mic.style.transform = 'scale(1.03)';
      mic.title = 'Arrêter l\'enregistrement';
    } else {
      mic.style.transform = '';
      mic.title = 'Démarrer l\'enregistrement';
    }
  });

  send.addEventListener('click', () => {
    const v = input.value.trim();
    if (!v) return;
    // Append a tiny user message to the card (visual only)
    const messages = document.querySelector('.messages');
    const el = document.createElement('div');
    el.className = 'message user';
    const bubble = document.createElement('div');
    bubble.className = 'bubble user-bubble';
    bubble.textContent = v;
    el.appendChild(bubble);
    messages.appendChild(el);
    input.value = '';
    messages.scrollTop = messages.scrollHeight;
  });
});
