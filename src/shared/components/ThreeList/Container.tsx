import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";

import { getAllIds } from "./mutationsHelpers";

export interface ITreeNode {
  id: string;
  label: React.ReactElement | string;
  children?: ITreeNode[];
}

interface IProps {
  children: React.ReactNode;
  expandedItems?: ITreeNode[] | undefined;
  fullWidth?: boolean;
}

export const Container = ({ children, expandedItems, fullWidth }: IProps) => {
  return (
    <SimpleTreeView
      id="treeView"
      aria-label="customized"
      sx={{
        overflowX: "hidden",
        minHeight: 270,
        flexGrow: 1,
        maxWidth: fullWidth ? "100%" : 400,
      }}
      expandedItems={getAllIds(expandedItems)}
      disableSelection
      disabledItemsFocusable
    >
      {children}
    </SimpleTreeView>
  );
};
