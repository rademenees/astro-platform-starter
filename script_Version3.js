// Prosty skrypt: obsługa menu mobilnego i powiadomienia po wysłaniu formularza
document.addEventListener('DOMContentLoaded', function() {
  // Rok w stopce
  const y = new Date().getFullYear();
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = y;

  // Mobile menu toggle
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('open');
      toggle.textContent = nav.classList.contains('open') ? '✕' : '☰';
    });
  }

  // Formularz - prosty feedback
  const form = document.getElementById('bookingForm');
  const msg = document.querySelector('.form-msg');
  if (form) {
    form.addEventListener('submit', async (e) => {
      // Jeśli używasz Formspree z action - nie potrzebujemy AJAX.
      // Tu tylko pokazujemy komunikat po wysłaniu (użytkownik zostanie przekierowany lub zobaczy potwierdzenie).
      msg.textContent = 'Wysyłanie...';
      // Opcjonalnie: możesz obsłużyć AJAX do Formspree (jeśli chcesz).
      setTimeout(()=> {
        msg.textContent = 'Dziękujemy — Twoja rezerwacja została wysłana. Sprawdzimy dostępność i skontaktujemy się z Tobą.';
      }, 800);
    });
  }
});