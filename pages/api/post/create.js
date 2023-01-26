import client from "../../../lib/prismadb";

export default async function handle(req, res) {
  const { authorId, title, body } = req.body;
  const result = await client.post.create({
    data: {
      title: title,
      body: body,
      author: { connect: { id: authorId } },
    },
  });
  res.json(result);
}
