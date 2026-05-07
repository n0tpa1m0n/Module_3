function grabDoll(dolls){
  let bag = [];

  for (let i = 0; i < dolls.length; i++) {
    let doll = dolls[i];

    if (doll !== "Hello Kitty" && doll !== "Barbie doll") {
      continue;
    }

    bag.push(doll);

    if (bag.length === 3) {
      break;
    }
  }

  return bag;
}
