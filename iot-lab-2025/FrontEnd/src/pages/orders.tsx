import { useEffect, useState } from "react";
import { Container, Card, Group, Text, Badge } from "@mantine/core";
import Layout from "../components/layout";
import axios from "axios";

interface CoffeeOrder {
  id: number;
  menuId: number;
  amount: number;
  description: string;
  status: string;
  createdAt: string;
}

export default function OrdersPage() {
  const [orders, setOrders] = useState<CoffeeOrder[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("/menu/orders").then((res) => {
      setOrders(res.data);
      setLoading(false);
    });
  }, []);

  return (
    <Layout>
      <Container className="mt-8">
        <h1 className="text-xl mb-4">รายการสั่งกาแฟ</h1>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <Group direction="column" spacing="md">
            {orders.map((order) => (
              <Card key={order.id} shadow="sm" padding="md" radius="md" withBorder>
                <Text>รหัสออเดอร์: {order.id}</Text>
                <Text>รหัสเมนู: {order.menuId}</Text>
                <Text>จำนวน: {order.amount}</Text>
                <Text>รายละเอียด: {order.description}</Text>
                <Badge color={order.status === 'pending' ? 'yellow' : 'green'}>{order.status}</Badge>
                <Text size="xs" color="dimmed">{order.createdAt}</Text>
              </Card>
            ))}
          </Group>
        )}
      </Container>
    </Layout>
  );
}
