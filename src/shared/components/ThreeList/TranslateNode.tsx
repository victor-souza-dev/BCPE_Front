import { useState } from "react";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import {
  alpha,
  Box,
  Button,
  IconButton,
  Menu,
  styled,
  TextField,
} from "@mui/material";
import { TreeItem, treeItemClasses } from "@mui/x-tree-view/TreeItem";
import { useSnackbar } from "notistack";
import { v4 } from "uuid";

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
        </div>
      }
    >
      {node.children && renderTree(node.children, setTreeData)}
      {node.children && (
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
  return treeData.map((node) => renderTreeItem(node, setTreeData));
};
export const TranslateNode = ({ treeData, setTreeData }: IProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [inputValue, setInputValue] = useState("");
  const { enqueueSnackbar } = useSnackbar();

  const open = Boolean(anchorEl);

  const handleAddRootNode = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" && inputValue) {
      const isDuplicate = treeData.some((node) => {
        if (typeof node.label === "string")
          return node.label.toLowerCase() === inputValue.toLowerCase();
      });

      if (!isDuplicate) {
        setTreeData((prev) => [
          ...prev,
          {
            id: v4(),
            label: inputValue,
            children: [],
          },
        ]);
        setInputValue("");
        setAnchorEl(null);
      } else {
        enqueueSnackbar(i18n.t(tokens.phrases.existingConfig), {
          variant: "error",
        });
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      {renderTree(treeData, setTreeData)}
      <Button
        id="addRootButton"
        variant="text"
        color="inherit"
        startIcon={<AddIcon />}
        onClick={(e) => setAnchorEl(e.currentTarget)}
        fullWidth
        sx={{ opacity: 0.5, p: "5px 7px", m: "3px 0", fontSize: 12 }}
      >
        {i18n.t(tokens.threeList.addConfig)}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        onClose={() => setAnchorEl(null)}
      >
        <Box sx={{ p: "0 10px" }}>
          <TextField
            color="info"
            variant="standard"
            value={inputValue}
            onChange={handleInputChange}
            onKeyUp={handleAddRootNode}
            placeholder="Nome do elemento"
            focused
          />
        </Box>
      </Menu>
    </div>
  );
};
