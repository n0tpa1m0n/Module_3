import { state } from '../state.js';
import { prevBtn, nextBtn } from '../dom.js';
import { getActiveIndex, setActiveByIndex } from '../util/galleryUtil.js';
import { renderPreview } from '../render/renderPreview.js';
import { updateNavButtons } from './preview.js';

function goToPrev() {
  const currentIndex = getActiveIndex();
  if (currentIndex <= 0) return;
  setActiveByIndex(currentIndex - 1);
  renderPreview();
  updateNavButtons();
}

function goToNext() {
  const currentIndex = getActiveIndex();
  if (currentIndex === -1 || currentIndex >= state.images.length - 1) return;
  setActiveByIndex(currentIndex + 1);
  renderPreview();
  updateNavButtons();
}

export function initNavigation() {
  prevBtn.addEventListener('click', goToPrev);
  nextBtn.addEventListener('click', goToNext);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      goToPrev();
    } else if (e.key === 'ArrowRight') {
      goToNext();
    }
  });
}