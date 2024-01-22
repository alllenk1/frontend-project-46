import _ from 'lodash';

const stylish = (data) => {
  // console.log(data);
  const baseSpace = '    ';
  const entries = Object.entries(data);
  const strings = entries.map(([, { key, oldValue, value, type }]) => {
    switch (type) {
      case 'added':
        return `  + ${key}: ${value}`;
      case 'deleted':
        return `  - ${key}: ${value}`;
      case 'unchanged':
        return `    ${key}: ${value}`;
      case 'changed':
        return `  - ${key}: ${oldValue}\n  + ${key}: ${value}`;
    }
  });
  return `{\n${strings.join('\n')}\n}`;
};

export default stylish;
