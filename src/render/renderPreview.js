import { state } from '../state.js';
import { previewImage, previewName, galleryList } from '../dom.js';
import { openPreview, updateNavButtons } from '../logic/preview.js';

export function highlightActiveCard() {
  const cards = galleryList.querySelectorAll('.card');
  cards.forEach((card) => {
    card.classList.toggle('active', card.dataset.id === state.activeId);
  });
}

export function renderPreview() {
  highlightActiveCard();

  const active = state.images.find((img) => img.id === state.activeId);
  if (!active) {
    previewImage.src = '';
    previewName.textContent = '';
    return;
  }

  previewImage.src = active.src;
  previewName.textContent = active.name;
  openPreview();
  updateNavButtons();
}