//brute force approach 
function mutation(arr) {
    const test = arr[1].toLowerCase();
    const target = arr[0].toLowerCase();
    for (let i = 0; i < test.length; i++) {
      if (target.indexOf(test[i]) < 0) return false;
    }
    return true;
  }


// optimal solution 
function mutation(arr) {
    return arr[1]
      .toLowerCase()
      .split('')
      .every(function (letter) {
        return arr[0].toLowerCase().indexOf(letter) !== -1
      })
  }
  
  mutation(["hello", "hey"]);