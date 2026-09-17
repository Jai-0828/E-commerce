import mongoose from "mongoose";

const wishlistSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, unique: true },
    productIds: [{ type: String }], // just ids — full product details come from your product data source
  },
  { timestamps: true }
);

export default mongoose.model("Wishlist", wishlistSchema);
