// src/config/drawerConfig.ts
import React from "react"; // Import de React pour utiliser JSX
import { UserOutlined, LockOutlined, ProfileOutlined, MailOutlined, KeyOutlined } from "@ant-design/icons";

export const drawerConfig = [
    {
      title: "Ecole", // Titre pour le premier set de données
      items: [
        { key: "form1", label: "Profil enfant", icon: React.createElement(UserOutlined) },
        { key: "form2", label: "Photos", icon: React.createElement(LockOutlined) },
        { key: "form3", label: "Mes infos", icon: React.createElement(ProfileOutlined) },
      ],
    },
    {
      title: "Ma classe", // Titre pour le deuxième set de données
      items: [
        { key: "form4", label: "Messagerie", icon: React.createElement(MailOutlined) },
        { key: "form5", label: "Activités", icon: React.createElement(KeyOutlined) },
      ],
    },
  ];