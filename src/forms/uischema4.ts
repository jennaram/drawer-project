export const uischema = {
    type: "VerticalLayout",
    elements: [
      {
        type: "Control",
        scope: "#/properties/recipient",
        options: {
          placeholder: "exemple@email.com", // Placeholder pour le champ destinataire
        },
      },
      {
        type: "Control",
        scope: "#/properties/subject",
        options: {
          placeholder: "Sujet du message", // Placeholder pour le champ sujet
        },
      },
      {
        type: "Control",
        scope: "#/properties/message",
        options: {
          rows: 5, // Nombre de lignes pour le champ de texte multiligne
          placeholder: "Écrivez votre message ici...", // Placeholder pour le champ message
        },
      },
    ],
  };