import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  ShoppingCart,
  User,
  List,
  Plus,
  Info,
  Mail,
  Search,
  Filter,
  Bell,
  Settings,
  Edit3,
  Eye,
  Trash2,
  Package,
  TrendingUp,
  DollarSign,
  Heart,
  EyeIcon,
} from "lucide-react";
import { Link } from "react-router-dom";

const UserDashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [sortBy, setSortBy] = useState("recent");

  // Mock user data (would come from backend)
  const [userData, setUserData] = useState({
    name: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    phone: "+1 234 567 8900",
    location: "San Francisco, CA",
    joinDate: "March 2023",
    rating: 4.8,
    totalSales: 47,
    totalEarnings: 2340,
    profileImage:
      "https://images.unsplash.com/photo-1494790108755-2616b612b631?w=150&h=150&fit=crop&crop=face",
  });

  // Mock user's listings (would come from backend)
  const [userListings, setUserListings] = useState([
    {
      id: 1,
      title: "Vintage Leather Jacket",
      category: "Fashion",
      price: 85,
      views: 124,
      likes: 23,
      datePosted: "2 days ago",
      image:
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=200&h=200&fit=crop",
    },
    {
      id: 2,
      title: "MacBook Pro 2019",
      category: "Electronics",
      price: 899,
      views: 89,
      likes: 45,
      datePosted: "1 week ago",
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=200&h=200&fit=crop",
    },
    {
      id: 3,
      title: "Scandinavian Dining Chair",
      category: "Furniture",
      price: 120,
      views: 67,
      likes: 12,
      datePosted: "3 days ago",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=200&h=200&fit=crop",
    },
    {
      id: 4,
      title: "Canon DSLR Camera",
      category: "Electronics",
      price: 450,
      views: 156,
      likes: 78,
      datePosted: "5 days ago",
      image:
        "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=200&h=200&fit=crop",
    },
  ]);

  const navigationItems = [
    { name: "Dashboard", icon: User, href: "/dashboard", active: true },
    { name: "My Listings", icon: List, href: "/my-listings" },
    { name: "Add Product", icon: Plus, href: "/add-product" },
    { name: "Purchases", icon: Package, href: "/purchases" },
    { name: "About", icon: Info, href: "/about" },
    { name: "Contact", icon: Mail, href: "/contact" },
  ];

  const categories = [
    "All Categories",
    "Electronics",
    "Fashion",
    "Furniture",
    "Books",
    "Sports",
    "Home & Garden",
  ];


  const filteredListings = userListings.filter((listing) => {
    const matchesSearch = listing.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All Categories" ||
      listing.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo and Menu */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>

              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">🌱</span>
                </div>
                <span className="text-xl font-bold text-gray-900">
                  EcoFinds
                </span>
              </div>
            </div>

            {/* Right side icons */}
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-lg hover:bg-gray-100 relative">
                <ShoppingCart size={20} />
                <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  3
                </span>
              </button>
              <button className="p-2 rounded-lg hover:bg-gray-100 relative">
                <Bell size={20} />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-2 h-2 rounded-full"></span>
              </button>
              <div className="w-8 h-8 bg-gray-300 rounded-full overflow-hidden">
                <img
                  src={userData.profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Collapsible Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Sidebar Menu */}
      <div
        className={`fixed left-0 top-16 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 z-50 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-4 text-gray-900">
            Navigation
          </h3>
          <nav className="space-y-2">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  item.active
                    ? "bg-green-50 text-green-700 border border-green-200"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                <item.icon size={20} />
                <span className="font-medium">{item.name}</span>
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filter Bar */}
        <div className="bg-white rounded-xl p-6 shadow-sm border mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="flex-1 relative">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search your listings..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="recent">Most Recent</option>
              <option value="price-high">Price: High to Low</option>
              <option value="price-low">Price: Low to High</option>
              <option value="views">Most Viewed</option>
            </select>
          </div>
        </div>

        {/* Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredListings.map((listing) => (
            <div
              key={listing.id}
              className="bg-white rounded-xl shadow-sm border overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative">
                <img
                  src={listing.image}
                  alt={listing.title}
                  className="w-full h-48 object-cover"
                />
                
              </div>

              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                    {listing.category}
                  </span>
                  <span className="text-lg font-bold text-green-600">
                    ${listing.price}
                  </span>
                </div>

                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                  {listing.title}
                </h3>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{listing.datePosted}</span>
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1">
                      <Eye size={14} />
                      <span>{listing.views}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Heart size={14} />
                      <span>{listing.likes}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Link 
                    to={`/product/${listing.id}`} 
                    state={{ product: listing }} 
                    className="flex-1 px-3 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center space-x-1"
                  >
                    <EyeIcon size={14} />
                    <span>View Product</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add New Product Button */}
        <div className="fixed bottom-6 right-6">
          <button className="w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-colors flex items-center justify-center hover:shadow-xl">
            <Plus size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
