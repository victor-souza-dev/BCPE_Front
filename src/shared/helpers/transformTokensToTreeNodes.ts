import { StringUtils } from "./StringUtils";
import { ITreeNode } from "../components/ThreeList/Container";

function createTreeNode(
  id: string,
  label: string,
  children?: ITreeNode[],
): ITreeNode {
  return {
    id,
    label: StringUtils.pascalCaseToWords(label),
    children,
  };
}

export function transformTokensToTreeNodes(
  tokens: any,
  parentKey: string = "",
): ITreeNode[] {
  return Object.keys(tokens).map((key) => {
    const fullKey = parentKey ? `${parentKey}.${key}` : key;
    const value = tokens[key];

    if (typeof value === "object" && !Array.isArray(value)) {
      return createTreeNode(
        fullKey,
        key,
        transformTokensToTreeNodes(value, fullKey),
      );
    }

    return createTreeNode(fullKey, key);
  });
}
