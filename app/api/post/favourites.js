import client from '../../lib/prismadb';

export default async function handle(req, res) {
  const { userId, postId } = req.body;
  const result = await client.favourites.create({
    data: { userId, postId },
  });
  res.json(result);
}
