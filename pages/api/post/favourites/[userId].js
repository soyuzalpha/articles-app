import prisma from "../../../../lib/prismadb";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not alowed" });
  }

  const { userId } = req.query;
  const posts = await prisma.favourites.findMany({
    where: {
      userId: userId,
    },
    include: {
      post: true,
      user: true,
    },
  });
  return res.json(posts);
}
