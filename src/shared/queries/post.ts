import { useMutation } from "@tanstack/react-query";
import { useSnackbar } from "notistack";

import { baseApi } from "../../configs/services/baseApi";
import { downloadZip } from "../helpers/downloadZip";

export interface Request {
  archives: FileList;
  configs: FormatConfigCss[];
}

export interface FormatConfigCss {
  className: string;
  keyValue: KeyValueCss[];
}

export interface KeyValueCss {
  property: string;
  resultName: string;
}

function createFormData(req: Request): FormData {
  const formData = new FormData();
  Array.from(req.archives).forEach((archive: File) => {
    formData.append("archives", archive, archive.name);
  });
  req.configs.forEach((config, index) => {
    formData.append(`configs[${index}].className`, config.className);
    config.keyValue.forEach((keyValue, kvIndex) => {
      formData.append(
        `configs[${index}].keyValue[${kvIndex}].property`,
        keyValue.property,
      );
      formData.append(
        `configs[${index}].keyValue[${kvIndex}].resultName`,
        keyValue.resultName,
      );
    });
  });
  return formData;
}

function request(req: Request) {
  const formData = createFormData(req);
  return baseApi.post("/Home", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
}

export const useExtractCssToJsonPost = () => {
  const { enqueueSnackbar } = useSnackbar();

  const mutation = useMutation({
    mutationKey: ["convertTreeToRequest"],
    mutationFn: request,
    onSuccess: (res) => {
      const data = res.data;
      if (Array.isArray(data) && data.length > 0) {
        try {
          downloadZip(data);
        } catch (error) {
          enqueueSnackbar("Erro ao gerar o arquivo ZIP", { variant: "error" });
        }
      } else {
        enqueueSnackbar("Erro inesperado", { variant: "error" });
      }
    },
  });

  return mutation;
};
