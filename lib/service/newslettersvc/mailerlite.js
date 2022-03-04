const execute = async (email) => {
  try {
    const API_KEY = process.env.MAILERLITE_API_KEY;
    const mailerLiteRoute = `${process.env.MAILERLITE_API_URL}subscribers`;
    
    const response = await fetch(mailerLiteRoute, {
      body: JSON.stringify({
        email,
      }),
      headers: {
        'X-MailerLite-ApiKey': `${API_KEY}`,
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    const respData = await response.json();
    console.log('mailerlite - response: ', respData);
    if (response.status >= 400) {
      return {
        success: false,
        errorMessage: `There was an error subscribing to the list.` 
      };
    }
    return { success: true };
  } catch (error) {
    return {
      success: false,
      errorMessage: error.message || error.toString() 
    };
  }
}

export default execute;
