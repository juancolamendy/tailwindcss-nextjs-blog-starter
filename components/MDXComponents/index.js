import { useMemo } from 'react';
import { getMDXComponent } from 'mdx-bundler/client';

import { Image } from '../Image';
import { PostLink } from '../Link';
import { TOCInline } from '../TOCInline';
import { Pre } from '../Pre';
import { PostH2 } from '../PostH2';

export const MDXComponents = {
  Image,
  TOCInline,
  a: PostLink,
  h2: PostH2,
  pre: Pre,
  wrapper: ({ components, layout, ...rest }) => {
    const Layout = require(`../../layouts/${layout}`).default;
    return (<Layout {...rest} />);
  },
}

export const MDXLayoutRenderer = ({ layout, mdxSource, ...rest }) => {
  const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource])

  return <MDXLayout layout={layout} components={MDXComponents} {...rest} />
}
