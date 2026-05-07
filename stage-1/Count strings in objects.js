function strCount(obj) {
  let count = 0;

  for (let key in obj) {
    const val = obj[key];

    if (typeof val === "string") {
      count++;
    } else if (Array.isArray(val)) {
      val.forEach(item => {
        if (typeof item === "string") count++;
        else if (item && typeof item === "object") count += strCount(item);
      });
    } else if (val && typeof val === "object") {
      count += strCount(val);
    }
  }

  return count;
}
