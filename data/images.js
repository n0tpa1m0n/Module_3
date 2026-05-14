export const IMAGES = Array.from({ length: 50 }, (_, i) => ({
  id: String(i + 1),
  name: `Pet ${i + 1}`,
  src: `./assets/images/${(i % 7) + 1}.jpg`
}));