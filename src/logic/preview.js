import { state } from '../state.js';
import { previewInner, previewPlaceholder, previewClose, previewImage, previewName, prevBtn, nextBtn, galleryList } from '../dom.js';

export function openPreview() {
  previewInner.style.display = 'block';
  previewPlaceholder.style.display = 'none';
  updateNavButtons();
}

export function closePreview() {
  state.activeId = null;
  previewInner.style.display = 'none';
  previewPlaceholder.style.display = 'block';
  prevBtn.disabled = true;
  nextBtn.disabled = true;
  previewImage.src = '';
  previewName.textContent = '';
  galleryList.querySelectorAll('.card.active').forEach((card) => {
    card.classList.remove('active');
  });
}

export function updateNavButtons() {
  if (!state.activeId) {
    prevBtn.disabled = true;
    nextBtn.disabled = true;
    return;
  }
  const index = state.images.findIndex((img) => img.id === state.activeId);
  prevBtn.disabled = index <= 0;
  nextBtn.disabled = index === -1 || index >= state.images.length - 1;
}

export function initPreview() {
  previewClose.addEventListener('click', closePreview);
}
