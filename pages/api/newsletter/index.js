import addSubscriber from '../../../lib/service/newslettersvc';

// handler
const handler = async (req, res) => {
  const result = await addSubscriber(req.body);
  return res.json(result);
}

export default handler;
