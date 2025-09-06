import { ShoppingCart } from "lucide-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
    quantity: "",
    condition: "",
    year: "",
    brand: "",
    model: "",
    dimensions: "",
    weight: "",
    material: "",
    color: "",
    originalPackaging: false,
    manualIncluded: false,
    workingCondition: "",
    image: null,
  });

  const categories = [
    "Electronics",
    "Fashion",
    "Books",
    "Home & Furniture",
    "Sports & Fitness",
    "Toys & Games",
    "Automotive",
    "Beauty & Personal Care",
    "Musical Instruments",
    "Others",
  ];

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? checked : type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    try {
      const res = await fetch("http://localhost:3001/api/v1/products/add-product", {
        method: "POST",
        body: data,
      });
      const result = await res.json();
      alert("Product Added Successfully!");
      console.log(result);
    } catch (error) {
      console.error(error);
      alert("Error adding product");
    }
  };

  const navigate = useNavigate();

  

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 py-8">
      {/* Header */}
      <div className="flex justify-between items-center w-full max-w-2xl mb-6">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
            <Link
              to={"/dashboard"}
              className="text-white font-bold text-lg cursor-pointer"
            >
              🌱
            </Link>
          </div>
          <Link
            to={"/dashboard"}
            className="text-2xl font-bold text-gray-900 cursor-pointer"
          >
            EcoFinds
          </Link>
        </div>
        <div className="flex gap-4">
          <ShoppingCart size={30} onClick={() => navigate("/cartPage")} className="cursor-pointer hover:text-green-200" />
          <button className="relative">
            <span className="material-icons text-2xl font-semibold">shopping_cart</span>
          </button>
        </div>
      </div>

      {/* Form */}
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-2xl">
        <h2 className="text-xl font-semibold mb-4">Add a new Product</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Image Upload */}
          <div className="border-2 border-dashed rounded-lg p-4 text-center">
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
            />
            <p className="text-sm text-gray-500 mt-2">Add product image</p>
          </div>

          {/* Title */}
          <input
            type="text"
            name="title"
            placeholder="Product Title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-3 py-2"
          />

          {/* Category */}
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-3 py-2"
          >
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          {/* Description */}
          <textarea
            name="description"
            placeholder="Product Description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
          />

          {/* Price */}
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-3 py-2"
          />

          {/* Quantity */}
          <input
            type="number"
            name="quantity"
            placeholder="Quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
          />

          {/* Condition */}
          <input
            type="text"
            name="condition"
            placeholder="Condition"
            value={formData.condition}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
          />

          {/* Extra fields */}
          <input
            type="text"
            name="year"
            placeholder="Year of Manufacture"
            value={formData.year}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
          />
          <input
            type="text"
            name="brand"
            placeholder="Brand"
            value={formData.brand}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
          />
          <input
            type="text"
            name="model"
            placeholder="Model"
            value={formData.model}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
          />
          <input
            type="text"
            name="dimensions"
            placeholder="Dimensions (L x W x H)"
            value={formData.dimensions}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
          />
          <input
            type="text"
            name="weight"
            placeholder="Weight"
            value={formData.weight}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
          />
          <input
            type="text"
            name="material"
            placeholder="Material"
            value={formData.material}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
          />
          <input
            type="text"
            name="color"
            placeholder="Color"
            value={formData.color}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
          />

          {/* Checkboxes */}
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="originalPackaging"
              checked={formData.originalPackaging}
              onChange={handleChange}
            />
            <span>Original Packaging</span>
          </label>

          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="manualIncluded"
              checked={formData.manualIncluded}
              onChange={handleChange}
            />
            <span>Manual/Instructions Included</span>
          </label>

          {/* Working Condition */}
          <textarea
            name="workingCondition"
            placeholder="Working Condition Description"
            value={formData.workingCondition}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
          />

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700"
          >
            Add Item
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
