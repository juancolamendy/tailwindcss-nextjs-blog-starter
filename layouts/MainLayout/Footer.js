import React from 'react';

import { Link } from '../../components/Link';
import { SocialIcon } from '../..//components/SocialIcon';

import siteMetadata from '../../lib/utils/constants/siteMetadata';

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col items-center mt-3">
        <div className="flex space-x-4 mb-3">
          { siteMetadata.socials && siteMetadata.socials.email && <SocialIcon kind="mail" href={`mailto:${siteMetadata.socials.email}`} size="10" /> }
          { siteMetadata.socials && siteMetadata.socials.github && <SocialIcon kind="github" href={siteMetadata.socials.github} size="6" /> }
          { siteMetadata.socials && siteMetadata.socials.facebook && <SocialIcon kind="facebook" href={siteMetadata.socials.facebook} size="6" /> }
          { siteMetadata.socials && siteMetadata.socials.linkedin && <SocialIcon kind="linkedin" href={siteMetadata.socials.linkedin} size="6" /> }
          { siteMetadata.socials && siteMetadata.socials.youtube && <SocialIcon kind="youtube" href={siteMetadata.socials.youtube} size="6" /> }
          { siteMetadata.socials && siteMetadata.socials.twitter && <SocialIcon kind="twitter" href={siteMetadata.socials.twitter} size="6" /> }
        </div>
        <div className="flex mb-2 space-x-2 font-light text-sm text-gray-900">
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link className="transition duration-300 ease-in-out hover:opacity-60" href="/">{siteMetadata.title}</Link>
        </div>
      </div>
    </footer>
  );
}
