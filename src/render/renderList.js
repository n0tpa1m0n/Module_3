import { state } from "../state.js";
import { renderCard } from "./renderCard.js";
import { addTrigger } from "../logic/infiniteScroll.js";
import { highlightActiveCard } from "./renderPreview.js";

export function resetList() {
  const list = document.getElementById("gallery-list");
  if (!list) return;

  list.innerHTML = "";
  state.page = 0;
  state.isAllLoaded = false;

  const old = document.getElementById("scrollTrigger");
  if (old) old.remove();

  renderList();
}

export function renderList() {
  if (state.isAllLoaded) return;

  const list = document.getElementById("gallery-list");
  if (!list) return;

  const from = state.page * state.pageSize;
  const to = from + state.pageSize;
  const batch = state.images.slice(from, to);

  batch.forEach((item) => {
    list.appendChild(renderCard(item));
  });

  state.page++;

  if (to >= state.images.length) {
    state.isAllLoaded = true;
    const trigger = document.getElementById("scrollTrigger");
    if (trigger) trigger.remove();
    return;
  }

  addTrigger(list);
  highlightActiveCard();
}