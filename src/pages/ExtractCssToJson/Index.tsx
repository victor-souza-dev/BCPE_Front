import React, { useEffect, useRef, useState } from "react";

import UploadIcon from "@mui/icons-material/Upload";
import { Button, Grid, Paper } from "@mui/material";
import { useTranslation } from "react-i18next";

import i18n from "src/locales/i18n";
import { tokens } from "src/locales/tokens";
import { ThreeList } from "src/shared/components/ThreeList";
import { updateLabels } from "src/shared/components/ThreeList/mutationsHelpers";
import {
  generateTemplateConfig,
  generateTemplateValue,
} from "src/shared/components/ThreeList/templates";
import { useExtractCssToJsonPost } from "src/shared/queries/post";

import { convertTreeToRequest } from "./formatRequest";

export interface ITreeNode {
  id: string;
  label: React.ReactElement | string;
  children?: ITreeNode[];
}

const initialData = [
  {
    id: "root",
    label: i18n.t(tokens.extractCssToJson.root),
    children: [generateTemplateConfig(i18n.t, generateTemplateValue(i18n.t))],
  },
];

export function ExtractCssToJson() {
  const { t, i18n } = useTranslation();
  const [treeData, setTreeData] = useState<ITreeNode[]>(initialData);
  const [fileCount, setFileCount] = useState<number>(0);

  useEffect(() => {
    setTreeData((prevTreeData) => updateLabels(prevTreeData, t));
  }, [i18n.language, t]);

  const { mutate } = useExtractCssToJsonPost();

  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = () => {
    if (inputRef.current?.files) {
      setFileCount(inputRef.current.files.length);
    }
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputRef.current?.files) {
      const threeDataReq = convertTreeToRequest(treeData);

      mutate({
        configs: threeDataReq,
        archives: inputRef.current?.files,
      });
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
            <Grid item container>
              <Button
                id="uploadButton"
                variant="contained"
                color="info"
                startIcon={<UploadIcon />}
                onClick={() => inputRef.current?.click()}
                fullWidth
              >
                {fileCount > 0
                  ? `${fileCount} ${t(tokens.phrases.fileCss)}`
                  : t(tokens.phrases.uploadCss)}
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
              <ThreeList.Container expandedItems={treeData}>
                <ThreeList.ThreeNode
                  treeData={treeData}
                  setTreeData={setTreeData}
                />
              </ThreeList.Container>
            </Grid>
            <Grid item container>
              <Button
                id="generateButton"
                type="submit"
                variant="contained"
                color="success"
                fullWidth
              >
                {t(tokens.words.generate)}
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </form>
  );
}
