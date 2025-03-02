export const schema = {
    type: "object",
    properties: {
      fullName: { type: "string", title: "Nom complet" },
      email: { type: "string", format: "email", title: "Email" },
      phone: { type: "string", title: "Téléphone" },
    },
  };