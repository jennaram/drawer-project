export const schema = {
  type: "object",
  properties: {
    childName: { type: "string", title: "Nom de l'enfant" },
    birthDate: { type: "string", format: "date", title: "Date de naissance" },
    class: { type: "string", title: "Classe" },
  },
};