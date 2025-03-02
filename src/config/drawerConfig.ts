// src/config/drawerConfig.ts
import React from "react"; // Import de React pour utiliser JSX
import { UserOutlined, LockOutlined, ProfileOutlined, MailOutlined, KeyOutlined } from "@ant-design/icons";

export const drawerConfig = [
  {
    title: "Ecole",
    items: [
      { key: "recent", label: "Profil enfant", icon: React.createElement(UserOutlined) },
      { key: "shared", label: "Photos", icon: React.createElement(LockOutlined) },
      { key: "trash", label: "Mes infos", icon: React.createElement(ProfileOutlined) },
    ],
  },
  {
    title: "Ma classe",
    items: [
      { key: "drive", label: "Messagerie", icon: React.createElement(MailOutlined) },
      { key: "external", label: "Activités", icon: React.createElement(KeyOutlined) },
    ],
  },
];