export function pipe<T>(...funcs: ((value: T) => T)[]): (value: T) => T {
  return (value: T) => funcs.reduce((acc, func) => func(acc), value);
}
