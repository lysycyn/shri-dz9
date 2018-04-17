export default class Emitter {
  constructor() {
    this.handlers = {};
  }

  on(event, handler) {
    let eventHandlers = this.handlers[event];
    if (!eventHandlers) {
      eventHandlers = new Set();
      this.handlers[event] = eventHandlers;
    }
    eventHandlers.add(handler);
  }

  off(event, handler) {
    const eventHandlers = this.handlers[event];
    if (!eventHandlers) {
      return;
    }
    eventHandlers.delete(handler);
  }

  emit(event) {
    // eslint-disable-next-line
    for (const handler of this.handlers[event] || []) {
      handler();
    }
  }
}
