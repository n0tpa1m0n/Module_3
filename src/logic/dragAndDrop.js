import { state } from "../state.js";
import { updatePreview } from "../render/renderPreview.js";

export function initDragAndDrop() {
  const galleryListEl = document.getElementById("gallery-list");
  const previewEl = document.getElementById("preview");
  const dragCoordsEl = document.getElementById("drag-coords");

  galleryListEl.addEventListener("dragstart", (e) => {
    const card = e.target.closest(".card");
    if (!card) return;
    state.isDragging = true;
    e.dataTransfer.setData("text/plain", card.dataset.id);
    dragCoordsEl.style.display = "block";
  });

  galleryListEl.addEventListener("dragend", () => {
    state.isDragging = false;
    dragCoordsEl.style.display = "none";
  });

  document.addEventListener("dragover", (e) => {
    if (!state.isDragging) return;
    dragCoordsEl.textContent = `x: ${e.clientX}, y: ${e.clientY}`;
  });

  previewEl.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  previewEl.addEventListener("drop", (e) => {
    e.preventDefault();
    const id = Number(e.dataTransfer.getData("text/plain"));
    state.activeId = id;
    updatePreview();
  });
}