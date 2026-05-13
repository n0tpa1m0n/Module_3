import { state } from "../state.js";
import { updatePreview } from "../render/renderPreview.js";
import { getActiveIndex, getRenderedCards } from "../util/galleryUtil.js";

const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

function activateCard(index) {
  const cards = getRenderedCards();
  if (!cards.length) return;
  if (index < 0 || index >= cards.length) return;

  const card = cards[index];
  state.activeId = Number(card.dataset.id);
  updatePreview();
}

export function initNavigation() {
  if (!prevBtn || !nextBtn) return;

  prevBtn.addEventListener("click", () => {
    const idx = getActiveIndex(state);
    if (idx === -1) return;
    if (idx > 0) activateCard(idx - 1);
  });

  nextBtn.addEventListener("click", () => {
    const idx = getActiveIndex(state);
    if (idx === -1) return;
    const cards = getRenderedCards();
    if (idx < cards.length - 1) activateCard(idx + 1);
  });

  document.addEventListener("keydown", (e) => {
    if (state.activeId == null) return;

    const idx = getActiveIndex(state);
    if (idx === -1) return;

    if (e.key === "ArrowLeft" && idx > 0) {
      setActiveByIndex(idx - 1);
    }

    if (e.key === "ArrowRight") {
      const cards = getRenderedCards();
      if (idx < cards.length - 1) {
        setActiveByIndex(idx + 1);
      }
    }
  });
}