function fill (props) {
  const obj = {};

  Object.entries(props).forEach(([key, definition]) => {
    switch (typeof definition) {
      case 'function':
        obj[key] = definition();
        break;
      case 'object':
        obj[key] = fill(definition);
        break;
      default:
        obj[key] = definition;
        break;
    }
  });

  return obj;
}

module.exports = (defaults = {}) => (count = 1, overrides = {}) => {
  const arr = [];
  for (let i = 0; i < count; i++) {
    arr.push(fill(Object.assign({}, defaults, overrides)));
  }
  return arr;
};
