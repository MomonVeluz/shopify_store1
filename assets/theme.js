(function () {
  const drawerButton = document.querySelector('[data-drawer-toggle]');
  const drawer = document.querySelector('[data-mobile-drawer]');
  const drawerClose = document.querySelector('[data-drawer-close]');

  function setDrawer(open) {
    if (!drawer || !drawerButton) return;
    drawer.hidden = !open;
    drawerButton.setAttribute('aria-expanded', String(open));
    document.documentElement.classList.toggle('tc-drawer-open', open);
  }

  if (drawerButton && drawer) {
    drawerButton.addEventListener('click', () => setDrawer(drawer.hidden));
    drawerClose?.addEventListener('click', () => setDrawer(false));
    drawer.addEventListener('click', (event) => {
      if (event.target === drawer) setDrawer(false);
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') setDrawer(false);
    });
  }

  document.querySelectorAll('[data-product-thumb]').forEach((button) => {
    button.addEventListener('click', () => {
      const target = document.querySelector('[data-product-main-image]');
      const image = button.querySelector('img');
      if (!target || !image) return;
      target.src = button.dataset.fullImage || image.src;
      target.alt = image.alt;
      document.querySelectorAll('[data-product-thumb]').forEach((thumb) => thumb.classList.remove('is-active'));
      button.classList.add('is-active');
    });
  });

  const recentlyViewedRoot = document.querySelector('[data-recently-viewed]');
  const currentProduct = document.querySelector('[data-current-product]');
  const storageKey = 'techcore_recently_viewed';

  function moneyFromCents(cents) {
    const value = Number(cents || 0) / 100;
    return new Intl.NumberFormat('en-PH', { style: 'currency', currency: 'PHP' }).format(value);
  }

  function readRecent() {
    try {
      return JSON.parse(localStorage.getItem(storageKey) || '[]');
    } catch (error) {
      return [];
    }
  }

  function writeRecent(items) {
    localStorage.setItem(storageKey, JSON.stringify(items.slice(0, 6)));
  }

  if (currentProduct) {
    const item = {
      handle: currentProduct.dataset.handle,
      title: currentProduct.dataset.title,
      url: currentProduct.dataset.url,
      image: currentProduct.dataset.image,
      price: currentProduct.dataset.price
    };
    const filtered = readRecent().filter((product) => product.handle !== item.handle);
    writeRecent([item].concat(filtered));
  }

  if (recentlyViewedRoot) {
    const currentHandle = recentlyViewedRoot.dataset.currentHandle;
    const items = readRecent().filter((product) => product.handle !== currentHandle).slice(0, 4);
    if (items.length) {
      recentlyViewedRoot.innerHTML = items.map((product) => `
        <article class="tc-mini-product">
          <a href="${product.url}">
            <img src="${product.image}" alt="${product.title}" loading="lazy">
            <span>${product.title}</span>
            <strong>${moneyFromCents(product.price)}</strong>
          </a>
        </article>
      `).join('');
      recentlyViewedRoot.closest('[data-recently-viewed-section]')?.removeAttribute('hidden');
    }
  }

  document.querySelectorAll('[data-sort-select]').forEach((select) => {
    select.addEventListener('change', () => select.form?.submit());
  });
})();
