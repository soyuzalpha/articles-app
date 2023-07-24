import client from '../../lib/prismadb';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not alowed' });
  }

  const post = await client.post.findMany();
  return res.json(post);
}
