import { NextApiRequest, NextApiResponse } from "next";

export default async function marcasRequest(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(404).json({
    modelos: [],
    status: false,
    error: "ID da marca do carro não não foi informado",
  });
}
