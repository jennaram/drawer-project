// src/App.tsx
import React, { useState } from "react";
import { Button, Layout } from "antd";
import CustomDrawer from "./components/CustomDrawer";
import FormRenderer from "./components/FormRenderer";
import { schema } from "./forms/schema"; // Premier set de données
import { uischema } from "./forms/uischema"; // Premier set de données
import { schema2 } from "./forms/schema2"; // Deuxième set de données
import { uischema2 } from "./forms/uischema2"; // Deuxième set de données

const { Content } = Layout;

const App: React.FC = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [selectedForm, setSelectedForm] = useState<string>("form1");

  const showDrawer = () => setDrawerVisible(true);
  const closeDrawer = () => setDrawerVisible(false);

  // Configuration des formulaires
  const formConfigs: Record<string, { schema: any; uischema: any }> = {
    form1: { schema: schema, uischema: uischema }, // Formulaire 1
    form2: { schema: schema, uischema: uischema }, // Formulaire 2 (même schéma que form1)
    form3: { schema: schema, uischema: uischema }, // Formulaire 3 (même schéma que form1)
    form4: { schema: schema2, uischema: uischema2 }, // Formulaire 4
    form5: { schema: schema2, uischema: uischema2 }, // Formulaire 5 (même schéma que form4)
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Button type="primary" onClick={showDrawer} style={{ margin: 16 }}>
        Ouvrir le menu
      </Button>

      <CustomDrawer
        visible={drawerVisible}
        onClose={closeDrawer}
        selectedKey={selectedForm}
        onSelect={setSelectedForm}
      />

      <Layout>
        <Content style={{ padding: "20px" }}>
          <FormRenderer {...formConfigs[selectedForm]} />
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;