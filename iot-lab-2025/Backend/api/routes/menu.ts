import { Hono } from "hono";
import drizzle from "../db/drizzle.js";
import { coffeeMenus, coffeeOrders } from "../db/schema.js";
import { eq } from "drizzle-orm";
import { z } from "zod";
import { zValidator } from "@hono/zod-validator";

const menuRouter = new Hono();

// Get all coffee menu items
menuRouter.get("/", async (c) => {
  const menus = await drizzle.select().from(coffeeMenus);
  return c.json(menus);
});

// Create a coffee menu item (for admin, not exposed in UI yet)
menuRouter.post(
  "/",
  zValidator(
    "json",
    z.object({
      name: z.string().min(1),
      image: z.string().min(1),
      description: z.string().min(1),
      price: z.number().positive(),
    })
  ),
  async (c) => {
    const { name, image, description, price } = c.req.valid("json");
    // drizzle numeric expects string, so convert price to string
    const result = await drizzle.insert(coffeeMenus).values({ name, image, description, price: price.toString() }).returning();
    return c.json({ success: true, menu: result[0] }, 201);
  }
);

// Get all coffee orders
menuRouter.get("/orders", async (c) => {
  const orders = await drizzle.select().from(coffeeOrders);
  return c.json(orders);
});

// Create a coffee order
menuRouter.post(
  "/order",
  zValidator(
    "json",
    z.object({
      menuId: z.number().int(),
      amount: z.number().int().min(1),
      description: z.string().min(1),
    })
  ),
  async (c) => {
    const { menuId, amount, description } = c.req.valid("json");
    const result = await drizzle.insert(coffeeOrders).values({ menuId, amount, description }).returning();
    return c.json({ success: true, order: result[0] }, 201);
  }
);

export default menuRouter;
