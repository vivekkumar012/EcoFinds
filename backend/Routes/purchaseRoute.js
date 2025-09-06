import express from "express"
import  auth from "../Middlewares/auth.js"
const router = express.Router();

import{ checkout, getPurchases } from "../Controllers/purchaseController.js"

router.post("/checkout", auth, checkout);
router.get("/", auth, getPurchases);

export default router ;
