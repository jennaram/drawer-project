import React, { useState } from "react";
import { Button, Menu } from "antd"; // Import correct pour Ant Design v5
import Layout from "antd/es/layout"; // Import spécifique pour Layout
import Drawer from "antd/es/drawer"; // Import spécifique pour Drawer
import FormRenderer from "./components/FormRenderer";
import { schema } from "./forms/schema";
import { uischema } from "./forms/uischema";
import { schema2 } from "./forms/schema2";
import { uischema2 } from "./forms/uischema2";

const { Content, Sider } = Layout;

const App: React.FC = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [selectedForm, setSelectedForm] = useState<string>("form1");

  const showDrawer = () => setDrawerVisible(true);
  const closeDrawer = () => setDrawerVisible(false);

  const formConfigs: Record<string, { schema: any; uischema: any }> = {
    form1: { schema: schema, uischema: uischema },
    form2: { schema: schema2, uischema: uischema2 },
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Button type="primary" onClick={showDrawer} style={{ margin: 16 }}>
        Ouvrir le menu
      </Button>

      <Drawer title="Menu" placement="left" onClose={closeDrawer} open={drawerVisible}>
        <Menu
          mode="inline"
          onClick={(e) => setSelectedForm(e.key.toString())}
          selectedKeys={[selectedForm]}
          items={[
            { key: "form1", label: "Formulaire 1" },
            { key: "form2", label: "Formulaire 2" },
          ]}
        />
      </Drawer>

      <Layout>
        <Sider width={200}>
          <Menu
            mode="inline"
            onClick={(e) => setSelectedForm(e.key.toString())}
            selectedKeys={[selectedForm]}
            items={[
              { key: "form1", label: "Formulaire 1" },
              { key: "form2", label: "Formulaire 2" },
            ]}
          />
        </Sider>

        <Content style={{ padding: "20px" }}>
          <FormRenderer {...formConfigs[selectedForm]} />
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;