const smallestCommonMultiple = (arr) => {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let multiple = max;
    while (true) {
        let isMultiple = true;
        for (let i = min; i < max; i++) {
        if (multiple % i !== 0) {
            isMultiple = false;
            break;
        }
        }
        if (isMultiple) {
        return multiple;
        }
        multiple += max;
    }
    };