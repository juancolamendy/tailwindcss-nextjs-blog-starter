import { useMemo } from 'react';
import { getMDXComponent } from 'mdx-bundler/client';

import { CtaBox } from '../Post';
import { H1 } from '../Post';
import { H2 } from '../Post';
import { H3 } from '../Post';
import { H4 } from '../Post';
import { H5 } from '../Post';
import { Image } from '../Image';
import { ImageCredit } from '../Post';
import { PostLink } from '../Link';
import { Pre } from '../Pre';
import { TOCInline } from '../TOCInline';

export const MDXComponents = {
  a: PostLink,
  CtaBox,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  H2,
  H3,
  H4,
  Image,
  ImageCredit,
  pre: Pre,
  TOCInline,    
  wrapper: ({ components, layout, ...rest }) => {
    const Layout = require(`../../layouts/${layout}`).default;
    return (<Layout {...rest} />);
  },
}

export const MDXLayoutRenderer = ({ layout, mdxSource, ...rest }) => {
  const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource])

  return <MDXLayout layout={layout} components={MDXComponents} {...rest} />
}
