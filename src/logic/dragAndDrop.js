import { state } from "../state.js";
import { updatePreview } from "../render/renderPreview.js";

export function initDragAndDrop() {
  const galleryListEl = document.getElementById("gallery-list");
  const previewEl = document.getElementById("preview");
  const coords = document.getElementById("drag-coords");

  if (!galleryListEl || !previewEl || !coords) return;

  galleryListEl.addEventListener("dragstart", (e) => {
    const card = e.target.closest(".card");
    if (!card) return;
    state.isDragging = true;
    e.dataTransfer.setData("text/plain", card.dataset.id);
    coords.style.display = "block";
  });

  galleryListEl.addEventListener("dragend", () => {
    state.isDragging = false;
    coords.style.display = "none";
  });

  previewEl.addEventListener("dragover", (e) => {
    if (!state.isDragging) return;
    coords.textContent = `x: ${e.clientX}, y: ${e.clientY}`;
    e.preventDefault();
  });

previewEl.addEventListener("drop", (e) => {
  e.preventDefault();
  const id = e.dataTransfer.getData("text/plain");
  if (!id) return;

  state.activeId = id;
  updatePreview();
});
}