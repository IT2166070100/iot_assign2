import { useEffect, useState } from "react";
import { Container, Card, Button, Group, Image, Text } from "@mantine/core";
import Layout from "../components/layout";
import { Link } from "react-router-dom";
import axios from "axios";

interface CoffeeMenu {
  id: number;
  name: string;
  image: string;
  description: string;
  price: string;
}

export default function MenuPage() {
  const [menus, setMenus] = useState<CoffeeMenu[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("/menu").then((res) => {
      setMenus(res.data);
      setLoading(false);
    });
  }, []);

  return (
    <Layout>
      <Container className="mt-8">
        <h1 className="text-xl mb-4">เมนูกาแฟ</h1>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <Group>
            {menus.map((menu) => (
              <Card key={menu.id} shadow="sm" padding="lg" radius="md" withBorder style={{ width: 250 }}>
                <Card.Section>
                  <Image src={menu.image} height={160} alt={menu.name} />
                </Card.Section>
                <Text fw={500} size="lg" mt="md">{menu.name}</Text>
                <Text size="sm" color="dimmed" mt={4}>{menu.description}</Text>
                <Text size="md" color="teal" mt={4}>฿{menu.price}</Text>
                <Button
                  component={Link}
                  to={`/menu/${menu.id}/order`}
                  fullWidth
                  mt="md"
                  color="blue"
                >
                  สั่งกาแฟ
                </Button>
              </Card>
            ))}
          </Group>
        )}
      </Container>
    </Layout>
  );
}
