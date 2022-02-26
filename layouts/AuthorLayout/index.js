import React from 'react';
import PropTypes from 'prop-types';

import { SocialIcon } from '../../components/SocialIcon';
import { Image } from '../../components/Image';
import { PageSEO } from '../../components/SEO';

const AuthorLayout = ({ children, frontMatter }) => {
  console.log('--- frontmatter:', frontMatter);
  return (
    <>
      <PageSEO title={`About - ${frontMatter.name}`} description={`About me - ${frontMatter.name}`} />
      <main className="mb-auto">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
          <div className="divide-y">
            <div className="space-y-2 pt-6 pb-8 md:space-y-5">
              <h1 className="blog-h1">
                About
              </h1>
            </div>
            <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
              <div className="flex flex-col items-center space-x-2 pt-8">
                <Image
                  src={frontMatter.avatar}
                  alt="frontMatter.avatar"
                  width="192px"
                  height="192px"
                  className="h-48 w-48 rounded-full"
                />
                <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">{frontMatter.name}</h3>
                <div className="text-gray-500">{frontMatter.summary}</div>
                <div className="text-gray-500">{frontMatter.company}</div>
                <div className="flex space-x-3 pt-6">
                  <SocialIcon kind="mail" href={`mailto:${frontMatter.email}`} />
                  <SocialIcon kind="github" href={frontMatter.github} />
                  <SocialIcon kind="linkedin" href={frontMatter.linkedin} />
                  <SocialIcon kind="twitter" href={frontMatter.twitter} />
                </div>
              </div>
              <div className="prose max-w-none pt-8 pb-8 xl:col-span-2">{children}</div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

AuthorLayout.propTypes = {
  children: PropTypes.node,
  frontMatter: PropTypes.object,
};

export default AuthorLayout;
