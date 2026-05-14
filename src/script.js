import { state } from "./state.js";
import { IMAGES } from "../data/images.js";

import { renderList } from "./render/renderList.js";
import { initInfiniteScroll } from "./logic/infiniteScroll.js";
import { initSelection } from "./logic/selection.js";
import { initNavigation } from "./logic/navigation.js";
import { initDragAndDrop } from "./logic/dragAndDrop.js";
import { initResizer } from "./logic/resizer.js";
import { initScrollTop } from "./logic/scrollTop.js";
import { initForm } from "./logic/form.js";
import { initPreview } from "./logic/preview.js";
import { divider, galleryList } from "./dom.js";

state.images = IMAGES.slice();

initInfiniteScroll();
renderList();
initSelection();
initNavigation();
initDragAndDrop();
initResizer(divider, galleryList);
initScrollTop();
initForm();
initPreview();