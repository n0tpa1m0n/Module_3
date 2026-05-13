import { state } from "../state.js";

export function initScrollTop() {
  const galleryListEl = document.getElementById("gallery-list");
  const scrollTopBtn = document.getElementById("scroll-top");

  if (!galleryListEl || !scrollTopBtn) return;

  galleryListEl.addEventListener("scroll", () => {
    const { scrollTop, scrollHeight, clientHeight } = galleryListEl;

    if (scrollTop + clientHeight >= scrollHeight - 10) {
      scrollTopBtn.style.display = "block";
    } else if (scrollTop < 50) {
      scrollTopBtn.style.display = "none";
    }
  });

  scrollTopBtn.addEventListener("click", () => {
    galleryListEl.scrollTo({ top: 0, behavior: "smooth" });
  });
}