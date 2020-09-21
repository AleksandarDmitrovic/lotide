const head = (array) => {
  if (array[0] === '') {
    return undefined;
  } else {
    return array[0];
  }
};

module.exports = head;