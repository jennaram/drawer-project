export const uischema = {
    type: "VerticalLayout",
    elements: [
      {
        type: "Control",
        scope: "#/properties/activityName",
        options: {
          placeholder: "Nom de l'activité", // Placeholder pour le champ nom de l'activité
        },
      },
      {
        type: "Control",
        scope: "#/properties/date",
        options: {
          dateFormat: "YYYY-MM-DD", // Format de la date
          placeholder: "Sélectionnez une date", // Placeholder pour le champ date
        },
      },
      {
        type: "Control",
        scope: "#/properties/description",
        options: {
          rows: 5, // Nombre de lignes pour le champ de texte multiligne
          placeholder: "Décrivez l'activité ici...", // Placeholder pour le champ description
        },
      },
    ],
  };