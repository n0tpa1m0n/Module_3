import { state } from '../state.js';
import { galleryList } from '../dom.js';
import { renderPreview } from '../render/renderPreview.js';

export function initSelection() {
  galleryList.addEventListener('click', (e) => {
    const card = e.target.closest('[data-id]');
    if (!card) return;

    state.activeId = card.dataset.id;
    renderPreview();
  });
}