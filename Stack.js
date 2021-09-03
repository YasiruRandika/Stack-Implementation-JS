class Stack {
  constructor() {
    this.elements = [];
    this.top = 0;
  }
  push(item) {
    this.elements[this.top] = item;
    this.top = this.top + 1;
  }

  pop() {
    if (this.isEmpty() === false) {
      this.top = this.top - 1;
      return this.elements.pop();
    }
  }

  count() {
    return this.top;
  }
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.elements[this.top - 1];
  }
  isEmpty() {
    return this.top === 0;
  }
}
