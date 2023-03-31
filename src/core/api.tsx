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

function getAno(marca_id: string, modelo_id: string) {
  return void 0;
}

function getFipe(marca_id: string, modelo_id: string, ano_id: string) {
  return void 0;
}

export { getMarcas, getModelo };
