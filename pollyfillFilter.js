
const pollyfillFilter = () => {
  if (!Array.prototype.filter) {
    Array.prototype.filter = function(callback) {
      var arr = [];
      for (var i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
          arr.push(this[i]);
        }
      }
      return arr;
    };
  }
}