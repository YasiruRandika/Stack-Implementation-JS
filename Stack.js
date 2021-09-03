function Stack() {
  var elements = [];
  var top = 0;

  Stack.prototype.push = function (item) {
    elements[top] = item;
    top = top + 1;
  };

  Stack.prototype.pop = function () {
    if (isEmpty() === false) {
      top = top - 1;
      return elements.pop();
    }
  };

  Stack.prototype.count = function () {
    return top;
  };

  Stack.prototype.peek = function () {
    if (isEmpty()) {
      return null;
    }
    return elements[top - 1];
  };
  Stack.prototype.isEmpty = function () {
    return top === 0;
  };
}
