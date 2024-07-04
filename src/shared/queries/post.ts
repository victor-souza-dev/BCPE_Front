import { useMutation } from "@tanstack/react-query";
import JSZip from "jszip";
import { useSnackbar } from "notistack";

import { Request } from "src/pages/ExtractCssToJson/getRequest";

import { baseApi } from "../services/baseApi";

function request(req: Request) {
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

  return baseApi.post("/Home", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
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
        const zip = new JSZip();

        data.forEach((item) => {
          if (item.values && item.name) {
            const jsonString = JSON.stringify(item.values, null, 2);
            zip.file(`${item.name}.json`, jsonString);
          }
        });

        zip
          .generateAsync({ type: "blob" })
          .then((content) => {
            const url = URL.createObjectURL(content);
            const a = document.createElement("a");
            a.href = url;
            a.download = "arquivos.zip";
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
          })
          .catch((err) => {
            console.error("Erro ao gerar o arquivo ZIP:", err);
            enqueueSnackbar("Erro ao gerar o arquivo ZIP", {
              variant: "error",
            });
          });
      } else {
        enqueueSnackbar("Erro inesperado", {
          variant: "error",
        });
      }
    },
  });

  return mutation;
};
