document.addEventListener('DOMContentLoaded', () => {
  
  // --- Video Unmute Logic ---
  const video = document.getElementById('promo-video');
  const unmuteBtn = document.getElementById('unmute-btn');
  const iconMuted = document.getElementById('icon-muted');
  const iconUnmuted = document.getElementById('icon-unmuted');
  const unmuteText = unmuteBtn.querySelector('span');

  if (video && unmuteBtn) {
    unmuteBtn.addEventListener('click', () => {
      if (video.muted) {
        video.muted = false;
        iconMuted.style.display = 'none';
        iconUnmuted.style.display = 'inline-block';
        unmuteText.textContent = 'Mutar Vídeo';
        unmuteBtn.style.background = 'rgba(255, 215, 0, 0.2)';
        unmuteBtn.style.borderColor = 'var(--gold)';
        unmuteBtn.style.color = 'var(--gold)';
      } else {
        video.muted = true;
        iconMuted.style.display = 'inline-block';
        iconUnmuted.style.display = 'none';
        unmuteText.textContent = 'Toque para Ouvir';
        unmuteBtn.style.background = 'rgba(0, 0, 0, 0.7)';
        unmuteBtn.style.borderColor = 'rgba(255,255,255,0.2)';
        unmuteBtn.style.color = '#fff';
      }
    });

    // Also toggle on video click
    video.addEventListener('click', () => {
      unmuteBtn.click();
    });
  }

  // --- FAQ Accordion Logic ---
  const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const answer = question.nextElementSibling;
      const isActive = question.classList.contains('active');

      // Close all
      document.querySelectorAll('.faq-question').forEach(q => {
        q.classList.remove('active');
        q.nextElementSibling.style.maxHeight = null;
      });

      // If it wasn't active, open it
      if (!isActive) {
        question.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });

  // --- Carousel Infinite Clone Logic ---
  const track = document.getElementById('carousel-track');
  if (track) {
    // Clone the track children to ensure seamless scrolling on very wide screens
    const cards = Array.from(track.children);
    cards.forEach(card => {
      const clone = card.cloneNode(true);
      track.appendChild(clone);
    });
  }

});
