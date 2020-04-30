/**
 * This file autogenerates routes from the ./markdown folder
 * 
 * It does NOT autogenerate the index, so if you add any pages,
 * please make sure you add those pages to `./markdown/index.md`
 * 
 */

import MbGuidebook from "../../components/mb-guidebook.vue";
const files = require.context('./markdown', true, /\.md$/);

const ensureLeadingSlash = (_string: string) => {
  let string = _string;

  if (string[0] !== '/') {
    string = '/' + string;
  }

  return string;
}

const removeTrailingSlashes = (string: string) => string.replace(/\/+$/, '');
const removeLeadingDot = (string: string) => string.replace(/^\./, '');

const createPath = (_root: string, _filename: string) => {
  // begin root operations
  let root = _root;
  root = ensureLeadingSlash(root);
  root = removeTrailingSlashes(root);

  // Begin filename operations
  let filename = _filename;

  filename = removeLeadingDot(filename);

  // remove trailing .md declarations
  filename = filename.replace(/\.md$/, '')

  // anything named index.md stays as a root route for that folder
  filename = filename.replace(/index$/, '')

  return root + filename;
}


function guidebookRoutes(root: string) {
  const routes = files
    .keys()
    .map(filename => ({
      path: createPath(root, filename),
      props: {
        markdown: files(filename)
      },
      component: MbGuidebook
    }));

  console.log(routes);
  return routes;
}

export {
  guidebookRoutes
}