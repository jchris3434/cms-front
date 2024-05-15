export const replace = (list, index, newItem) => {
    const result = Array.from(list);
    result.splice(index, 1, newItem);
  
    return result;
  };
  