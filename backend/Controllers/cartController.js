import { Cart } from "../Models/cartModel.js";

export const addToCart = async (req, res) => {
  try {
    const user = req.user.id;
    const productId = req.body.productId;
    let cart = await Cart.findOne({ user });
    if (!cart) cart = new Cart({ user, products: [] });

    cart.products.push(productId);
    await cart.save();

    res.json(cart);
  } catch (err) {
    console.log("error while add to cart ", err.message);
    res.status(500).json({ message: err.message });
  }
};

export const getCart = async (req, res) => {
  try {
    const user = req.user.id;
    const cart = await Cart.findOne({ user }).populate("products");
    res.json(cart);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
