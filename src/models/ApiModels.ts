interface Modelo_API {
  codigo: string;
  nome: string;
}

interface Marca_API {
  codigo: string;
  nome: string;
}

export interface IMarca {
  marcas: [Marca_API];
  error: string;
  status: boolean;
}

export interface IModelo {
  modelos: [Modelo_API];
  error: string;
  status: boolean;
}
