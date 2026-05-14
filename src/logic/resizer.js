import { RESIZER_MIN_WIDTH, RESIZER_MAX_WIDTH } from '../consts.js';

let isResizing = false;
let startX = 0;
let startLeftWidth = 0;
let targetElement = null;

function onMouseMove(e) {
  if (!isResizing || !targetElement) return;
  const parent = targetElement.parentElement;
  const parentWidth = parent.getBoundingClientRect().width;
  const deltaPercent = ((e.clientX - startX) / parentWidth) * 100;
  let newWidth = startLeftWidth + deltaPercent;
  newWidth = Math.max(RESIZER_MIN_WIDTH, Math.min(RESIZER_MAX_WIDTH, newWidth));
  targetElement.style.flexBasis = `${newWidth}%`;
}

function onMouseUp() {
  if (!isResizing) return;
  isResizing = false;
  targetElement = null;
  document.body.style.userSelect = '';
  document.removeEventListener('mousemove', onMouseMove);
  document.removeEventListener('mouseup', onMouseUp);
}

export function initResizer(resizerHandle, resizableElement) {
  resizerHandle.addEventListener('mousedown', (e) => {
    isResizing = true;
    targetElement = resizableElement;
    startX = e.clientX;
    const parent = resizableElement.parentElement;
    const parentWidth = parent.getBoundingClientRect().width;
    startLeftWidth = (resizableElement.getBoundingClientRect().width / parentWidth) * 100;
    document.body.style.userSelect = 'none';

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
}
