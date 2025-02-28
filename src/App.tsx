// src/App.tsx
import React, { useState } from "react";
import { Layout } from "antd";
import CustomDrawer from "./components/CustomDrawer";
import FormRenderer from "./components/FormRenderer";
import { schema } from "./forms/schema"; // Schéma pour les fichiers récents
import { uischema } from "./forms/uischema"; // UI schema pour les fichiers récents
import { schema2 } from "./forms/schema2"; // Schéma pour les fichiers partagés
import { uischema2 } from "./forms/uischema2"; // UI schema pour les fichiers partagés

const { Content } = Layout;

const App: React.FC = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [selectedForm, setSelectedForm] = useState<string>("recent"); // État pour le formulaire sélectionné

  const toggleDrawer = () => setDrawerVisible(!drawerVisible); // Fonction pour ouvrir/fermer le drawer

  // Configuration des formulaires
  const formConfigs: Record<string, { schema: any; uischema: any }> = {
    recent: { schema: schema, uischema: uischema }, // Formulaire pour les fichiers récents
    shared: { schema: schema2, uischema: uischema2 }, // Formulaire pour les fichiers partagés
    trash: { schema: schema, uischema: uischema }, // Formulaire pour la corbeille (exemple)
    drive: { schema: schema, uischema: uischema }, // Formulaire pour Mon Drive (exemple)
    external: { schema: schema2, uischema: uischema2 }, // Formulaire pour les partages externes (exemple)
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <CustomDrawer
        visible={drawerVisible}
        onClose={toggleDrawer} // Fermer le drawer
        selectedKey={selectedForm}
        onSelect={setSelectedForm} // Mettre à jour le formulaire sélectionné
        toggleDrawer={toggleDrawer} // Passer la fonction pour ouvrir/fermer le drawer
      />

      <Layout>
        <Content style={{ padding: "20px", marginLeft: drawerVisible ? "250px" : "0", transition: "margin-left 0.2s" }}>
          {/* Afficher le formulaire correspondant à la catégorie sélectionnée */}
          <FormRenderer {...formConfigs[selectedForm]} />
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;