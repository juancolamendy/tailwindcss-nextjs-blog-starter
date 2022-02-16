const execute = async (email) => {
  try {
    const API_KEY = process.env.BUTTONDOWN_API_KEY;
    const buttondownRoute = `${process.env.BUTTONDOWN_API_URL}subscribers`;
    
    const response = await fetch(buttondownRoute, {
      body: JSON.stringify({
        email,
      }),
      headers: {
        Authorization: `Token ${API_KEY}`,
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

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
