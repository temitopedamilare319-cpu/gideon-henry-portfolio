const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!isExpanded));
    navToggle.setAttribute('aria-label', isExpanded ? 'Open navigation' : 'Close navigation');
    navLinks.classList.toggle('is-open', !isExpanded);
  });

  navLinks.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.setAttribute('aria-label', 'Open navigation');
      navLinks.classList.remove('is-open');
    }
  });
}

const filterButtons = [...document.querySelectorAll('[data-filter]')];
const projectCards = [...document.querySelectorAll('.project-card')];
const filterStatus = document.querySelector('#filter-status');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => {
      const isActive = item === button;
      item.classList.toggle('is-active', isActive);
      item.setAttribute('aria-pressed', String(isActive));
    });

    let visibleCount = 0;
    projectCards.forEach((card) => {
      const isVisible = filter === 'all' || card.dataset.category === filter;
      card.hidden = !isVisible;
      if (isVisible) {
        visibleCount += 1;
      }
    });

    if (filterStatus) {
      filterStatus.textContent = `${visibleCount} ${visibleCount === 1 ? 'project' : 'projects'} shown.`;
    }
  });
});

const copyButton = document.querySelector('[data-copy-email]');
const copyStatus = document.querySelector('.copy-status');
const emailAddress = document.querySelector('#email-address');
let copyStatusTimeout;

if (copyButton) {
  copyButton.addEventListener('click', async () => {
    const email = emailAddress?.textContent?.trim() ?? '';

    try {
      if (!email) {
        throw new Error('No email address found to copy.');
      }

      await navigator.clipboard.writeText(email);
      if (copyStatus) {
        copyStatus.textContent = 'Email copied.';
      }
    } catch (error) {
      if (copyStatus) {
        copyStatus.textContent = 'Copy unavailable. Select the email address to copy it.';
      }
      console.error('Could not copy the email address.', error);
    }

    if (copyStatus) {
      window.clearTimeout(copyStatusTimeout);
      copyStatusTimeout = window.setTimeout(() => {
        copyStatus.textContent = '';
      }, 3000);
    }
  });
}

const revealElements = document.querySelectorAll('.reveal');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if ('IntersectionObserver' in window && !prefersReducedMotion.matches) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add('is-visible'));
}

prefersReducedMotion.addEventListener?.('change', (event) => {
  if (event.matches) {
    revealElements.forEach((element) => element.classList.add('is-visible'));
  }
});
