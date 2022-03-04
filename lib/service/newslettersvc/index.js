import buttondown from './buttondown';
import convertkit from './convertkit';
import mailchimp from './mailchimp';
import klaviyo from './klaviyo';
import mailerlite from './mailerlite';

const providers = {
  'buttondown': buttondown,
  'convertkit': convertkit,
  'mailchimp':  mailchimp,
  'klaviyo':    klaviyo,
  'mailerlite': mailerlite,
}

const addSubscriber = async ({ email, provider }) => {
  // validation
  if (!email) {
    return { 
      success: false,
      errorMessage: 'Email is required',
    };
  }
  if (!provider) {
    return { 
      success: false,
      errorMessage: 'Provider is required',
    };
  }
  const providerFn = providers[provider];
  if(!providerFn) {
    return { 
      success: false,
      errorMessage: 'Provider is not valid',
    };
  }

  // logic
  return providerFn(email);
}

export default addSubscriber;
