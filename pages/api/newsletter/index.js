import addSubscriber from '../../../lib/service/newslettersvc';

// handler
const handler = async (req, res) => {
  const result = addSubscriber(req.body);
  return res.json(result);
}

export default handler;
