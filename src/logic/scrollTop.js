import { state } from "../state.js";

export function initScrollTop() {
  const galleryListEl = document.getElementById("gallery-list");
  const scrollTopBtn = document.getElementById("scroll-top");

  galleryListEl.addEventListener("scroll", () => {
    const { scrollTop, scrollHeight, clientHeight } = galleryListEl;

    if (scrollTop + clientHeight >= scrollHeight - 10 && state.isAllLoaded) {
      scrollTopBtn.style.display = "block";
    } else if (scrollTop < 50) {
      scrollTopBtn.style.display = "none";
    }
  });

  scrollTopBtn.addEventListener("click", () => {
    galleryListEl.scrollTo({ top: 0, behavior: "smooth" });
  });
}