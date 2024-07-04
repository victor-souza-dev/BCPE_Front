import { ITreeNode } from "./Index";

export interface Request {
  archives: FileList;
  configs: FormatConfigCss[];
}

interface FormatConfigCss {
  className: string;
  keyValue: KeyValueCss[];
}

interface KeyValueCss {
  property: string;
  resultName: string;
}

// function filesToBase64(files: FileList | null | undefined): Promise<string[]> {
//   if (!files) return Promise.resolve([]);

//   const readFileAsBase64 = (file: File): Promise<string> => {
//     return new Promise((resolve, reject) => {
//       const reader = new FileReader();
//       reader.onload = () => resolve(reader.result as string);
//       reader.onerror = (error) => reject(error);
//       reader.readAsDataURL(file);
//     });
//   };

//   const promises: Promise<string>[] = [];
//   for (let i = 0; i < files.length; i++) {
//     promises.push(readFileAsBase64(files[i]));
//   }

//   return Promise.all(promises);
// }

export function base64ToBlob(base64: string, contentType: string = ""): Blob {
  const byteCharacters = atob(base64.split(",")[1]);
  const byteArrays = [];

  for (let offset = 0; offset < byteCharacters.length; offset += 512) {
    const slice = byteCharacters.slice(offset, offset + 512);
    const byteNumbers = new Array(slice.length);

    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }

  return new Blob(byteArrays, { type: contentType });
}

function getTextFieldValue(label: React.ReactElement): string {
  const element = label as React.ReactElement;
  if (element && element.props && element.props.children) {
    const textField = element.props.children as React.ReactElement;
    if (textField && textField.props && textField.props.id) {
      const inputElement = document.getElementById(
        textField.props.id,
      ) as HTMLInputElement;
      return inputElement?.value || "";
    }
  }
  return "";
}

export function convertTreeToRequest(treeData: ITreeNode[]): FormatConfigCss[] {
  const configs: FormatConfigCss[] = [];

  const traverseNodes = (nodes: ITreeNode[], isRoot = false) => {
    nodes.forEach((node) => {
      if (node.id.startsWith("config")) {
        let className = "";
        const keyValue: KeyValueCss[] = [];

        if (node.children) {
          node.children.forEach((child) => {
            if (child.id.startsWith("className")) {
              // @ts-expect-error teste
              className = getTextFieldValue(child.label);
            } else if (child.id.startsWith("keyValue-") && child.children) {
              child.children.forEach((keyValueNode) => {
                if (keyValueNode.label === "Value" && keyValueNode.children) {
                  let property = "";
                  let resultName = "";

                  keyValueNode.children.forEach((valueChild) => {
                    if (valueChild.id.startsWith("property-")) {
                      // @ts-expect-error teste
                      property = getTextFieldValue(valueChild.label);
                    } else if (valueChild.id.startsWith("resultName-")) {
                      // @ts-expect-error teste
                      resultName = getTextFieldValue(valueChild.label);
                    }
                  });

                  if (property && resultName) {
                    keyValue.push({ property, resultName });
                  }
                }
              });
            }
          });
        }

        if (className && keyValue.length > 0) {
          configs.push({ className, keyValue });
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

export const getAllIds = (nodes: ITreeNode[]): string[] => {
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
