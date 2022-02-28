import { slug } from 'github-slugger';

import { getAllFrontMatter } from '../mdx';

export async function getAllTags() {
  // init
  let tagsSet = {};
  const frontMatters = await getAllFrontMatter('blogs');

  // logic
  frontMatters.forEach( fm => {
    fm.tags.forEach( tag => {
      const formattedTag = slug(tag);
      if (!(formattedTag in tagsSet)) {
        tagsSet[formattedTag] = true;
      }
    })
  });
  // return result
  return Object.keys(tagsSet);
}
