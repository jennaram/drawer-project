import React, { useState } from "react";
import { Layout } from "antd";
import CustomDrawer from "./components/CustomDrawer";
import FormRenderer from "./components/FormRenderer";

// Import des schémas et UI schémas pour chaque catégorie
import { schema as schema1 } from "./forms/schema"; // Schéma pour "Profil enfant"
import { uischema as uischema1 } from "./forms/uischema"; // UI schema pour "Profil enfant"
import { schema as schema2 } from "./forms/schema2"; // Schéma pour "Photos"
import { uischema as uischema2 } from "./forms/uischema2"; // UI schema pour "Photos"
import { schema as schema3 } from "./forms/schema3"; // Schéma pour "Mes infos"
import { uischema as uischema3 } from "./forms/uischema3"; // UI schema pour "Mes infos"
import { schema as schema4 } from "./forms/schema4"; // Schéma pour "Messagerie"
import { uischema as uischema4 } from "./forms/uischema4"; // UI schema pour "Messagerie"
import { schema as schema5 } from "./forms/schema5"; // Schéma pour "Activités"
import { uischema as uischema5 } from "./forms/uischema5"; // UI schema pour "Activités"

const { Content } = Layout;

const App: React.FC = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [selectedForm, setSelectedForm] = useState<string>("recent"); // État pour le formulaire sélectionné

  const toggleDrawer = () => setDrawerVisible(!drawerVisible); // Fonction pour ouvrir/fermer le drawer

  // Configuration des formulaires
  const formConfigs: Record<string, { schema: any; uischema: any }> = {
    recent: { schema: schema1, uischema: uischema1 }, // Formulaire pour "Profil enfant"
    shared: { schema: schema2, uischema: uischema2 }, // Formulaire pour "Photos"
    trash: { schema: schema3, uischema: uischema3 }, // Formulaire pour "Mes infos"
    drive: { schema: schema4, uischema: uischema4 }, // Formulaire pour "Messagerie"
    external: { schema: schema5, uischema: uischema5 }, // Formulaire pour "Activités"
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Drawer latéral */}
      <CustomDrawer
        visible={drawerVisible}
        onClose={toggleDrawer} // Fermer le drawer
        selectedKey={selectedForm}
        onSelect={setSelectedForm} // Mettre à jour le formulaire sélectionné
        toggleDrawer={toggleDrawer} // Passer la fonction pour ouvrir/fermer le drawer
      />

      {/* Contenu principal */}
      <Layout>
        <Content
          style={{
            padding: "20px",
            marginLeft: drawerVisible ? "250px" : "0",
            transition: "margin-left 0.2s",
          }}
        >
          {/* Afficher le formulaire correspondant à la catégorie sélectionnée */}
          <FormRenderer {...formConfigs[selectedForm]} selectedKey={selectedForm} />
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;