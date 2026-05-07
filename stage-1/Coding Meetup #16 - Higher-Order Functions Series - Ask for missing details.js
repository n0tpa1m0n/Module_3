function askForMissingDetails(list) {
  return list
    .map(dev => {
      const missingKey = Object.keys(dev).find(key => dev[key] === null);

      if (missingKey) {
        return {
          ...dev,
          question: `Hi, could you please provide your ${missingKey}.`
        };
      }

      return null;
    })
    .filter(Boolean);
}
