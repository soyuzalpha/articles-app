import prisma from '../../../lib/prismadb';

export default async function handle(req, res) {
  if (req.method !== 'DELETE') {
    return res.status(405).json({ message: 'Method not alowed' });
  }

  const { postId } = req.query;
  const result = await prisma.post.delete({
    where: {
      id: postId,
    },
  });
  res.json(result);
}
