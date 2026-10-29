// ==========================================================================
// IEC • Igreja Espaço Cristão — Scripts Interativos
// ==========================================================================

function initIEC() {
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

  // 6. Transição contínua das imagens no card arqueado da IEC (Muitas histórias. Uma só família.)
  const sageSlides = document.querySelectorAll('.sage-slide');
  const sageDotsContainer = document.querySelector('.sage-slider-dots');
  if (sageSlides.length > 1) {
    let currentSlide = 0;
    const totalSlides = sageSlides.length;

    if (sageDotsContainer) {
      sageDotsContainer.innerHTML = '';
      sageSlides.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.className = `slider-dot${i === 0 ? ' active' : ''}`;
        dot.setAttribute('aria-label', `Ir para foto ${i + 1} de ${totalSlides}`);
        dot.addEventListener('click', () => {
          clearInterval(sliderInterval);
          showSlide(i);
          startInterval();
        });
        sageDotsContainer.appendChild(dot);
      });
    }

    const sageDots = sageDotsContainer ? sageDotsContainer.querySelectorAll('.slider-dot') : [];

    const showSlide = (index) => {
      sageSlides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
      });
      sageDots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
      });
      currentSlide = index;
    };

    let sliderInterval;
    const startInterval = () => {
      sliderInterval = setInterval(() => {
        showSlide((currentSlide + 1) % totalSlides);
      }, 3500);
    };

    startInterval();
  }
  const heroVideo = document.getElementById('heroVideo');
  const heroAudioBtn = document.getElementById('heroVideoAudioBtn');
  const heroAudioText = document.getElementById('heroAudioText');
  const heroAudioIcon = document.getElementById('heroAudioIcon');

  if (heroVideo && heroAudioBtn) {
    // Garante que o vídeo reproduza sem problemas em navegadores com restrições de autoplay
    const tryPlay = () => {
      heroVideo.play().catch(() => {});
    };
    tryPlay();
    document.addEventListener('touchstart', tryPlay, { once: true });
    document.addEventListener('click', tryPlay, { once: true });

    heroAudioBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (heroVideo.muted) {
        heroVideo.muted = false;
        heroVideo.volume = 0.9;
        heroVideo.play();
        if (heroAudioText) heroAudioText.textContent = 'Som Ativo';
        if (heroAudioIcon) {
          heroAudioIcon.innerHTML = `
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
            </svg>
          `;
        }
        heroAudioBtn.classList.add('unmuted');
        heroAudioBtn.setAttribute('aria-label', 'Desativar som do vídeo');
        heroAudioBtn.setAttribute('title', 'Desativar som');
      } else {
        heroVideo.muted = true;
        if (heroAudioText) heroAudioText.textContent = 'Ativar Som';
        if (heroAudioIcon) {
          heroAudioIcon.innerHTML = `
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
              <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
            </svg>
          `;
        }
        heroAudioBtn.classList.remove('unmuted');
        heroAudioBtn.setAttribute('aria-label', 'Ativar som do vídeo');
        heroAudioBtn.setAttribute('title', 'Ativar som');
      }
    });
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initIEC);
} else {
  initIEC();
}

