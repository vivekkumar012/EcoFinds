// ProductDetailPage.jsx
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ShoppingCart, ArrowLeft, Heart } from "lucide-react";

export default function ProductDetailPage() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const product = state?.product;
  const [cartCount, setCartCount] = useState(0);
  const [liked, setLiked] = useState(false);

  if (!product) {
    return (
      <div className="text-center p-6">
        <p className="text-lg">Product not found.</p>
        <button
          onClick={() => navigate(-1)}
          className="underline text-green-600 hover:text-green-700 mt-3"
        >
          Go Back
        </button>
      </div>
    );
  }

  const addToCart = () => setCartCount(cartCount + 1);

  return (
    <div className="bg-gradient-to-b from-green-100 via-green-200 to-green-300 min-h-screen text-gray-900">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-green-800 text-white shadow-md">
        <button
          onClick={() => navigate(-1)}
          className="text-green-200 hover:text-white"
        >
          <ArrowLeft size={22} />
        </button>
        <h1 className="text-lg font-semibold tracking-wide">🌿 EcoFinds</h1>
        <div className="flex items-center gap-4">
          {/* Cart */}
          <div className="relative cursor-pointer">
            <ShoppingCart
              onClick={() => navigate("/cartPage")}
              size={22}
              className="text-green-200 hover:text-white"
            />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </div>
          {/* Avatar Placeholder */}
          <div className="w-9 h-9 border-2 border-green-300 rounded-full bg-green-100"></div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-10">
        {/* Product Image */}
        <div className="bg-white border border-green-300 rounded-2xl flex items-center justify-center overflow-hidden shadow-lg">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-green-900">
              {product.title}
            </h2>
            <p className="text-gray-700 mb-6">
              {product.description || "No description available."}
            </p>

            <div className="space-y-2 text-sm text-green-900">
              <p>
                Category: <b>{product.category}</b>
              </p>
              <p>
                Price: <b>${product.price}</b>
              </p>
              <p>
                Views: {product.views} | Likes: {product.likes}
              </p>
              <p>Posted: {product.datePosted}</p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4 mt-8">
            <button
              onClick={addToCart}
              className="flex-1 bg-green-600 text-white font-medium rounded-full px-6 py-3 hover:bg-green-700 shadow-md transition-all transform hover:scale-105"
            >
              Add to Cart
            </button>
            <button
              onClick={() => setLiked(!liked)}
              className={`p-3 rounded-full border transition-all shadow-md ${
                liked
                  ? "bg-red-500 border-red-600"
                  : "border-green-400 bg-white hover:bg-green-100"
              }`}
            >
              <Heart
                size={20}
                className={liked ? "fill-white text-white" : "text-green-700"}
              />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
