import React from "react";
import { Card, List, Typography, Image } from "antd";

const { Title, Paragraph } = Typography;

const NewsPage: React.FC = () => {
  const news = [
    {
      title: "Sortie scolaire au zoo",
      content: "Les élèves de la maternelle ont découvert les animaux du zoo ce jeudi ! Une belle expérience enrichissante.",
      image: "/zoo.jpg",
    },
    {
      title: "Journée des parents",
      content: "Nous avons organisé une journée spéciale où les parents ont pu participer aux activités en classe.",
      image: "/eleves.jpg",
    },
    {
      title: "Atelier peinture en primaire",
      content: "Les élèves du primaire ont exploré leur créativité avec un atelier peinture coloré et amusant.",
      image: "/peinture.jpg",
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <Title level={2} style={{ textAlign: "center" }}>Actualités de l'école</Title>
      <List
        grid={{ gutter: 16, column: 3 }}
        dataSource={news}
        renderItem={(item) => (
          <List.Item>
            <Card hoverable cover={<Image src={item.image} alt={item.title} style={{ height: "200px", objectFit: "cover" }} />}>
              <Title level={4}>{item.title}</Title>
              <Paragraph>{item.content}</Paragraph>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default NewsPage;
