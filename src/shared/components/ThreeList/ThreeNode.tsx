import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { alpha, Button, IconButton, styled } from "@mui/material";
import { TreeItem, treeItemClasses } from "@mui/x-tree-view/TreeItem";

import i18n from "src/locales/i18n";
import { tokens } from "src/locales/tokens";
import { ITreeNode } from "src/pages/ExtractCssToJson/Index";

import { addNode, removeNode } from "./mutationsHelpers";

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

const renderTreeItem = (
  node: ITreeNode,
  index: number,
  setTreeData: React.Dispatch<React.SetStateAction<ITreeNode[]>>,
) => {
  return (
    <CustomTreeItem
      id={node.id.split("-")[0]}
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
          {(node.id.startsWith("config") || node.id.startsWith("keyValues")) &&
            index > 0 && (
              <IconButton
                id="removeButton"
                sx={{ width: 22, height: 22 }}
                onClick={(e) => {
                  e.stopPropagation();
                  setTreeData((prev) => removeNode(node.id, prev));
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
      {node.children && renderTree(node.children, setTreeData)}
      {node.id.startsWith("root") && (
        <Button
          id="addConfigButton"
          variant="text"
          color="inherit"
          sx={{ opacity: 0.5, p: "5px 7px", m: "3px 0", fontSize: 12 }}
          startIcon={<AddIcon sx={{ width: 18, height: 18 }} />}
          onClick={(e) => {
            e.stopPropagation();
            setTreeData((prev) => addNode(node.id, true, prev));
          }}
          fullWidth
        >
          {i18n.t(tokens.threeList.addConfig)}
        </Button>
      )}
      {node.id.startsWith("values") && (
        <Button
          id="addValueButton"
          variant="text"
          color="inherit"
          sx={{ opacity: 0.5, p: "5px 7px", m: "3px 0", fontSize: 12 }}
          startIcon={<AddIcon sx={{ width: 18, height: 18 }} />}
          onClick={(e) => {
            e.stopPropagation();
            setTreeData((prev) => addNode(node.id, false, prev));
          }}
          fullWidth
        >
          {i18n.t(tokens.threeList.addValue)}
        </Button>
      )}
    </CustomTreeItem>
  );
};

const renderTree = (
  treeData: ITreeNode[],
  setTreeData: React.Dispatch<React.SetStateAction<ITreeNode[]>>,
) => {
  return treeData.map((node, index) =>
    renderTreeItem(node, index, setTreeData),
  );
};

export const ThreeNode = ({ treeData, setTreeData }: IProps) => {
  return <>{renderTree(treeData, setTreeData)}</>;
};
