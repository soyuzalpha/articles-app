import prisma from '../../../lib/prismadb';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not alowed' });
  }

  const { id } = req.query;
  const posts = await prisma.post.findMany({
    where: {
      authorId: id,
    },
    include: {
      author: {
        select: { name: true, email: true },
      },
    },
  });
  return res.json(posts);
}
