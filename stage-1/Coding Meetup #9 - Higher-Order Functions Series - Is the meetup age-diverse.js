function isAgeDiverse(list) {
  const needed = new Set([1,2,3,4,5,6,7,8,9,10]);

  for (const dev of list) {
    const group = dev.age >= 100 ? 10 : Math.floor(dev.age / 10);
    needed.delete(group);
  }

  return needed.size === 0;
}