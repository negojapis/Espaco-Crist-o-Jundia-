// ==========================================================================
// IEC • Igreja Espaço Cristão — Scripts Interativos
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  // 1. Atualizar Ano no Rodapé
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // 2. Menu Mobile
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('nav');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      menuToggle.textContent = isOpen ? '✕' : '☰';
      menuToggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Fechar menu ao clicar em qualquer link
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        menuToggle.textContent = '☰';
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 3. Formulário de Visita via WhatsApp
  const visitForm = document.getElementById('visitform');
  if (visitForm) {
    visitForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const serviceSelect = document.getElementById('serviceSelect');
      const selectedTime = serviceSelect ? serviceSelect.value : 'Domingo';
      
      const message = `Olá! Gostaria de planejar minha primeira visita à Igreja Espaço Cristão no culto de ${selectedTime}. Poderiam me orientar?`;
      const whatsappUrl = `https://wa.me/5511947022350?text=${encodeURIComponent(message)}`;
      
      window.open(whatsappUrl, '_blank', 'noopener');
    });
  }

  // 4. Efeito de Sombra no Header ao Rolar
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.style.boxShadow = '0 6px 25px rgba(0, 0, 0, 0.2)';
    } else {
      header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
    }
  }, { passive: true });

  // 5. Pausar / Continuar Faixa Deslizante (Ticker Tape)
  const tickerPauseBtn = document.getElementById('tickerPauseBtn');
  const tickerTape = document.querySelector('.iec-ticker-tape');
  const tickerPauseIcon = document.getElementById('tickerPauseIcon');

  if (tickerPauseBtn && tickerTape) {
    tickerPauseBtn.addEventListener('click', () => {
      const isPaused = tickerTape.classList.toggle('paused');
      if (tickerPauseIcon) {
        tickerPauseIcon.textContent = isPaused ? '▶' : '❚❚';
      }
      tickerPauseBtn.setAttribute('aria-label', isPaused ? 'Continuar animação' : 'Pausar animação');
    });
  }
});

