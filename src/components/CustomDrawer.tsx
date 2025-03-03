import React, { useState } from "react";
import { Drawer, Menu, Button, Typography } from "antd";
import { ArrowLeftOutlined, ArrowRightOutlined, LoginOutlined, LogoutOutlined, HomeOutlined } from "@ant-design/icons";
import { drawerConfig } from "../config/drawerConfig";

const { Text } = Typography;

interface CustomDrawerProps {
  visible: boolean;
  onClose: () => void;
  selectedKey: string;
  onSelect: (key: string | null) => void; //  Accepte null pour afficher NewsPage
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
          backgroundColor: "#83c5be",
          borderRadius: "50%",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
          border: "none",
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
            backgroundColor: "#83c5be",
            borderColor: "#83c5be",
            color: "#fff",
            fontWeight: "bold",
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

        {/* Lien Accueil */}
        <Menu
          mode="inline"
          selectedKeys={[selectedKey]}
          onClick={({ key }) => {
            onSelect(key === "home" ? null : key); // "home" -> NewsPage
            onClose(); //  Ferme le drawer après sélection
          }}
          items={[
            {
              key: "home",
              icon: <HomeOutlined />,
              label: "Accueil",
            },
            ...drawerConfig.flatMap((section) =>
              section.items.map((item) => ({ ...item }))
            ),
          ]}
        />
      </Drawer>
    </>
  );
};

export default CustomDrawer;
