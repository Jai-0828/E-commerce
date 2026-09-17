import express from "express";
import Cart from "../models/Cart.js";
import { requireAuth } from "../middleware/authMiddleware.js";

const router = express.Router();
router.use(requireAuth); // every route below requires a valid JWT

// GET /api/cart — fetch the logged-in user's cart
router.get("/", async (req, res) => {
  const cart = await Cart.findOne({ userId: req.userId });
  res.json(cart || { userId: req.userId, items: [] });
});

// POST /api/cart — add an item (or bump quantity if it already exists)
router.post("/", async (req, res) => {
  const { productId, quantity = 1 } = req.body;
  if (!productId) return res.status(400).json({ message: "productId is required" });

  let cart = await Cart.findOne({ userId: req.userId });
  if (!cart) {
    cart = await Cart.create({ userId: req.userId, items: [{ productId, quantity }] });
    return res.status(201).json(cart);
  }

  const existingItem = cart.items.find((i) => i.productId === productId);
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.items.push({ productId, quantity });
  }

  await cart.save();
  res.json(cart);
});

// PUT /api/cart/:productId — set an exact quantity
router.put("/:productId", async (req, res) => {
  const { quantity } = req.body;
  const cart = await Cart.findOne({ userId: req.userId });
  if (!cart) return res.status(404).json({ message: "Cart not found" });

  const item = cart.items.find((i) => i.productId === req.params.productId);
  if (!item) return res.status(404).json({ message: "Item not in cart" });

  item.quantity = quantity;
  await cart.save();
  res.json(cart);
});

// DELETE /api/cart/:productId — remove an item
router.delete("/:productId", async (req, res) => {
  const cart = await Cart.findOne({ userId: req.userId });
  if (!cart) return res.status(404).json({ message: "Cart not found" });

  cart.items = cart.items.filter((i) => i.productId !== req.params.productId);
  await cart.save();
  res.json(cart);
});

export default router;
