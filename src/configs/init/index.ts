interface IInit {
  [key: string]: () => void;
}

export const init: IInit = {};
