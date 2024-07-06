import { ReactElement } from "react";

import { FormatConfigCss, KeyValueCss } from "src/shared/queries/post";

import { ITreeNode } from "./Index";

// Extrai o valor do TextField
function getTextFieldValue(label: React.ReactNode): string {
  const element = label as ReactElement;
  if (element && element.props && element.props.children) {
    const textField = element.props.children as ReactElement;
    if (textField && textField.props && textField.props.id) {
      const inputElement = document.getElementById(
        textField.props.id,
      ) as HTMLInputElement;
      return inputElement?.value || "";
    }
  }
  return "";
}

// Processa um nó de configuração e retorna o FormatConfigCss
function processConfigNode(node: ITreeNode): FormatConfigCss | null {
  let className = "";
  const keyValue: KeyValueCss[] = [];

  node.children?.forEach((child) => {
    if (child.id.startsWith("className")) {
      className = getTextFieldValue(child.label);
    } else if (child.id.startsWith("values-") && child.children) {
      const keyValueEntries = processKeyValueNodes(child.children);
      keyValue.push(...keyValueEntries);
    }
  });

  return className && keyValue.length > 0 ? { className, keyValue } : null;
}

// Processa nós de propriedades e retorna um array de KeyValueCss
function processKeyValueNodes(nodes: ITreeNode[]): KeyValueCss[] {
  const keyValue: KeyValueCss[] = [];

  nodes.forEach((keyValueNode) => {
    if (keyValueNode.id.startsWith("keyValues-") && keyValueNode.children) {
      let property = "";
      let resultName = "";

      keyValueNode.children.forEach((valueChild) => {
        if (valueChild.id.startsWith("property-")) {
          property = getTextFieldValue(valueChild.label);
        } else if (valueChild.id.startsWith("variableName-")) {
          resultName = getTextFieldValue(valueChild.label);
        }
      });

      if (property && resultName) {
        keyValue.push({ property, resultName });
      }
    }
  });

  return keyValue;
}

// Função principal para converter a árvore de nós em uma estrutura de request
export function convertTreeToRequest(treeData: ITreeNode[]): FormatConfigCss[] {
  const configs: FormatConfigCss[] = [];

  const traverseNodes = (nodes: ITreeNode[], isRoot = false) => {
    nodes.forEach((node) => {
      if (node.id.startsWith("config")) {
        const config = processConfigNode(node);
        if (config) {
          configs.push(config);
        }
      }

      if (node.children && isRoot) {
        traverseNodes(node.children);
      }
    });
  };

  traverseNodes(treeData, true);

  return configs;
}
