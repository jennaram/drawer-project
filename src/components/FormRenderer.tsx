import React from "react";
import { JsonForms } from "@jsonforms/react";
import { materialRenderers } from "@jsonforms/material-renderers";
import { UserOutlined, LockOutlined, ProfileOutlined, MailOutlined, KeyOutlined } from "@ant-design/icons";
import { Typography, Card } from "antd"; // Importez Card pour un conteneur stylisé

const { Title } = Typography;

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

  const { title, icon } = formTitles[selectedKey] || { title: "Formulaire", icon: null };

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
      <JsonForms
        schema={schema}
        uischema={uischema}
        data={{}}
        renderers={materialRenderers}
      />
    </Card>
  );
};

export default FormRenderer;