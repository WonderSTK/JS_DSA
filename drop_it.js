const dropElements = (arr, func) => {
    let index = arr.findIndex(func);
    return index === -1 ? [] : arr.slice(index);
};