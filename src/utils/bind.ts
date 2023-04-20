export const bindMethodsController = (obj) => {
  const prototype = Object.getPrototypeOf(obj);
  const methods = Object.getOwnPropertyNames(prototype);
  methods.forEach((method) => {
    if (method !== 'constructor') {
      obj[method] = obj[method].bind(obj);
    }
  });
}