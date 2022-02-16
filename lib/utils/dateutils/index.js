import siteMetadata from '../../../data/siteMetadata';

export const formatDate = (date) => {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const now = new Date(date).toLocaleDateString(siteMetadata.locale, options);

  return now;
}

export const formatToISO = date => {
  return date ? new Date(date).toISOString() : (new Date()).toISOString();
}
