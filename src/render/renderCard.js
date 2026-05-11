export function renderCard(item) {
  const card = document.createElement("article");
  card.className = "card";
  card.dataset.id = String(item.id);
  card.draggable = true;

  card.innerHTML = `
    <img src="${item.src}" alt="${item.name}">
    <div class="card-title">${item.name}</div>`;
   return card;
}