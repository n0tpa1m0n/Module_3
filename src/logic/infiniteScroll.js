import { state } from "../state.js";
import { renderList } from "../render/renderList.js";

let observer;

function setupObserver(root) {
  if (observer) return observer;

  observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !state.isAllLoaded) {
      renderList();
    }
  }, {
    root,
    threshold: 0.1
  });
  return observer;
}

export function initInfiniteScroll() {
  const list = document.getElementById("gallery-list");
  if (!list) return;

  setupObserver(list);
  addTrigger(list);
}

export function addTrigger(list) {
  const obs = setupObserver(list);

  const old = document.getElementById("scrollTrigger");
  if (old) {
    obs.unobserve(old);
    old.remove();
  }

  const trigger = document.createElement("div");
  trigger.id = "scrollTrigger";
  trigger.style.height = "1px";

  list.appendChild(trigger);
  obs.observe(trigger);
}