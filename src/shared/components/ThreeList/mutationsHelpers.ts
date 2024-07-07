import i18n from "src/locales/i18n";
import { tokens } from "src/locales/tokens";

import { ITreeNode } from "./Container";
import {
  createTextField,
  generateTemplateConfig,
  generateTemplateValue,
} from "./templates";

export const getAllIds = (
  nodes: ITreeNode[] | undefined,
): string[] | undefined => {
  if (!nodes) return undefined;

  const ids: string[] = [];

  const traverseNodes = (nodes: ITreeNode[]) => {
    nodes.forEach((node) => {
      ids.push(node.id);
      if (node.children) {
        traverseNodes(node.children);
      }
    });
  };

  traverseNodes(nodes);
  return ids;
};

export const addNode = (
  parentId: string,
  isKeyValue: boolean,
  treeData: ITreeNode[],
): ITreeNode[] => {
  const newNode: ITreeNode = isKeyValue
    ? generateTemplateConfig(i18n.t, generateTemplateValue(i18n.t))
    : generateTemplateValue(i18n.t);
  const addNodeRecursively = (nodes: ITreeNode[]): ITreeNode[] => {
    return nodes.map((node) => {
      if (node.id === parentId) {
        return {
          ...node,
          children: node.children ? [...node.children, newNode] : [newNode],
        };
      }
      if (node.children) {
        return { ...node, children: addNodeRecursively(node.children) };
      }
      return node;
    });
  };
  return addNodeRecursively(treeData);
};

export const removeNode = (
  nodeId: string,
  treeData: ITreeNode[],
): ITreeNode[] => {
  const removeNodeRecursively = (nodes: ITreeNode[]): ITreeNode[] => {
    return nodes.reduce((acc, node) => {
      if (node.id === nodeId) {
        return acc;
      }
      if (node.children) {
        return [
          ...acc,
          { ...node, children: removeNodeRecursively(node.children) },
        ];
      }
      return [...acc, node];
    }, [] as ITreeNode[]);
  };
  return removeNodeRecursively(treeData);
};

export function updateLabels(treeData: ITreeNode[], t: any): ITreeNode[] {
  return treeData.map((node) => {
    const labelString = t(
      tokens.extractCssToJson[
        node.id.split("-")[0] as keyof typeof tokens.extractCssToJson
      ],
    );

    let placeholder = labelString;

    switch (node.id.split("-")[0]) {
      case "className":
        placeholder = `.${labelString.replaceAll(" ", "")} > 0`;
        break;
      case "property":
        placeholder = "background-color";
        break;
      case "variableName":
        placeholder = "BackgroundColor1";
        break;

      default:
        break;
    }

    return {
      ...node,
      label:
        typeof node.label === "string"
          ? labelString
          : createTextField({
              id: node.id,
              label: labelString,
              placeholder,
              defaultValue: node.label.props.value,
            }),
      children: node.children ? updateLabels(node.children, t) : undefined,
    };
  });
}
