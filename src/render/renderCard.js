export function renderCard(item) {
  const card = document.createElement("article");
  card.className = "card";
  card.dataset.id = item.id;
  card.draggable = true;

  const img = document.createElement("img");
  img.src = item.src;
  img.alt = item.name;

  const title = document.createElement("div");
  title.className = "card-title";
  title.textContent = item.name;

  card.append(img, title);
  return card;
}