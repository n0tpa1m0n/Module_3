import { state } from '../state.js';
import { galleryList, coordsBox, preview } from '../dom.js';
import { renderPreview } from '../render/renderPreview.js';

let currentDraggedId = null;

function updateCoords(event) {
  coordsBox.textContent = `x: ${event.clientX}, y: ${event.clientY}`;
}

function endDrag() {
  currentDraggedId = null;
  coordsBox.textContent = '';
}

export function initDragAndDrop() {
  galleryList.addEventListener('dragstart', (e) => {
    const card = e.target.closest('[data-id]');
    if (!card) return;
    currentDraggedId = card.dataset.id;
  });

  document.addEventListener('dragover', (e) => {
    if (currentDraggedId) updateCoords(e);
  });

  preview.addEventListener('dragover', (e) => {
    if (currentDraggedId) e.preventDefault();
  });

  preview.addEventListener('drop', (e) => {
    e.preventDefault();
    if (!currentDraggedId) return;

    state.activeId = currentDraggedId;
    renderPreview();
    endDrag();
  });

  document.addEventListener('dragend', endDrag);
}