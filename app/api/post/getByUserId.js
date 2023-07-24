import prisma from '../../lib/prismadb';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not alowed' });
  }

  const result = await prisma.post.findMany({
    where: {
      userId: 'clc9z5lq80000p3yyvoddqgqv',
    },
  });

  return res.json(result);
}
