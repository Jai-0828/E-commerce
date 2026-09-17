import express from "express";
import Wishlist from "../models/Wishlist.js";
import { requireAuth } from "../middleware/authMiddleware.js";

const router = express.Router();
router.use(requireAuth);

// GET /api/wishlist
router.get("/", async (req, res) => {
  const wishlist = await Wishlist.findOne({ userId: req.userId });
  res.json(wishlist || { userId: req.userId, productIds: [] });
});

// POST /api/wishlist/toggle — add if absent, remove if present
router.post("/toggle", async (req, res) => {
  const { productId } = req.body;
  if (!productId) return res.status(400).json({ message: "productId is required" });

  let wishlist = await Wishlist.findOne({ userId: req.userId });
  if (!wishlist) {
    wishlist = await Wishlist.create({ userId: req.userId, productIds: [productId] });
    return res.status(201).json(wishlist);
  }

  const idx = wishlist.productIds.indexOf(productId);
  if (idx === -1) {
    wishlist.productIds.push(productId);
  } else {
    wishlist.productIds.splice(idx, 1);
  }

  await wishlist.save();
  res.json(wishlist);
});

export default router;
