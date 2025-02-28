// src/components/CustomDrawer.tsx
import React from "react";
import { Drawer, Menu, Button } from "antd";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { drawerConfig } from "../config/drawerConfig"; // Import de la configuration du drawer

interface CustomDrawerProps {
  visible: boolean; // Visibilité du drawer
  onClose: () => void; // Fonction pour fermer le drawer
  selectedKey: string; // Clé sélectionnée dans le menu
  onSelect: (key: string) => void; // Fonction pour gérer la sélection d'un élément du menu
  toggleDrawer: () => void; // Fonction pour ouvrir/fermer le drawer
}

const CustomDrawer: React.FC<CustomDrawerProps> = ({
  visible,
  onClose,
  selectedKey,
  onSelect,
  toggleDrawer,
}) => {
  return (
    <>
      {/* Icône flèche pour ouvrir/fermer le drawer */}
      <Button
        type="text"
        icon={visible ? <ArrowLeftOutlined style={{ fontSize: "24px" }} /> : <ArrowRightOutlined style={{ fontSize: "24px" }} />}
        onClick={toggleDrawer}
        style={{
          position: "fixed",
          left: visible ? 250 : 0,
          top: "50%",
          zIndex: 1000,
          transform: "translateY(-50%)",
          transition: "left 0.2s",
          width: "48px", // Largeur du bouton
          height: "48px", // Hauteur du bouton
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f0f0f0", // Couleur de fond du bouton
          borderRadius: "50%", // Rendre le bouton circulaire
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)", // Ajouter une ombre
        }}
      />

      {/* Drawer */}
      <Drawer
        title="Menu"
        placement="left"
        onClose={onClose}
        open={visible}
        closable={false} // Désactiver le bouton de fermeture par défaut
        width={250} // Largeur du drawer
      >
        {drawerConfig.map((section, index) => (
          <div key={index}>
            <div style={{ padding: "16px 24px", fontWeight: "bold" }}>
              {section.title}
            </div>
            <Menu
              mode="inline"
              selectedKeys={[selectedKey]}
              onClick={({ key }) => onSelect(key.toString())} // Transmettre la clé sélectionnée
              items={section.items}
            />
          </div>
        ))}
      </Drawer>
    </>
  );
};

export default CustomDrawer;