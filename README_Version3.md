# Strona: Nocne wycieczki — obserwacja żółwi

To prosty starter (darmowy) dla jednostronicowej strony reklamującej nocne wycieczki z obserwacją żółwi. Pliki:
- index.html
- styles.css
- script.js

Jak dostosować:
1. Zmień nazwę firmy i dane kontaktowe w index.html (nagłówek i stopka).
2. Podmień obrazy w sekcji hero i galerii (używaj własnych zdjęć lub darmowych z Unsplash/Pexels).
3. Dostosuj teksty: ceny, program, zasady.

Formularz rezerwacji:
- Opcja A (Formspree): w index.html zamień `https://formspree.io/f/{TWÓJ_ID}` na swój endpoint Formspree (zarejestruj się na https://formspree.io).
- Opcja B (Netlify Forms): usuń `action` z form i dodaj atrybut `data-netlify="true"` oraz <input type="hidden" name="form-name" value="rezerwacja" />.
- Upewnij się, że masz zgodę na przetwarzanie danych (checkbox) i przygotowany regulamin.

Wdrożenie:
- GitHub Pages:
  1. Zainicjuj repo: `git init` / dodaj pliki i push na GitHub.
  2. W ustawieniach repo wybierz Pages → branch `main` / folder `/` i zapisz.
  3. Strona pojawi się pod `https://<twoje-konto>.github.io/<repo>/`.

- Netlify:
  1. Załóż konto Netlify i kliknij "New site from Git".
  2. Połącz z repo i wybierz branch (np. main).
  3. Deploy — gotowe. Netlify obsłuży także Netlify Forms jeśli dodasz `data-netlify="true"`.

Dalsze kroki / personalizacja (sugerowane):
- Zamiana kolorów i logo (edytuj CSS i nagłówek).
- Dodanie kalendarza dostępności (np. Calendly lub integracja z Airtable).
- Zabezpieczenie formularza (reCAPTCHA lub Netlify built-in spam protection).
- Dodanie strony z regulaminem i polityką prywatności.

Masz pytania? Jeśli chcesz, mogę:
- Wgrać to do repo (podaj owner/repo i uprawnienia).
- Dodać prosty kalendarz dostępności (Airtable/Google Sheets).
- Podmienić zdjęcia na konkretne zasoby (jeśli dasz linki lub pliki).
- Przygotować wersję wielojęzyczną (PL/EN).