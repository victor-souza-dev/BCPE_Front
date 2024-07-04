import { pipe } from "./pipe";

interface IUnionStringsConfig {
  funcs?: ((text: string) => string)[];
  separator?: string;
}

function limitStringLength(text: string, limit: number = 32): string {
  if (!text) return "";

  return text.length > limit ? text.slice(0, limit) + "..." : text;
}

function pascalCaseToWords(text: string): string {
  return text
    .replace(/([A-Z])/g, " $1")
    .replace(/(^.|[^a-zA-Z0-9]+.)/g, (str) => str.toUpperCase())
    .trim();
}

function removeSpecialCharacters(text: string): string {
  return text.replace(/[^a-zA-Z0-9]/g, "");
}

function unionStrings(
  stringOne: string,
  stringTwo: string,
  config?: IUnionStringsConfig,
): string {
  return [stringOne, stringTwo]
    .map((str) => pipe(...(config?.funcs || []))(str || ""))
    .join(config?.separator || "");
}

function camelCaseToNormal(text: string) {
  let result = text.replace(/([A-Z])/g, " $1");
  result = result.charAt(0).toUpperCase() + result.slice(1).toLowerCase();

  return result;
}

export const StringUtils = {
  limitStringLength,
  pascalCaseToWords,
  removeSpecialCharacters,
  unionStrings,
  camelCaseToNormal,
};
