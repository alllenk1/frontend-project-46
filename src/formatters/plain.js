import _ from 'lodash';

const stringify = (data) => {
  if (_.isObject(data)) {
    return '[complex value]';
  }

  if (typeof data === 'string') {
    return `'${data}'`;
  }

  return data;
};

const plain = (data) => {
  const iter = (node, path) => {
    const values = Object.values(node);
    const strings = values.flatMap(({ key, oldValue, value, type }) => {
      const newPath = path === '' ? `${key}` : `${path}.${key}`;
      switch (type) {
        case 'added':
          return `Property '${newPath}' was added with value: ${stringify(value)}`;
        case 'deleted':
          return `Property '${newPath}' was removed`;
        case 'changed':
          return `Property '${newPath}' was updated. From ${stringify(oldValue)} to ${stringify(value)}`;
        case 'hasChild':
          return iter(value, newPath);
      }
    });
    return strings.filter((item) => item !== undefined).join('\n');
  };
  return iter(data, '');
};

export default plain;
