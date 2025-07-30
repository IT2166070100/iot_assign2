import { drizzle } from "drizzle-orm/pg";
import { coffeeMenus } from "./api/db/schema.js";
import { Client } from "pg";

// Mock coffee menu data
const mockMenus = [
  {
    name: "Espresso",
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=400&q=80",
    description: "กาแฟเอสเปรสโซ่เข้มข้น รสชาติดั้งเดิม",
    price: "45",
  },
  {
    name: "Americano",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
    description: "กาแฟดำรสละมุน ดื่มง่าย สดชื่น",
    price: "50",
  },
  {
    name: "Cappuccino",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
    description: "กาแฟนมฟองนุ่ม หอมละมุน",
    price: "55",
  },
  {
    name: "Latte",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=400&q=80",
    description: "ลาเต้รสนุ่มนวล ผสมผสานกาแฟกับนมสด",
    price: "55",
  },
  {
    name: "Mocha",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    description: "กาแฟผสมช็อกโกแลต รสหวานมัน",
    price: "60",
  },
];

async function seed() {
  const client = new Client({ connectionString: process.env.POSTGRES_URL });
  await client.connect();
  const db = drizzle(client, { schema: { coffeeMenus } });
  for (const menu of mockMenus) {
    await db.insert(coffeeMenus).values(menu);
  }
  await client.end();
  console.log("Mock coffee menu data inserted.");
}

seed();
