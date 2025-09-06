import express from "express"

import  auth from "../Middlewares/auth.js"
const router = express.Router();

import { addProduct, getProducts, getProductById, updateProduct, deleteProduct } from "../Controllers/productController.js"
router.post("/add-product", auth, addProduct);
router.get("/", getProducts);
router.get("/:id", getProductById);
router.put("/:id", auth, updateProduct);
router.delete("/:id", auth, deleteProduct);

export default router ;
