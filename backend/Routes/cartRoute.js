import express from "express"
import  auth from "../Middlewares/auth.js"
const router = express.Router();

import { addToCart, getCart } from "../Controllers/cartController.js"

router.post("/add", auth, addToCart);
router.get("/", auth, getCart);

export default router ;
