// id category price title description

import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  category: { 
    type: String, 
    required: true, 
    enum: [
      "Electronics", 
      "Fashion", 
      "Books", 
      "Home & Furniture", 
      "Sports & Fitness", 
      "Toys & Games", 
      "Automotive", 
      "Beauty & Personal Care", 
      "Musical Instruments", 
      "Others"
    ] 
  },
  price: { type: Number, required: true },
  image: { type: String, default: "placeholder.png" },
  seller: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

export const Product = new mongoose.model("Product", productSchema);
