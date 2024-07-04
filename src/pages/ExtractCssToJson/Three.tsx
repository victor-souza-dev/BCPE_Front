import * as React from "react";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Button, IconButton } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem, treeItemClasses } from "@mui/x-tree-view/TreeItem";
import { v4 } from "uuid";

import { getAllIds } from "./getRequest";
import { generateTemplateConfig, generateTemplateValue } from "./getTemplate";
import { ITreeNode } from "./Index";

const CustomTreeItem = styled(TreeItem)(({ theme }) => ({
  [`& .${treeItemClasses.content}`]: {
    padding: theme.spacing(0.5, 1),
    margin: theme.spacing(0.2, 0),
  },
  [`& .${treeItemClasses.iconContainer}`]: {
    "& .close": {
      opacity: 0.3,
    },
  },
  [`& .${treeItemClasses.groupTransition}`]: {
    marginLeft: 15,
    paddingLeft: 18,
    borderLeft: `1px dashed ${alpha(theme.palette.text.primary, 0.4)}`,
  },
}));

interface IProps {
  treeData: ITreeNode[];
  setTreeData: React.Dispatch<React.SetStateAction<ITreeNode[]>>;
}

export default function Tree({ setTreeData, treeData }: IProps) {
  const addNode = (parentId: string, isKeyValue: boolean = false) => {
    const newNode: ITreeNode = isKeyValue
      ? generateTemplateConfig(v4(), generateTemplateValue(v4()))
      : generateTemplateValue(v4());

    const addNodeRecursively = (nodes: ITreeNode[]): ITreeNode[] => {
      return nodes.map((node) => {
        if (node.id === parentId) {
          return {
            ...node,
            children: node.children ? [...node.children, newNode] : [newNode],
          };
        }

        if (node.children) {
          return {
            ...node,
            children: addNodeRecursively(node.children),
          };
        }

        return node;
      });
    };

    setTreeData(addNodeRecursively(treeData));
  };

  const removeNode = (nodeId: string) => {
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

    setTreeData(removeNodeRecursively(treeData));
  };

  const renderTree = (nodes: ITreeNode[]) => {
    return nodes.map((node, index) => (
      <CustomTreeItem
        key={node.id}
        itemId={node.id}
        label={
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {node.label}
            {(node.id.startsWith("config") || node.id.startsWith("value")) &&
              index > 0 && (
                <IconButton
                  sx={{ width: 22, height: 22 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    removeNode(node.id);
                  }}
                >
                  <RemoveIcon
                    sx={{
                      cursor: "pointer",
                      width: 15,
                      height: 15,
                      color: "black",
                    }}
                  />
                </IconButton>
              )}
          </div>
        }
      >
        {node.children && renderTree(node.children)}
        {node.id.startsWith("root") && (
          <Button
            variant="text"
            color="inherit"
            sx={{ opacity: 0.5, p: "5px 7px", m: "3px 0", fontSize: 12 }}
            startIcon={<AddIcon sx={{ width: 18, height: 18 }} />}
            onClick={(e) => {
              e.stopPropagation();
              addNode(node.id, true);
            }}
            fullWidth
          >
            Add Config
          </Button>
        )}
        {node.id.startsWith("keyValue") && (
          <Button
            variant="text"
            color="inherit"
            sx={{ opacity: 0.5, p: "5px 7px", m: "3px 0", fontSize: 12 }}
            startIcon={<AddIcon sx={{ width: 18, height: 18 }} />}
            onClick={(e) => {
              e.stopPropagation();
              addNode(node.id);
            }}
            fullWidth
          >
            Add Value
          </Button>
        )}
      </CustomTreeItem>
    ));
  };

  return (
    <SimpleTreeView
      aria-label="customized"
      sx={{
        overflowX: "hidden",
        minHeight: 270,
        flexGrow: 1,
        maxWidth: 400,
      }}
      expandedItems={getAllIds(treeData)}
      disableSelection
      disabledItemsFocusable
    >
      {renderTree(treeData)}
    </SimpleTreeView>
  );
}
