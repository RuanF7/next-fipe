import { NextApiRequest, NextApiResponse } from "next";
import router from "next/router";

const BASE_URL = process.env.BASE_API_FIPE;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { marca, modelo } = req.query;
    const anos = await fetch(
      BASE_URL + marca + "/modelos/" + modelo + "/anos"
    ).then((resp) => {
      return resp.json();
    });

    if (anos.error) {
      res.status(404).json({
        modelos: [],
        status: false,
        error: "Ano do modelo não foi localizado",
      });
    }
    res.status(200).json({ ...anos, status: true, error: "" });
  } catch (error) {
    res.status(404).json({ modelos: [], status: false, error });
  }
}
