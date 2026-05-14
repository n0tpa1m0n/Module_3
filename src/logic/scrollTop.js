import { state } from '../state.js';
import { scrollTopBtn, galleryList } from '../dom.js';
import { SCROLL_BOTTOM_OFFSET } from '../consts.js';

function onScroll() {
  const atBottom = galleryList.scrollHeight - galleryList.scrollTop - galleryList.clientHeight < SCROLL_BOTTOM_OFFSET;
  scrollTopBtn.classList.toggle('scroll-top--visible', atBottom && state.isAllLoaded);
}

export function initScrollTop() {
  galleryList.addEventListener('scroll', onScroll);

  scrollTopBtn.addEventListener('click', () => {
    galleryList.scrollTo({ top: 0, behavior: 'smooth' });
  });
}