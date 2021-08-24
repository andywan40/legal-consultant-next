import { Packer } from "docx";
import { saveAs } from "file-saver";

export const saveDocumentToFile = (doc, fileName) => {
  const mimeType =
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
  Packer.toBlob(doc).then(blob => {
    const docblob = blob.slice(0, blob.size, mimeType);
    saveAs(docblob, fileName);
  });
};
