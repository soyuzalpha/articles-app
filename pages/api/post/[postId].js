import client from "../../../lib/prismadb";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not alowed" });
  }

  const { postId } = req.query;
  const post = await client.post.findUnique({
    where: {
      // id: "clc9z7l0l0004p3yyib2v25v8",
      id: postId,
    },
    include: {
      author: {
        select: { name: true, email: true },
      },
    },
  });
  return res.json(post);
}
