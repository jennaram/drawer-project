// src/config/drawerConfig.ts
import React from "react"; // Import de React pour utiliser JSX
import { UserOutlined, LockOutlined, ProfileOutlined, MailOutlined, KeyOutlined } from "@ant-design/icons";

export const drawerConfig = [
    {
      title: "Titre 1", // Titre pour le premier set de données
      items: [
        { key: "form1", label: "Catégorie 1", icon: React.createElement(UserOutlined) },
        { key: "form2", label: "Catégorie 2", icon: React.createElement(LockOutlined) },
        { key: "form3", label: "Catégorie 3", icon: React.createElement(ProfileOutlined) },
      ],
    },
    {
      title: "Titre 2", // Titre pour le deuxième set de données
      items: [
        { key: "form4", label: "Catégorie 4", icon: React.createElement(MailOutlined) },
        { key: "form5", label: "Catégorie 5", icon: React.createElement(KeyOutlined) },
      ],
    },
  ];