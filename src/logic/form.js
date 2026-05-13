import { state } from "../state.js";
import { resetList } from "../render/renderList.js";
import { updatePreview } from "../render/renderPreview.js";

export function initForm() {
  const formEl = document.getElementById("add-form");
  const nameInput = document.getElementById("name-input");
  const imageInput = document.getElementById("image-input");

  if (!formEl || !nameInput || !imageInput) return;

  formEl.addEventListener("submit", (e) => {
    e.preventDefault();

    try {
      const name = nameInput.value.trim();
      const file = imageInput.files && imageInput.files[0];
      if (!name || !file) return;

      const src = URL.createObjectURL(file);
      const newId =
        typeof crypto !== "undefined" && crypto.randomUUID
          ? crypto.randomUUID()
          : Date.now();

      const newImage = { id: newId, name, src };

      state.images.unshift(newImage);
      state.activeId = newImage.id;

      resetList();
      updatePreview();

      formEl.reset();
    } catch (err) {
      console.error("form submit error", err);
    }
  });
}