import React from 'react';
import PropTypes from 'prop-types';

import { useRouter } from 'next/router';

import siteMetadata from '../../data/siteMetadata';

const PostSharer = ({title}) => {
  // hooks
  const router = useRouter();
  
  return (
  <div className="hidden fixed top-40 left-40 w-20 z-10 bg-white rounded-md border-2 border-gray-100 py-4 px-2 flex-col justify-center items-center space-y-4 md:flex" role="sharer">
    <a 
      href={`https://twitter.com/share?text=${encodeURIComponent(title)}&url=${encodeURIComponent(siteMetadata.site.url+router.asPath)}&via=${siteMetadata.site.name}`} 
      title="Share on Twitter" 
      rel="noreferrer" 
      target="_blank">
      <svg 
        viewBox="0 0 512 512" 
        className="h-6 w-6 text-[#219bcf] link-text">
        <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z">
        </path>
      </svg>
    </a>
    <a 
      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(siteMetadata.site.url+router.asPath)}`} 
      title="Share on Facebook" 
      rel="noreferrer" 
      target="_blank">
      <svg 
        viewBox="0 0 320 512" 
        className="h-6 w-6 text-[#66679d] link-text">
        <path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z">
        </path>
      </svg>
    </a>
    <a 
      href={`https://api.whatsapp.com/send?text=${encodeURIComponent(title + ' by ' + siteMetadata.site.name + ' - ' + siteMetadata.site.url+router.asPath)}`} 
      title="Share on WhatsApp" 
      rel="noreferrer" 
      target="_blank">
      <svg 
        viewBox="0 0 32 32" 
        className="h-8 w-8 text-[#4dc247] link-text">
        <path fill="currentColor" d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215-.1-.172-2.434-1.39-2.678-1.39zm-2.908 7.593c-1.747 0-3.48-.53-4.942-1.49L7.793 24.41l1.132-3.337a8.955 8.955 0 0 1-1.72-5.272c0-4.955 4.04-8.995 8.997-8.995S25.2 10.845 25.2 15.8c0 4.958-4.04 8.998-8.998 8.998zm0-19.798c-5.96 0-10.8 4.842-10.8 10.8 0 1.964.53 3.898 1.546 5.574L5 27.176l5.974-1.92a10.807 10.807 0 0 0 16.03-9.455c0-5.958-4.842-10.8-10.802-10.8z">
        </path>
      </svg>
    </a>
    <a 
      href={`https://t.me/share/url?url=${encodeURIComponent(siteMetadata.site.url+router.asPath)}&text=${encodeURIComponent(title + ' by '+ siteMetadata.site.name)}`} 
      title="Share on Telegram" 
      rel="noreferrer" 
      target="_blank">
      <svg 
        viewBox="0 0 32 32" 
        className="h-8 w-8 text-[#219bcf] link-text">
        <path fill="currentColor" d="M 20.572266 3.0117188 C 20.239891 2.9764687 19.878625 3.028375 19.515625 3.171875 C 19.065625 3.348875 12.014406 6.3150313 5.4414062 9.0820312 L 3.2695312 9.9960938 C 2.4285313 10.337094 2.0039062 10.891672 2.0039062 11.638672 C 2.0039062 12.161672 2.22525 12.871063 3.28125 13.289062 L 6.9472656 14.757812 C 7.2642656 15.708813 8.0005469 17.916906 8.1855469 18.503906 C 8.2955469 18.851906 8.5733906 19.728594 9.2753906 19.933594 C 9.4193906 19.982594 9.5696563 20.007813 9.7226562 20.007812 C 10.165656 20.007812 10.484625 19.801641 10.640625 19.681641 L 12.970703 17.710938 L 15.800781 20.328125 C 15.909781 20.439125 16.486719 21 17.261719 21 C 18.228719 21 18.962234 20.195016 19.115234 19.416016 C 19.198234 18.989016 21.927734 5.2870625 21.927734 5.2890625 C 22.172734 4.1900625 21.732219 3.6199531 21.449219 3.3769531 C 21.206719 3.1694531 20.904641 3.0469688 20.572266 3.0117188 z M 19.910156 5.171875 C 19.533156 7.061875 17.478016 17.378234 17.166016 18.865234 L 13.029297 15.039062 L 10.222656 17.416016 L 11 14.375 C 11 14.375 16.362547 8.9468594 16.685547 8.6308594 C 16.945547 8.3778594 17 8.2891719 17 8.2011719 C 17 8.0841719 16.939781 8 16.800781 8 C 16.675781 8 16.506016 8.1197812 16.416016 8.1757812 C 15.272669 8.8885973 10.404094 11.662239 8.0078125 13.025391 L 4.53125 11.636719 L 6.21875 10.927734 C 10.51775 9.1177344 18.174156 5.893875 19.910156 5.171875 z">
        </path>
      </svg>
    </a>
    <a 
      href={`mailto:?subject=${encodeURIComponent(title + ' by ' + siteMetadata.site.name + ' ')}&body=${encodeURIComponent(title + ' by ' + siteMetadata.site.name + ' ' + siteMetadata.site.url+router.asPath)}`}
      title="Share on Email" 
      rel="noreferrer" 
      target="_blank">
      <svg 
        viewBox="0 0 32 32" 
        className="h-7 w-7 text-[#848484] link-text">
        <path fill="currentColor" d="M27 22.757c0 1.24-.988 2.243-2.19 2.243H7.19C5.98 25 5 23.994 5 22.757V13.67c0-.556.39-.773.855-.496l8.78 5.238c.782.467 1.95.467 2.73 0l8.78-5.238c.472-.28.855-.063.855.495v9.087z"></path>
        <path fill="currentColor" d="M27 9.243C27 8.006 26.02 7 24.81 7H7.19C5.988 7 5 8.004 5 9.243v.465c0 .554.385 1.232.857 1.514l9.61 5.733c.267.16.8.16 1.067 0l9.61-5.733c.473-.283.856-.96.856-1.514v-.465z"></path>
      </svg> 
    </a>
  </div>
  );
};

PostSharer.propTypes = {
	title: PropTypes.string
};

export default PostSharer;
