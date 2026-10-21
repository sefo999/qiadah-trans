// ---------- header scroll state ----------
const header = document.getElementById('header');
const onScroll = () => header?.classList.toggle('is-scrolled', window.scrollY > 24);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// ---------- mobile drawer ----------
const drawer = document.getElementById('drawer');
document.querySelectorAll<HTMLButtonElement>('[data-menu-toggle]').forEach((btn) => {
  btn.addEventListener('click', () => {
    if (!drawer) return;
    const open = drawer.hidden === true;
    drawer.hidden = !open;
    document.body.classList.toggle('menu-open', open);
    document.querySelectorAll('[data-menu-toggle][aria-expanded]').forEach((b) => b.setAttribute('aria-expanded', String(open)));
  });
});
drawer?.querySelectorAll('a').forEach((a) =>
  a.addEventListener('click', () => {
    drawer.hidden = true;
    document.body.classList.remove('menu-open');
  }),
);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && drawer && !drawer.hidden) {
    drawer.hidden = true;
    document.body.classList.remove('menu-open');
  }
});

// ---------- reveal on scroll ----------
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealEls = document.querySelectorAll<HTMLElement>('.reveal');
if (reduce || !('IntersectionObserver' in window)) {
  revealEls.forEach((el) => el.classList.add('is-visible'));
} else {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add('is-visible');
          io.unobserve(en.target);
        }
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.1 },
  );
  revealEls.forEach((el) => io.observe(el));
}

// ---------- counters ----------
const counters = document.querySelectorAll<HTMLElement>('[data-count]');
const fmt = (n: number) => new Intl.NumberFormat('en-US').format(Math.round(n));
const runCounter = (el: HTMLElement) => {
  const target = Number(el.dataset.count || '0');
  const suffix = el.dataset.suffix || '';
  if (reduce) {
    el.textContent = fmt(target) + suffix;
    return;
  }
  const duration = 1600;
  const start = performance.now();
  const step = (now: number) => {
    const p = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = fmt(target * eased) + suffix;
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
};
if (counters.length) {
  const cio = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          runCounter(en.target as HTMLElement);
          cio.unobserve(en.target);
        }
      });
    },
    { threshold: 0.4 },
  );
  counters.forEach((c) => cio.observe(c));
}

// ---------- WhatsApp forms ----------
// Any <form data-wa="966..."> is serialised into a WhatsApp message.
// Field labels come from data-label on each control; data-title gives the message heading.
document.querySelectorAll<HTMLFormElement>('form[data-wa]').forEach((form) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!form.reportValidity()) return;
    const num = form.dataset.wa!;
    const title = form.dataset.title || '';
    const lines: string[] = [title ? `*${title}*` : ''];
    form.querySelectorAll<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>('input, select, textarea').forEach((el) => {
      if (el.type === 'hidden' || el.type === 'submit') return;
      const label = el.dataset.label || el.name;
      let value = el.value.trim();
      if (el instanceof HTMLSelectElement) value = el.selectedOptions[0]?.text?.trim() || '';
      if (value) lines.push(`${label}: ${value}`);
    });
    const source = form.dataset.source;
    if (source) lines.push(`— ${source}`);
    const url = `https://wa.me/${num}?text=${encodeURIComponent(lines.filter(Boolean).join('\n'))}`;
    window.open(url, '_blank', 'noopener');
  });
});

// ---------- hero quote: sync selected truck type ----------
document.querySelectorAll<HTMLElement>('[data-type-tabs]').forEach((tabs) => {
  const select = tabs.closest('form')?.querySelector<HTMLSelectElement>('select[name="type"]');
  tabs.querySelectorAll<HTMLButtonElement>('button[data-value]').forEach((b) => {
    b.addEventListener('click', () => {
      tabs.querySelectorAll('button').forEach((x) => x.classList.remove('is-active'));
      b.classList.add('is-active');
      if (select) select.value = b.dataset.value!;
    });
  });
});
