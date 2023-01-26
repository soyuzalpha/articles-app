import prisma from "../../../../lib/prismadb";

export default async function handle(req, res) {
  if (req.method !== "DELETE") {
    return res.status(405).json({ message: "Method not alowed" });
  }

  const { favId } = req.query;
  const result = await prisma.favourites.delete({
    where: {
      id: favId,
    },
  });
  res.json(result);
}
