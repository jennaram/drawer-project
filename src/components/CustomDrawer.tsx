// src/components/CustomDrawer.tsx
import React from "react";
import { Drawer, Menu, Button } from "antd"; // Import de Button
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { drawerConfig } from "../config/drawerConfig"; // Import de la configuration du drawer

interface CustomDrawerProps {
  visible: boolean; // Visibilité du drawer
  onClose: () => void; // Fonction pour fermer le drawer
  selectedKey: string; // Clé sélectionnée dans le menu
  onSelect: (key: string) => void; // Fonction pour gérer la sélection d'un élément du menu
}

const CustomDrawer: React.FC<CustomDrawerProps> = ({
  visible,
  onClose,
  selectedKey,
  onSelect,
}) => {
  return (
    <Drawer
      title={
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span>Menu</span>
          <Button
            type="text"
            icon={visible ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
            onClick={onClose}
            style={{ marginRight: -16 }}
          />
        </div>
      }
      placement="left"
      onClose={onClose}
      open={visible}
      closable={false} // Désactiver le bouton de fermeture par défaut
    >
      {drawerConfig.map((section, index) => (
        <div key={index}>
          <div style={{ padding: "16px 24px", fontWeight: "bold" }}>
            {section.title}
          </div>
          <Menu
            mode="inline"
            selectedKeys={[selectedKey]}
            onClick={({ key }) => onSelect(key.toString())}
            items={section.items}
          />
        </div>
      ))}
    </Drawer>
  );
};

export default CustomDrawer;