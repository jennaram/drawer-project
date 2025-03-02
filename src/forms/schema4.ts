export const schema = {
    type: "object",
    properties: {
      recipient: {
        type: "string",
        title: "Destinataire",
        description: "Entrez l'adresse e-mail du destinataire.",
      },
      subject: {
        type: "string",
        title: "Sujet",
        description: "Entrez le sujet du message.",
      },
      message: {
        type: "string",
        title: "Message",
        format: "textarea", // Utilisez un champ de texte multiligne
        description: "Écrivez votre message ici.",
      },
    },
    required: ["recipient", "subject", "message"], // Champs obligatoires
  };