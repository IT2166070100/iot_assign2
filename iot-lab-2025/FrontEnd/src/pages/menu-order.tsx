import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Card, Button, Textarea, NumberInput } from "@mantine/core";
import Layout from "../components/layout";
import axios from "axios";

export default function OrderCoffeePage() {
  const { menuId } = useParams();
  const navigate = useNavigate();
  const [amount, setAmount] = useState(1);
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const handleOrder = async () => {
    setLoading(true);
    await axios.post("/menu/order", {
      menuId: Number(menuId),
      amount,
      description,
    });
    setLoading(false);
    navigate("/orders");
  };

  return (
    <Layout>
      <Container className="mt-8" size="xs">
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <h1 className="text-xl mb-4">สั่งกาแฟ</h1>
          <NumberInput
            label="จำนวนแก้ว"
            min={1}
            value={amount}
            onChange={v => setAmount(Number(v))}
            required
          />
          <Textarea
            label="รายละเอียดเพิ่มเติม"
            placeholder="เช่น หวานน้อย ไม่ใส่นม ฯลฯ"
            value={description}
            onChange={e => setDescription(e.currentTarget.value)}
            required
            minRows={3}
            className="mt-4"
          />
          <Button
            fullWidth
            color="blue"
            className="mt-4"
            loading={loading}
            onClick={handleOrder}
          >
            ยืนยันการสั่งกาแฟ
          </Button>
        </Card>

      </Container>
    </Layout>
  );
}
