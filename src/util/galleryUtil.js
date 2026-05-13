export function getRenderedCards() {
  const galleryListEl = document.getElementById("gallery-list");
  if (!galleryListEl) return [];
  return Array.from(galleryListEl.querySelectorAll(".card"));
}

export function getActiveIndex(state) {
  const cards = getRenderedCards();
  return cards.findIndex((card) => card.dataset.id == state.activeId);
}