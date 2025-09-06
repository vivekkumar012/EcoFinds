import { Purchase } from "../Models/purchaseModel.js";

import { Cart } from "../Models/cartModel.js";


export const checkout = async (req, res) => {
  try {
    const user = req.user.id ; 
    const cart = await Cart.findOne({ user });
    if (!cart || cart.products.length === 0) {
      return res.status(400).json({ message: "Cart is empty" });
    }

    const purchase = new Purchase({
      user,
      products: cart.products
    });

    await purchase.save();
    cart.products = [];
    await cart.save();

    res.json({ message: "Checkout successful", purchase });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getPurchases = async (req, res) => {
  try {
    const purchases = await Purchase.find({ user: req.user.id }).populate("products");
    res.json(purchases);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
