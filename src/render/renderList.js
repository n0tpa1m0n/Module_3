import { state } from "../state.js";
import { renderCard } from "./renderCard.js";
import { createScrollTrigger } from "../logic/infiniteScroll.js";

const galleryListEl = document.getElementById("gallery-list");

export function resetList() {
  galleryListEl.innerHTML = "";
  state.page = 0;
  state.isAllLoaded = false;
  renderList();
}

export function renderList() {
  if (state.isAllLoaded) return;

  const start = state.page * state.pageSize;
  const end = start + state.pageSize;
  const slice = state.images.slice(start, end);

  slice.forEach((item) => {
    const card = renderCard(item);
    galleryListEl.appendChild(card);
  });

  state.page++;

  if (end >= state.images.length) {
    state.isAllLoaded = true;
    return;
  }

  createScrollTrigger(galleryListEl);
}