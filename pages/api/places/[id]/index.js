import Place from "../../../../db/models/Place.js";
import dbConnect from "@/db/connect";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;
  console.log(request.query);

  if (!id) {
    return response
      .status(400)
      .json({ status: "Bad request", message: "ID parameter is missing" });
  }

  if (request.method === "GET") {
    const place = await Place.findById(id);

    if (!place) {
      return response
        .status(404)
        .json({ message: `place ${request.query.id}` });
    } else {
      response.status(200).json(place);
    }
  }
}
