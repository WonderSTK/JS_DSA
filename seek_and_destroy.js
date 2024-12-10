
function destroy(arr) {
  // Remove all values
  var args = Array.prototype.slice.call(arguments);
  var arr = args[0];
  var toRemove = args.slice(1);
  return arr.filter(function(val) {
    return toRemove.indexOf(val) === -1;
  });
}