Object.prototype.emit = function (name, param) {
  if (this.events === null || this.events === undefined) {
    return;
  }

  if (this.events.hasOwnProperty(name)) {
    this.events[name].forEach(function (cb) {
      cb(param);
    });
  }
};

Object.prototype.addEvent = function (name) {
  if (Array.isArray(name)) {
    this.addEvents(name);
  } else {
    if (this.events === null || this.events === undefined) {
      this.events = {};
    }

    if (this.events.hasOwnProperty(name)) {
      return;
    }

    this.events[name] = [];
  }
};

Object.prototype.addEvents = function(eventList) {
  if (this.events === null || this.events === undefined) {
    this.events = {};
  }

  let self = this;
  eventList.forEach(function(event) {
    if (!self.events.hasOwnProperty(event)) {
      self.events[event] = [];
    }
  });

};

Object.prototype.subscribe = function (name, callback) {
  if (this.events === null || this.events === undefined) {
    return;
  }

  if (this.events.hasOwnProperty(name)) {
    if (name in this.events) {
      this.events[name].push(callback);
    }
  }
};

Object.prototype.unsubscribe = function (name, callback) {
  if (this.events === null || this.events === undefined) {
    return;
  }

  if (this.events.hasOwnProperty(name)) {
    if (name in this.events) {
      let index = this.events[name].indexOf(callback);
      if (index > -1) {
        this.events.splice(index, 1);
      }
    }
  }
};