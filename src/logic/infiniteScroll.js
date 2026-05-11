import { state } from "../state.js";
import { renderList } from "../render/renderList.js";

let observer = null;

function ensureObserver(rootEl) {
  if (observer) return observer;

  observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !state.isAllLoaded) {
      console.log("observer: trigger intersecting, calling renderList");
      renderList();
    }
  }, { root: rootEl, threshold: 0.1 });

  return observer;
}

export function initInfiniteScroll() {
  const galleryListEl = document.getElementById("gallery-list");
  if (!galleryListEl) {
    console.warn("initInfiniteScroll: gallery-list not found");
    return;
  }
  ensureObserver(galleryListEl);
  createScrollTrigger(galleryListEl);
}

export function createScrollTrigger(parent) {
  if (!parent) {
    console.warn("createScrollTrigger: parent is falsy");
    return;
  }

  const obs = ensureObserver(parent);

  const old = document.getElementById("scrollTrigger");
  if (old) {
    try {
      obs.unobserve(old);
    } catch (e) {
      console.warn("unobserve failed", e);
    }
    old.remove();
  }

  const trigger = document.createElement("div");
  trigger.id = "scrollTrigger";
  trigger.style.height = "1px";
  parent.appendChild(trigger);

  obs.observe(trigger);
}