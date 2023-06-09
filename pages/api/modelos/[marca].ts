import { NextApiRequest, NextApiResponse } from "next";

const BASE_URL = process.env.BASE_API_FIPE;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { marca } = req.query;
    const modelos = await fetch(BASE_URL + marca + "/modelos").then((resp) => {
      return resp.json();
    });

    if (modelos.error) {
      res
        .status(404)
        .json({ modelos: [], status: false, error: "Modelo não encontrado" });
    }
    res.status(200).json({ ...modelos, status: true, error: "" });
  } catch (error) {
    res.status(404).json({ modelos: [], status: false, error });
  }
}
