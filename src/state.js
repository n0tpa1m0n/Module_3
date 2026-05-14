import { PAGE_SIZE } from './consts.js';

export const state = {
  images: [],
  activeId: null,
  page: 0,
  pageSize: PAGE_SIZE,
  isAllLoaded: false,
  isDragging: false,
};