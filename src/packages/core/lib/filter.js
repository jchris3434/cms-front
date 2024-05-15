export const filter = (obj, validKeys) => {
    return validKeys.reduce((acc, item) => {
      if (typeof obj[item] !== "undefined") {
        return { ...acc, [item]: obj[item] };
      }
  
      return acc;
    }, {});
  };
  