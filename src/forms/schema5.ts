export const schema = {
    type: "object",
    properties: {
      activityName: {
        type: "string",
        title: "Nom de l'activité",
        description: "Entrez le nom de l'activité.",
      },
      date: {
        type: "string",
        format: "date",
        title: "Date de l'activité",
        description: "Sélectionnez la date de l'activité.",
      },
      description: {
        type: "string",
        title: "Description",
        format: "textarea", // Utilisez un champ de texte multiligne
        description: "Décrivez l'activité en détail.",
      },
    },
    required: ["activityName", "date"], // Champs obligatoires
  };