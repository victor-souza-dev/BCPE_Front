import JSZip from "jszip";

export function downloadZip(data: any[]): void {
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
      throw new Error(err);
    });
}
