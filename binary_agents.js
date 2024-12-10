const binaryAgent = str => {
    return str.split(' ').map(binary => String.fromCharCode(parseInt(binary, 2))).join('');
};