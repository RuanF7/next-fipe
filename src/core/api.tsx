import { IMarca, IModelo } from "@/models/ApiModels";

const BASE_URL = process.env.NEXT_PUBLIC_API_FRONT;

async function getMarcas() {
  const marcas: IMarca = await fetch(BASE_URL + "/marcas")
    .then((resp) => {
      return resp.json();
    })
    .then((marcas) => {
      return marcas;
    });

  console.log("Passei");
  return marcas;
}

async function getModelo(marca_id: string) {
  const modelos: IModelo = await fetch(BASE_URL + "/modelos/" + marca_id)
    .then((resp) => {
      return resp.json();
    })
    .then((modelos) => {
      return modelos;
    });

  return modelos;
}

async function getAno(marca_id: string, modelo_id: string) {
  const anos: IModelo = await fetch(
    BASE_URL + "/anos/" + marca_id + "/" + modelo_id
  )
    .then((resp) => {
      return resp.json();
    })
    .then((anos) => {
      return anos;
    });

  return anos;
}

async function getFipe(marca_id: string, modelo_id: string, ano_id: string) {
  const fipe: IModelo = await fetch(
    BASE_URL + "/valor/" + marca_id + "/" + modelo_id + "/" + ano_id
  )
    .then((resp) => {
      return resp.json();
    })
    .then((fipe) => {
      return fipe;
    });

  return fipe;
}

export { getMarcas, getModelo, getAno, getFipe };
