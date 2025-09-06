import mongoose from "mongoose";    

const purchaseSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
  purchasedAt: { type: Date, default: Date.now }
}, { timestamps: true });

export const Purchase = mongoose.model("Purchase", purchaseSchema);
