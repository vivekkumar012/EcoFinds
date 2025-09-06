import React, { useState } from "react";
import {
  ShoppingCart,
  Plus,
  Search,
  Filter,
  SortAsc,
  Users,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function MyListingsPage() {
  const [cartCount, setCartCount] = useState(2);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("recent");
  const [filterBy, setFilterBy] = useState("all");
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      title: "Wireless Bluetooth Headphones",
      price: 299.99,
      category: "Electronics",
      views: 120,
      likes: 30,
      datePosted: "2025-09-01",
      image:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop",
    },
    {
      id: 2,
      title: "Premium Running Shoes",
      price: 159.99,
      category: "Fashion",
      views: 90,
      likes: 15,
      datePosted: "2025-08-29",
      image:
        "https://images.unsplash.com/photo-1528701800489-20be0f2f9b6b?w=400&h=300&fit=crop",
    },
    {
      id: 3,
      title: "Smart Home Speaker",
      price: 89.99,
      category: "Electronics",
      views: 67,
      likes: 12,
      datePosted: "2025-08-28",
      image:
        "https://images.unsplash.com/photo-1587202372775-98927a7eab72?w=400&h=300&fit=crop",
    },
    {
      id: 4,
      title: "Canon DSLR Camera",
      category: "Electronics",
      price: 450,
      views: 156,
      likes: 78,
      datePosted: "2025-08-25",
      image:
        "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=300&fit=crop",
    },
  ];

  // Handle sorting
  const sortProducts = (list) => {
    switch (sortBy) {
      case "price-low":
        return [...list].sort((a, b) => a.price - b.price);
      case "price-high":
        return [...list].sort((a, b) => b.price - a.price);
      case "views":
        return [...list].sort((a, b) => b.views - a.views);
      case "likes":
        return [...list].sort((a, b) => b.likes - a.likes);
      case "recent":
      default:
        return [...list].sort(
          (a, b) => new Date(b.datePosted) - new Date(a.datePosted)
        );
    }
  };

  // Handle filtering
  const filterProducts = (list) => {
    if (filterBy === "all") return list;
    return list.filter((p) => p.category === filterBy);
  };

  // Apply search, filter & sort
  const finalProducts = sortProducts(
    filterProducts(
      products.filter((p) =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    )
  );

  const handleProductClick = (product) => {
    navigate("/product/:id", { state: { product } });
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center p-6 border-b border-gray-700">
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

      {/* Title + Add new */}
      <div className="flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-semibold">My Listings</h1>
        <button className="bg-gray-700 border border-gray-500 rounded-full px-4 py-2 flex items-center gap-2 text-sm hover:bg-gray-600 transition-colors">
          <Plus size={16} />
          Add new
        </button>
      </div>

      {/* Search */}
      <div className="px-6 mb-6">
        <div className="relative">
          <Search
            size={20}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search your listings..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-gray-800 border border-gray-500 rounded-2xl py-3 pl-12 pr-4 text-white placeholder-gray-400 focus:border-gray-400 focus:outline-none"
          />
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-3 px-6 mb-6 flex-wrap">
        {/* Sort Dropdown */}
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="bg-gray-700 border border-gray-500 rounded-2xl px-4 py-2 text-sm text-white"
        >
          <option value="recent">Most Recent</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="views">Most Viewed</option>
          <option value="likes">Most Liked</option>
        </select>

        {/* Filter Dropdown */}
        <select
          value={filterBy}
          onChange={(e) => setFilterBy(e.target.value)}
          className="bg-gray-700 border border-gray-500 rounded-2xl px-4 py-2 text-sm text-white"
        >
          <option value="all">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Fashion">Fashion</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="px-6 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pb-10">
        {finalProducts.map((product) => (
          <div
            key={product.id}
            onClick={() => handleProductClick(product)}
            className="bg-gray-800 border border-gray-600 rounded-xl p-4 cursor-pointer hover:bg-gray-700 transition"
          >
            {/* Image */}
            <div className="w-full h-48 bg-gray-700 rounded-lg overflow-hidden mb-4">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Info */}
            <h3 className="font-medium text-lg">{product.title}</h3>
            <p className="text-green-400 font-semibold">${product.price}</p>
            <p className="text-gray-400 text-sm">{product.category}</p>
            <div className="flex items-center gap-4 text-xs text-gray-500 mt-2">
              <span>{product.views} views</span>
              <span>{product.likes} likes</span>
            </div>
            <p className="text-gray-500 text-sm">
              {new Date(product.datePosted).toDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
