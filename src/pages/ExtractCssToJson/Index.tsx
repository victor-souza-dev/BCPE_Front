import { useRef, useState } from "react";

import UploadIcon from "@mui/icons-material/Upload";
import {
  Box,
  Button,
  CircularProgress,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { useSnackbar } from "notistack";
import { v4 } from "uuid";

import { useExtractCssToJsonPost } from "src/shared/queries/post";

import { convertTreeToRequest } from "./getRequest";
import { generateTemplateConfig, generateTemplateValue } from "./getTemplate";
import Tree from "./Three";

export interface ITreeNode {
  id: string;
  label: React.ReactElement | string;
  children?: ITreeNode[];
}

const initialTree: ITreeNode[] = [
  {
    id: "root",
    label: "Root",
    children: [generateTemplateConfig(v4(), generateTemplateValue(v4()))],
  },
];

export function ExtractCssToJson() {
  const [treeData, setTreeData] = useState<ITreeNode[]>(initialTree);
  const [fileCount, setFileCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const { mutate } = useExtractCssToJsonPost();

  const inputRef = useRef<HTMLInputElement>(null);

  const handleUpload = () => {
    inputRef.current?.click();
  };

  const handleFileChange = () => {
    if (inputRef.current?.files) {
      setFileCount(inputRef.current.files.length);
    }
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !inputRef.current?.files?.length ||
      inputRef.current.files.length === 0
    ) {
      enqueueSnackbar("É necessário adicionar pelo menos um arquivo css", {
        variant: "error",
        autoHideDuration: 3000,
      });
    } else if (inputRef.current?.files?.length > 1000) {
      enqueueSnackbar("Limite de 1000 arquivos atingido!", {
        variant: "error",
        autoHideDuration: 3000,
      });
    } else {
      const threeDataReq = convertTreeToRequest(treeData);
      setIsLoading(true);
      mutate({
        configs: threeDataReq,
        archives: inputRef.current?.files,
      });
      setIsLoading(false);
    }
  };

  return (
    <form style={{ width: "100%" }} onSubmit={onSubmit}>
      <Grid
        container
        pb={2}
        pt={6}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Paper
          variant="outlined"
          sx={{ width: { xs: "80%", md: "65%", lg: "50%" }, p: 3 }}
        >
          <Grid container gap={2}>
            <Grid item>
              <Typography
                variant="h6"
                fontWeight={"bold"}
                fontStyle={"italic"}
                mb={4}
              >
                Extrator de propriedades CSS em Lote
              </Typography>
            </Grid>
            <Grid item container>
              <Button
                variant="contained"
                color="info"
                startIcon={<UploadIcon />}
                onClick={handleUpload}
                fullWidth
              >
                {fileCount > 0 ? `${fileCount} File css` : "Upload Css"}
              </Button>
              <input
                type="file"
                ref={inputRef}
                onChange={handleFileChange}
                accept=".css"
                multiple
                hidden
              />
            </Grid>
            <Grid item container justifyContent={"center"}>
              <Tree setTreeData={setTreeData} treeData={treeData} />
            </Grid>
            <Grid item container>
              <Button
                type="submit"
                variant="contained"
                color="success"
                endIcon={
                  isLoading && (
                    <Box
                      pl={1}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <CircularProgress color="inherit" size={16} />
                    </Box>
                  )
                }
                fullWidth
              >
                Generate
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </form>
  );
}
