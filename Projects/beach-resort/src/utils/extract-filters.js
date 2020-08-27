const getUniqueValues = (items, value) => {
  return [...new Set(items.map((item) => item.fields[value]))];
};

const getMaxValue = (items, value) => {
  return Math.max(...items.map((item) => item.fields[value]));
};

export default (roomsResponse) => {
  return {
    types: ['all', ...getUniqueValues(roomsResponse, 'type')],
    capacities: getUniqueValues(roomsResponse, 'capacity').sort(
      (a, b) => a - b
    ),
    maxPrice: getMaxValue(roomsResponse, 'price'),
    maxSize: getMaxValue(roomsResponse, 'size'),
  };
};
