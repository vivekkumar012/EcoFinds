import React, { useState } from "react";
import {
  Search,
  ShoppingBag,
  Recycle,
  Users,
  Star,
  ArrowRight,
  Heart,
  Filter,
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const HomePage = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);

  // Mock data for featured products
  const featuredProducts = [
    {
      id: 1,
      title: "Vintage Leather Jacket",
      price: 45,
      originalPrice: 120,
      image:
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300&h=300&fit=crop",
      category: "Fashion",
      seller: "Sarah M.",
      rating: 4.8,
      saved: 89,
    },
    {
      id: 2,
      title: "MacBook Pro 2019",
      price: 899,
      originalPrice: 1299,
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=300&fit=crop",
      category: "Electronics",
      seller: "Tech Mike",
      rating: 4.9,
      saved: 156,
    },
    {
      id: 3,
      title: "Scandinavian Chair",
      price: 85,
      originalPrice: 180,
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=300&fit=crop",
      category: "Furniture",
      seller: "Home Decor Co.",
      rating: 4.7,
      saved: 67,
    },
    {
      id: 4,
      title: "Canon DSLR Camera",
      price: 320,
      originalPrice: 599,
      image:
        "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=300&h=300&fit=crop",
      category: "Electronics",
      seller: "Photography Pro",
      rating: 4.9,
      saved: 234,
    },
  ];

  const categories = [
    { name: "Electronics", icon: "📱", count: "2.1k items" },
    { name: "Fashion", icon: "👕", count: "5.3k items" },
    { name: "Furniture", icon: "🪑", count: "1.8k items" },
    { name: "Books", icon: "📚", count: "3.2k items" },
    { name: "Sports", icon: "⚽", count: "987 items" },
    { name: "Home & Garden", icon: "🏠", count: "1.5k items" },
  ];

  const stats = [
    { number: "50K+", label: "Happy Users", icon: Users },
    { number: "200K+", label: "Items Sold", icon: ShoppingBag },
    { number: "2M kg", label: "Waste Reduced", icon: Recycle },
    { number: "4.9/5", label: "User Rating", icon: Star },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-400 via-green-500 to-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Discover Treasures,
            <br />
            <span className="text-green-100">Save the Planet</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-green-100 max-w-3xl mx-auto">
            Join thousands of conscious consumers buying and selling pre-owned
            goods. Every purchase helps reduce waste and supports sustainable
            living.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-white text-green-600 rounded-lg font-semibold hover:bg-gray-50 transition-colors shadow-lg hover:shadow-xl flex items-center space-x-2">
              <span>Start Shopping</span>
              <ArrowRight size={20} />
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
              List Your Items
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <stat.icon size={32} className="text-green-600" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Shop by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-gray-100"
              >
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-500">{category.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Featured Items</h2>
            <button className="flex items-center space-x-2 text-green-600 hover:text-green-700 font-medium">
              <span>View All</span>
              <ArrowRight size={20} />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-1"
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-3 right-3">
                    <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow">
                      <Heart
                        size={16}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                      />
                    </button>
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      {Math.round(
                        ((product.originalPrice - product.price) /
                          product.originalPrice) *
                          100
                      )}
                      % OFF
                    </span>
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                      {product.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Star
                        size={12}
                        className="text-yellow-400 fill-current"
                      />
                      <span className="text-xs text-gray-600">
                        {product.rating}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                    {product.title}
                  </h3>

                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-xl font-bold text-green-600">
                        ${product.price}
                      </span>
                      <span className="text-sm text-gray-400 line-through">
                        ${product.originalPrice}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>by {product.seller}</span>
                    <span>{product.saved} saved</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            How EcoFinds Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search size={32} className="text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                1. Browse & Search
              </h3>
              <p className="text-gray-600">
                Discover amazing pre-owned items across multiple categories. Use
                our smart filters to find exactly what you're looking for.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShoppingBag size={32} className="text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                2. Buy Safely
              </h3>
              <p className="text-gray-600">
                Purchase with confidence through our secure payment system. All
                sellers are verified and rated by the community.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Recycle size={32} className="text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                3. Help the Planet
              </h3>
              <p className="text-gray-600">
                Every purchase extends a product's lifecycle, reduces waste, and
                contributes to a more sustainable future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Join our community of conscious consumers and start your sustainable
            shopping journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-green-600 rounded-lg font-semibold hover:bg-gray-50 transition-colors shadow-lg">
              Create Your Account
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
              List Your First Item
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">🌱</span>
                </div>
                <span className="text-xl font-bold">EcoFinds</span>
              </div>
              <p className="text-gray-400">
                Empowering sustainable consumption through a trusted second-hand
                marketplace.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Marketplace</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Browse Items
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Sell Items
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Categories
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    How it Works
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Safety
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Sustainability
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Press
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; 2025 EcoFinds. All rights reserved. Made with 💚 for a
              sustainable future.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
