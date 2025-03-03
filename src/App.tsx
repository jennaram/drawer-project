import React, { useState } from "react";
import { Layout, Image } from "antd"; // Importez Image depuis Ant Design
import CustomDrawer from "./components/CustomDrawer";
import FormRenderer from "./components/FormRenderer";
import NewsPage from "./components/NewsPage";

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

const { Header, Content, Footer } = Layout;

const App: React.FC = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [selectedForm, setSelectedForm] = useState<string | null>(null); // ✅ Met par défaut à null

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
      {/* Header avec le logo */}
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center", // Centrer horizontalement
          backgroundColor: "#83c5be", // Couleur de fond
          padding: "0 24px", // Espacement horizontal
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)", // Ombre légère
          height: "200px", // Hauteur du header (augmentée pour s'adapter au logo)
        }}
      >
        {/* Logo */}
        <Image
          src="/logo_schoolconnect.png" // Chemin vers le logo dans le dossier public
          alt="Logo SchoolConnect"
          preview={false} // Désactiver la prévisualisation
          style={{ width: "192px", height: "192px" }} // Taille du logo (3 fois plus gros)
        />
      </Header>

      {/* Drawer latéral */}
      <CustomDrawer visible={drawerVisible} onClose={toggleDrawer} selectedKey={selectedForm ?? ""} onSelect={setSelectedForm} toggleDrawer={toggleDrawer} />

      {/* Contenu principal */}
      <Layout>
        <Content style={{ padding: "20px", marginLeft: drawerVisible ? "250px" : "0", transition: "margin-left 0.2s" }}>
          {selectedForm ? (
            <FormRenderer {...formConfigs[selectedForm]} selectedKey={selectedForm} />
          ) : (
            <NewsPage /> // ✅ Affiche la page d'actualités si aucun formulaire n'est sélectionné
          )}
        </Content>
      </Layout>

      {/* Footer */}
      <Footer
        style={{
          textAlign: "center",
          backgroundColor: "#83c5be", // Même couleur que le header
          padding: "10px 0", // Espacement vertical
          color: "#fff", // Couleur du texte
        }}
      >
        <div>© Tous droits réservés 2025 </div>
        <a
          href="https://www.linkedin.com/in/jennabenufferamia/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
  src="/linkedin-logo.svg"
  alt="LinkedIn"
  preview={false}
  style={{ width: "24px", height: "24px", marginTop: "5px" }}
/>

        </a>
      </Footer>
    </Layout>
  );
};

export default App;