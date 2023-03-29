import { NextApiRequest, NextApiResponse } from "next";

const BASE_URL = "https://parallelum.com.br/fipe/api/v1/carros/marcas";

export default async function marcasRequest(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const marcas = await fetch(BASE_URL).then((resp) => {
      return resp.json();
    });
    res.status(200).json({ marcas, status: true, error: "" });
  } catch (error) {
    res.status(404).json({ marcas: [], status: false, error });
  }
}
