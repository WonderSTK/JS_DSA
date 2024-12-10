const truthCheck = (collection, pre) => {
    return collection.every(obj => obj[pre]);
    };