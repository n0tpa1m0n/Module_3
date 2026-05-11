import { state } from "../state.js";
const previewInnerEl = document.getElementById("preview-inner");
const previewImageEl = document.getElementById("preview-image");
const previewPlaceholderEl = document.getElementById("preview-placeholder");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const galleryListEl = document.getElementById("gallery-list");

function getRenderedCards() {
  return Array.from(galleryListEl.querySelectorAll(".card"));
}

function getActiveIndex() {
  const cards = getRenderedCards();
  return cards.findIndex((card) => Number(card.dataset.id) === state.activeId);
}

export function updatePreview() {
  const cards = getRenderedCards();
  cards.forEach((card) => {
    card.classList.toggle(
      "active",
      Number(card.dataset.id) === state.activeId
    );
  });

  if (state.activeId == null) {
    previewInnerEl.style.display = "none";
    previewPlaceholderEl.style.display = "block";
    return;
  }

  const activeCard = cards.find(
    (card) => Number(card.dataset.id) === state.activeId
  );

  if (!activeCard) return;

  const img = activeCard.querySelector("img");
  previewImageEl.src = img.src;
  previewImageEl.alt = img.alt;

  previewInnerEl.style.display = "block";
  previewPlaceholderEl.style.display = "none";

  const idx = getActiveIndex();
  prevBtn.disabled = idx <= 0;
  nextBtn.disabled = idx >= cards.length - 1;
}