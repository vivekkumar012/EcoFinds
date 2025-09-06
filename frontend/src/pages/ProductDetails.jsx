// ProductDetailPage.jsx
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ShoppingCart, ArrowLeft } from "lucide-react";

export default function ProductDetailPage() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const product = state?.product; 
  const [currentImage, setCurrentImage] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  if (!product) {
    return (
      <div className="text-center p-6">
        <p>Product not found.</p>
        <button onClick={() => navigate(-1)} className="underline">
          Go Back
        </button>
      </div>
    );
  }

  const addToCart = () => setCartCount(cartCount + 1);

  return (
    <div className="bg-black text-white min-h-screen p-4">
      <div className="max-w-sm mx-auto border-2 border-gray-500 rounded-3xl p-6 bg-gray-900">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <button onClick={() => navigate(-1)} className="text-gray-400 hover:text-white">
            <ArrowLeft size={20} />
          </button>
          <div className="text-lg font-medium">EcoFinds</div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="bg-red-500 w-8 h-6 rounded flex items-center justify-center">
                <ShoppingCart size={16} />
              </div>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-500 text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>
            <div className="w-9 h-9 border-2 border-gray-500 rounded-full"></div>
          </div>
        </div>

        {/* Product Title */}
        <div className="bg-gray-700 border border-gray-500 rounded-full py-3 text-center mb-6">
          {product.title}
        </div>

        {/* Product Image */}
        <div className="bg-gray-800 border border-gray-500 rounded-2xl h-72 flex items-center justify-center mb-4">
          <img
            src={product.image}
            alt={product.title}
            className="h-full object-cover rounded-2xl"
          />
        </div>

        {/* Product Description */}
        <div className="bg-gray-800 border border-gray-500 rounded-2xl p-5 mb-6">
          <h3 className="text-base font-medium mb-3">Product Details</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Category: <b>{product.category}</b> <br />
            Price: <b>${product.price}</b> <br />
            Status: <b>{product.status}</b> <br />
            Views: {product.views} | Likes: {product.likes} <br />
            Posted: {product.datePosted}
          </p>
        </div>

        {/* Add to Cart Button */}
        <div className="flex justify-center">
          <button 
            onClick={addToCart}
            className="border border-gray-500 rounded-full px-8 py-3 text-white hover:bg-gray-800 hover:border-gray-400 transition-all transform hover:scale-105"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
