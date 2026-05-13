import { state } from "../state.js";
import { getRenderedCards, getActiveIndex } from "../util/galleryUtil.js";

const previewInnerEl = document.getElementById("preview-inner");
const previewImageEl = document.getElementById("preview-image");
const previewPlaceholderEl = document.getElementById("preview-placeholder");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

export function updatePreview() {
  const cards = getRenderedCards();

  cards.forEach((card) => {
    card.classList.toggle("active", card.dataset.id == state.activeId);
  });

  if (state.activeId == null) {
    previewInnerEl.style.display = "none";
    previewPlaceholderEl.style.display = "block";
    return;
  }

  const activeCard = cards.find(
    (card) => card.dataset.id == state.activeId
  );

  if (!activeCard) return;

  const img = activeCard.querySelector("img");
  if (!img) return;

  previewImageEl.src = img.src;
  previewImageEl.alt = img.alt;

  previewInnerEl.style.display = "block";
  previewPlaceholderEl.style.display = "none";

  const idx = getActiveIndex(state);
  const total = cards.length;

  prevBtn.disabled = idx <= 0;
  nextBtn.disabled = idx === -1 || idx >= total - 1;
}