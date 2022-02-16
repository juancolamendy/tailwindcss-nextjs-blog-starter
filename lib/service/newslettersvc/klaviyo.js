const execute = async (email) => {
  try {
    const API_KEY = process.env.KLAVIYO_API_KEY;
    const LIST_ID = process.env.KLAVIYO_LIST_ID;

    const response = await fetch(
      `https://a.klaviyo.com/api/v2/list/${LIST_ID}/subscribe?api_key=${API_KEY}`,
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          profiles: [{ email: email }],
        }),
      }
    );
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
      error: error.message || error.toString()
    };
  }
};

export default execute;
