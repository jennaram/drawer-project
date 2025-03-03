import React, { useState } from "react";
import { Drawer, Menu, Button, Typography } from "antd";
import { ArrowLeftOutlined, ArrowRightOutlined, LoginOutlined, LogoutOutlined } from "@ant-design/icons";
import { drawerConfig } from "../config/drawerConfig";

const { Text } = Typography;

interface CustomDrawerProps {
  visible: boolean;
  onClose: () => void;
  selectedKey: string;
  onSelect: (key: string) => void;
  toggleDrawer: () => void;
}

const CustomDrawer: React.FC<CustomDrawerProps> = ({
  visible,
  onClose,
  selectedKey,
  onSelect,
  toggleDrawer,
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // État pour gérer la connexion

  // Fonction pour gérer la connexion/déconnexion
  const handleLoginLogout = () => {
    setIsLoggedIn((prev) => !prev);
  };

  return (
    <>
      {/* Icône flèche pour ouvrir/fermer le drawer */}
      <Button
        type="text"
        icon={visible ? <ArrowLeftOutlined style={{ fontSize: "24px", color: "#fff" }} /> : <ArrowRightOutlined style={{ fontSize: "24px", color: "#fff" }} />}
        onClick={toggleDrawer}
        style={{
          position: "fixed",
          left: visible ? 250 : 0,
          top: "50%",
          zIndex: 1000,
          transform: "translateY(-50%)",
          transition: "left 0.2s",
          width: "48px",
          height: "48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#83c5be", // Couleur de fond du bouton
          borderRadius: "50%",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
          border: "none", // Supprimer la bordure par défaut
        }}
      />

      {/* Drawer */}
      <Drawer
        title="Menu"
        placement="left"
        onClose={onClose}
        open={visible}
        closable={false}
        width={250}
      >
        {/* Bouton Connexion/Déconnexion */}
        <Button
          type="primary"
          icon={isLoggedIn ? <LogoutOutlined /> : <LoginOutlined />}
          onClick={handleLoginLogout}
          style={{
            marginBottom: "16px",
            width: "100%",
            backgroundColor: "#83c5be", // Couleur de fond du bouton
            borderColor: "#83c5be", // Couleur de la bordure
            color: "#fff", // Couleur du texte
            fontWeight: "bold", // Texte en gras
          }}
        >
          {isLoggedIn ? "Déconnexion" : "Connexion"}
        </Button>

        {/* Afficher le nom du profil si connecté */}
        {isLoggedIn && (
          <div style={{ marginBottom: "16px", padding: "0 16px" }}>
            <Text strong>Profil</Text>
            <div style={{ marginTop: "8px" }}>
              <Text>Ethan B.</Text>
            </div>
          </div>
        )}

        {/* Menu des catégories */}
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
    </>
  );
};

export default CustomDrawer;