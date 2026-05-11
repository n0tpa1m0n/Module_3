import { state } from "../state.js";
import { updatePreview } from "../render/renderPreview.js";

const galleryListEl = document.getElementById("gallery-list");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

function getRenderedCards() {
  return Array.from(galleryListEl.querySelectorAll(".card"));
}

function getActiveIndex() {
  const cards = getRenderedCards();
  return cards.findIndex((card) => Number(card.dataset.id) === state.activeId);
}

function setActiveByIndex(index) {
  const cards = getRenderedCards();
  if (index < 0 || index >= cards.length) return;
  state.activeId = Number(cards[index].dataset.id);
  updatePreview();
}

export function initNavigation() {
  prevBtn.addEventListener("click", () => {
    const idx = getActiveIndex();
    if (idx > 0) setActiveByIndex(idx - 1);
  });

  nextBtn.addEventListener("click", () => {
    const idx = getActiveIndex();
    if (idx < getRenderedCards().length - 1) {
      setActiveByIndex(idx + 1);
    }
  });

  document.addEventListener("keydown", (e) => {
    if (state.activeId == null) return;

    if (e.key === "ArrowLeft") {
      const idx = getActiveIndex();
      if (idx > 0) setActiveByIndex(idx - 1);
    }

    if (e.key === "ArrowRight") {
      const idx = getActiveIndex();
      if (idx < getRenderedCards().length - 1) {
        setActiveByIndex(idx + 1);
      }
    }
  });
}