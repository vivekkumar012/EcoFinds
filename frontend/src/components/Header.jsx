import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                <Link
                  to={"/"}
                  className="text-white font-bold text-lg cursor-pointer"
                >
                  🌱
                </Link>
              </div>
              <Link
                to={"/"}
                className="text-2xl font-bold text-gray-900 cursor-pointer"
              >
                EcoFinds
              </Link>
            </div>

            {/* Auth Buttons */}
            <div className="flex items-center space-x-4">
              <Link
                to={"/login"}
                className="px-4 py-2 text-green-600 hover:text-green-700 font-medium transition-colors"
              >
                Login
              </Link>
              <Link
                to={"/register"}
                className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors shadow-md hover:shadow-lg"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
