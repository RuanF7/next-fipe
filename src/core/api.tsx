import { ICarro, IMarca } from "@/models/ApiModels";

const BASE_URL = "http://localhost:3000/api/";

async function getMarcas() {
  const marcas: IMarca = await fetch(BASE_URL + "/marcas")
    .then((resp) => {
      return resp.json();
    })
    .then((marcas) => {
      return marcas;
    });

  return marcas;
}

function getModelo({ marca_id }: ICarro) {
  return void 0;
}

function getAno({ marca_id, modelo_id }: ICarro) {
  return void 0;
}

function getFipe({ marca_id, modelo_id, ano_id }: ICarro) {
  return void 0;
}

export { getMarcas };
