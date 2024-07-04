interface IGeneric {
  [key: string]: string | object;
}

interface ITokens {
  [key: string]: string | IGeneric;
}

export const tokens: ITokens = {};
