import { NextApiRequest, NextApiResponse } from "next";

export default async function marcasRequest(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(404).json({
    modelos: [],
    status: false,
    error: "Modelo e ano não foram informados",
  });
}
