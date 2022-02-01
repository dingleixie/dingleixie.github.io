HTMLElement.prototype.getValue = function () {
  if (this.type === 'radio' || this.type === 'checkbox') {
    return this.value === 'on';
  } else {
    return this.value;
  }
};

HTMLElement.prototype.addClass = function (className) {
  if (this.classList.contains(className) === false) {
    this.classList.add(className);
  }
};

HTMLElement.prototype.hasClass = function (className) {
  return this.classList.contains(className);
};

HTMLElement.prototype.removeClass = function (className) {
  if (this.classList.contains(className)) {
    this.classList.remove(className);
  }
};
