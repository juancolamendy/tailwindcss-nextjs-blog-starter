import { visit } from 'unist-util-visit';
import { slug } from 'github-slugger';
import { toString } from 'mdast-util-to-string';

const remarkTocHeadings = (options) => {
  return (tree) =>
    visit(tree, 'heading', (node, index, parent) => {
      if(node.depth <= options.depth) {
        const textContent = toString(node);
        options.exportRef.push({
          value: textContent,
          url: '#' + slug(textContent),
          depth: node.depth,
        });
      }
    })
}

export default remarkTocHeadings;
