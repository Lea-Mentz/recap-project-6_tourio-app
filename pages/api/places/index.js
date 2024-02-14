import Place from "@/db/models/Place";
import dbConnect from "@/db/connect";

export default async function handler(request, response) {
  await dbConnect();

  // if (request.method === "POST") {
  //   try {
  //     const newProduct = await Product.create(request.body);
  //     return response.status(200).json(newProduct);
  //   } catch (error) {
  //     return response
  //       .status(500)
  //       .json({ message: "error creating new product" });
  //   }
  // }

  if (request.method === "GET") {
    const places = await Place.find();
    return response.status(200).json(places);
  } else {
    return response.status(405).json({ message: "Fail" });
  }
}
