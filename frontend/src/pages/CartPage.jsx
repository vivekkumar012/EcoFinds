import React, { useState, useEffect } from "react";

const CartPage = () => {
  // Mock cart data (replace with API or context later)
  const [cartItems, setCartItems] = useState([
    { id: 1, title: "Wireless Headphones", price: 2500, quantity: 1 },
    { id: 2, title: "Sports Shoes", price: 3000, quantity: 2 },
    { id: 3, title: "Guitar", price: 7000, quantity: 1 },
  ]);

  const [total, setTotal] = useState(0);

  // Calculate total whenever cart changes
  useEffect(() => {
    const newTotal = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotal(newTotal);
  }, [cartItems]);

  // Handle quantity change
  const updateQuantity = (id, newQuantity) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Handle item removal
  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Handle checkout
  const handleCheckout = () => {
    alert("Proceeding to checkout with total Rs. " + total);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8">
      {/* Header */}
      <div className="flex justify-between items-center w-full max-w-2xl mb-6 px-4">
        <h1 className="text-2xl font-bold">Logo</h1>
        <button className="relative">
          <span className="material-icons text-2xl">account_circle</span>
        </button>
      </div>

      {/* Cart */}
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-2xl">
        <h2 className="text-xl font-semibold mb-4">Cart Page</h2>

        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty</p>
        ) : (
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border rounded-lg p-3"
              >
                <div>
                  <h3 className="font-medium">{item.title}</h3>
                  <p className="text-gray-600">Rs. {item.price}</p>
                </div>

                {/* Quantity Control */}
                <div className="flex items-center space-x-2">
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(item.id, parseInt(e.target.value) || 1)
                    }
                    className="w-16 border rounded-lg text-center"
                  />
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Total Price */}
        <div className="flex justify-between mt-6 text-lg font-semibold">
          <span>Total price to pay:</span>
          <span>Rs. {total}</span>
        </div>

        {/* Checkout Button */}
        <button
          onClick={handleCheckout}
          className="w-full bg-blue-600 text-white rounded-lg py-3 mt-6 hover:bg-blue-700"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;
