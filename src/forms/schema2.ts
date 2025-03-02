export const schema = {
  type: "object",
  properties: {
    photoTitle: { type: "string", title: "Titre de la photo" },
    uploadDate: { type: "string", format: "date", title: "Date d'upload" },
    description: { type: "string", title: "Description" },
  },
};