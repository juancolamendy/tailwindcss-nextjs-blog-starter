const execute = async (email) => {
  try {
    const FORM_ID = process.env.CONVERTKIT_FORM_ID;
    const API_KEY = process.env.CONVERTKIT_API_KEY;
    const API_URL = process.env.CONVERTKIT_API_URL;

    // Send request to ConvertKit
    const data = { email, api_key: API_KEY };

    const response = await fetch(`${API_URL}forms/${FORM_ID}/subscribe`, {
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    if (response.status >= 400) {
      return {
        success: false,
        errorMessage: `There was an error subscribing to the list.`,
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
