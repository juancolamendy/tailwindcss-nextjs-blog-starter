import { useMemo } from 'react';
import { getMDXComponent } from 'mdx-bundler/client';

import { Image } from '../Image';
import { PostLink } from '../Link';
import { TOCInline } from '../TOCInline';
import { Pre } from '../Pre';
import { H1 } from '../Post';
import { H2 } from '../Post';
import { H3 } from '../Post';
import { H4 } from '../Post';
import { H5 } from '../Post';
import { ImageCredit } from '../Post';

export const MDXComponents = {
  Image,
  TOCInline,
  H2,
  H3,
  H4,
  ImageCredit,
  a: PostLink,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
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
