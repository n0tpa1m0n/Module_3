export function initResizer() {
  const galleryListEl = document.getElementById("gallery-list");
  const dividerEl = document.getElementById("divider");
  const mainLayout = document.querySelector(".main-layout");

  let isResizing = false;
  let startX = 0;
  let startLeftWidth = 0;

  dividerEl.addEventListener("mousedown", (e) => {
    isResizing = true;
    startX = e.clientX;
    const leftRect = galleryListEl.getBoundingClientRect();
    const containerRect = mainLayout.getBoundingClientRect();
    startLeftWidth = (leftRect.width / containerRect.width) * 100;
    document.body.style.userSelect = "none";
  });

  document.addEventListener("mousemove", (e) => {
    if (!isResizing) return;

    const containerRect = mainLayout.getBoundingClientRect();
    const dx = e.clientX - startX;
    const deltaPercent = (dx / containerRect.width) * 100;
    let newLeftPercent = startLeftWidth + deltaPercent;

    if (newLeftPercent < 30) newLeftPercent = 30;
    if (newLeftPercent > 80) newLeftPercent = 80;

    galleryListEl.style.flexBasis = `${newLeftPercent}%`;
  });

  document.addEventListener("mouseup", () => {
    isResizing = false;
    document.body.style.userSelect = "";
  });
}