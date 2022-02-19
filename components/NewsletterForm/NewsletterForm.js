import { useState } from 'react';
import classNames from 'classnames';

import { useForm } from "react-hook-form";

import siteMetadata from '../../data/siteMetadata';

const NewsletterForm = () => {
  // state
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm();

  // effect
  // functions
  const handleFormData = async formData => {
    console.log('formData:', formData);
    formData.provider = siteMetadata.newsletter.provider;
    
    const res = await fetch('/api/newsletter', {
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });
    const data = await res.json();
    if(data.success) {
      setSubscribed(true);
    } else {
      setError(true);
    }
  }
  
  // render out
  return (
  <div className="flex flex-col justify-center items-center w-full">
    <form 
      className="flex flex-col w-full sm:flex-row"
      onSubmit={handleSubmit(handleFormData)}
      noValidate
    >
      <div className="w-full sm:w-2/3">
        <label className="sr-only" htmlFor="email-input">
          Email address
        </label>
        <input
          autoComplete="email"
          className="w-full h-12 px-4 py-2 border-2 rounded-md focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-500"
          id="email-input"
          name="email"
          placeholder={subscribed ? siteMetadata.newsletter.subscribedMsg : 'Email Address'}
          required
          type="email"
          disabled={subscribed}
          {...register('email', { required: true, pattern: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i })}
        />
        {errors.email && <span className="text-sm text-red-500">Email is required</span>}
      </div>
      <div className="flex w-full sm:w-1/3 mt-2 ml-0 sm:mt-0 sm:ml-3">
        <button
          className={classNames('w-full h-12 rounded-md py-2 px-4 font-medium text-white focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 transform transition-all duration-700 ease-in-out', subscribed ? 'cursor-default bg-primary-200' : 'hover:bg-primary-700 hover:scale-110 bg-primary-500')}
          type="submit"
          disabled={subscribed}
        >
          {subscribed ? siteMetadata.newsletter.thankyouMsg : siteMetadata.newsletter.signupLabel}
        </button>
      </div>
    </form>
    {error && 
      <div className="pt-2 text-sm text-red-500">{siteMetadata.newsletter.errorMsg}</div>
    }
    {subscribed && 
      <div className="pt-2 text-sm text-gray-500">{siteMetadata.newsletter.subscribedMsg}</div>
    }
  </div>
  );
};

export default NewsletterForm;
