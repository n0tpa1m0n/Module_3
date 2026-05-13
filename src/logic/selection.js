import { state } from "../state.js";
import { updatePreview } from "../render/renderPreview.js";

export function initSelection() {
  const galleryListEl = document.getElementById("gallery-list");
  const previewCloseBtn = document.getElementById("preview-close");

  galleryListEl.addEventListener("click", (e) => {
    const card = e.target.closest(".card");
    if (!card) return;
    state.activeId = card.dataset.id;
    updatePreview();
  });

  previewCloseBtn.addEventListener("click", () => {
    state.activeId = null;
    updatePreview();
  });
}