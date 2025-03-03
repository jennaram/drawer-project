import React from "react";
import { UserOutlined, LockOutlined, ProfileOutlined, MailOutlined, KeyOutlined } from "@ant-design/icons";
import { Typography, Card, List } from "antd";

const { Title, Text } = Typography;

interface FormRendererProps {
  schema: any;
  uischema: any;
  selectedKey: string;
}

const FormRenderer: React.FC<FormRendererProps> = ({ schema, uischema, selectedKey }) => {
  // Définissez un titre et une icône en fonction de la clé sélectionnée
  const formTitles: Record<string, { title: string; icon: React.ReactNode }> = {
    recent: { title: "Profil enfant", icon: <UserOutlined /> },
    shared: { title: "Photos", icon: <LockOutlined /> },
    trash: { title: "Mes infos", icon: <ProfileOutlined /> },
    drive: { title: "Messagerie", icon: <MailOutlined /> },
    external: { title: "Activités", icon: <KeyOutlined /> },
  };

  const { title, icon } = formTitles[selectedKey] || { title: "Contenu", icon: null };

  // Données factices pour la liste des photos
  const photos = [
    { id: 1, name: "Photo de l'élève", url: "/photo_eleve.png" },
  ];

  // Contenu dynamique en fonction de la clé sélectionnée
  const renderContent = () => {
    switch (selectedKey) {
      case "recent":
        return (
          <div>
            <Text strong>Informations du profil</Text>
            <div style={{ marginTop: "8px" }}>
              <Text>Demi-pensionnaire: Oui</Text>
              <br />
              <Text>Garderie du soir: Oui</Text>
              <br />
              <Text>Classe: Moyenne section</Text>
            </div>
          </div>
        );
      case "shared":
        return (
          <List
            dataSource={photos}
            renderItem={(photo) => (
              <List.Item>
                <img src={photo.url} alt={photo.name} style={{ width: "100px", height: "100px" }} />
                <Text>{photo.name}</Text>
              </List.Item>
            )}
          />
        );
      case "trash":
        return (
          <div>
            <Text strong>Informations personnelles</Text>
            <div style={{ marginTop: "8px" }}>
              <Text>Date de naissance: 27 mai 2020</Text>
              <br />
              <Text>Nom du père: Yannis B.</Text>
              <br />
              <Text>Téléphone du père: +33 6 12 34 56 78</Text>
              <br />
              <Text>Email du père: yannis.b@example.com</Text>
              <br />
              <Text>Nom de la mère: Jenna B.</Text>
              <br />
              <Text>Téléphone de la mère: +33 6 87 65 43 21</Text>
              <br />
              <Text>Email de la mère: jenna.b@example.com</Text>
              <br />
              <Text>Adresse: 12 Rue de l'École, 75001 Paris</Text>
            </div>
          </div>
        );
      case "drive":
        return (
          <div>
            <Text strong>Messagerie</Text>
            <div style={{ marginTop: "8px" }}>
              <Text>Aucun nouveau message.</Text>
            </div>
          </div>
        );
      case "external":
        return (
          <div>
            <Text strong>Activités</Text>
            <div style={{ marginTop: "8px" }}>
              <Text>Aucune activité prévue.</Text>
            </div>
          </div>
        );
      default:
        return <Text>Aucun contenu à afficher.</Text>;
    }
  };

  return (
    <Card
      title={
        <Title level={3} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          {icon} {title}
        </Title>
      }
      style={{
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        marginBottom: "24px",
      }}
    >
      {renderContent()}
    </Card>
  );
};

export default FormRenderer;