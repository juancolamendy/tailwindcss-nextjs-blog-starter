// handler
const handler = async (req, res) => {
  const { email, provider } = req.body;
  if (!email) {
    return res.json({ 
      success: false,
      errorMessage: 'Email is required',
    });
  }

  try {
    return res.json({
      success: true,
    });
  } catch (error) {
    return res.json({
      success: false,
      errorMessage: error.message || error.toString(),
    });
  }
}

export default handler;
