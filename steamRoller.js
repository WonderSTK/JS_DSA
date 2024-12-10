const steamRollArray = (arr) => {
    let result = [];
    const flatten = (arr) => {
        arr.forEach((item) => {
            if (Array.isArray(item)) {
                flatten(item);
            } else {
                result.push(item);
            }
        });
    };
    flatten(arr);
    return result;
};