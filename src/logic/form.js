import { state } from "../state.js";
import { resetList } from "../render/renderList.js";

export function initForm() {
  const formEl = document.getElementById("add-form");
  const nameInput = document.getElementById("name-input");
  const imageInput = document.getElementById("image-input");

  if (!formEl) return;

  formEl.addEventListener("submit", async (e) => {
    e.preventDefault();

    try {
      const name = nameInput.value.trim();
      const file = imageInput.files && imageInput.files[0];
      if (!name || !file) {
        return;
      }

      const src = URL.createObjectURL(file);
      const newId = Date.now();

      const newImage = { id: newId, name, src };

      state.images.unshift(newImage);

      resetList();

      formEl.reset();

      setTimeout(() => {
        const imgEl = document.querySelector(`.card[data-id="${newId}"] img`);
        if (imgEl) {
          imgEl.addEventListener('load', () => {
            try { URL.revokeObjectURL(src); } catch (err) {}
          }, { once: true });
        } else {
          setTimeout(() => {
            try { URL.revokeObjectURL(src); } catch (err) {}
          }, 5000);
        }
      }, 50);

    } catch (err) {
      console.error('form submit error', err);
    }
  });
}