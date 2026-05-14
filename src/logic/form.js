import { state } from '../state.js';
import { form, fileInput, titleInput, galleryList } from '../dom.js';
import { PAGE_SIZE } from '../consts.js';
import { renderCard } from '../render/renderCard.js';
import { renderPreview } from '../render/renderPreview.js';

const MAX_FILE_SIZE_MB = 5;

function validateFile(file) {
  if (!file) return 'Файл не выбран';
  if (!file.type.startsWith('image/')) return 'Загружать только изображения';
  if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
    return `Размер файла не должен превышать ${MAX_FILE_SIZE_MB} мб`;
  }
  return null;
}

export function initForm() {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const file = fileInput.files[0];
    const error = validateFile(file);
    if (error) {
      alert(error);
      return;
    }

    const title = titleInput.value.trim() || 'Без названия';
    const url = URL.createObjectURL(file);

    const newImage = {
      id: crypto.randomUUID(),
      src: url,
      name: title,
      isBlob: true,
    };

    state.images.unshift(newImage);
    state.activeId = newImage.id;

    const cardEl = renderCard(newImage);
    galleryList.prepend(cardEl);
    renderPreview();

    form.reset();
  });

  window.addEventListener('beforeunload', () => {
    state.images.forEach((img) => {
      if (img.isBlob && img.src.startsWith('blob:')) {
        URL.revokeObjectURL(img.src);
      }
    });
  });
}