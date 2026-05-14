import { state } from '../state.js';

export function getActiveIndex() {
  if (!state.activeId) return -1;
  return state.images.findIndex((img) => img.id === state.activeId);
}

export function setActiveByIndex(index) {
  if (index < 0 || index >= state.images.length) return;
  state.activeId = state.images[index].id;
}