import plain from './plain.js';
import stylish from './stylish.js';

const formatter = (tree, format) => {
  switch (format) {
    case 'stylish':
      return stylish(tree);
    case 'plain':
      return plain(tree);
    case 'json':
      return JSON.stringify(tree, null, ' ');
    default:
      throw new Error(`format ${format} not supported. Choose 'stylish', 'plain' or 'json'`);
  }
};

export default formatter;
