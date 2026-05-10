"use client";
import React, { useState } from "react";
import { useCart } from "./CartContext";

const OrderSummeryPage = ({ handleClose }) => {
  const { cart, clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    payment: "Cash on Delivery",
  });
  const [showModal, setShowModal] = useState(false);
  const [finalAmount, setFinalAmount] = useState<number | null>(null);

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * (item.quantity || 1),
    0
  );
  const shippingFee = cart.length > 0 ? 10 : 0;
  const orderTotal = subtotal + shippingFee;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.address || !formData.phone) {
      alert("Please fill all fields!");
      return;
    }
    setFinalAmount(orderTotal);
    setShowModal(true);
    clearCart();
  };

  return (
    <div className="max-w-4xl mx-auto py-10 px-5">
      <h1 className="text-3xl font-bold mb-6">Order Summary</h1>

      {/* Totals */}
      <div className="mt-4 border rounded-md p-4 space-y-2">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>$ {subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <span>$ {shippingFee.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-bold text-lg text-amber-600">
          <span>Total</span>
          <span>$ {orderTotal.toFixed(2)}</span>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handlePlaceOrder} className="mt-8 space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full border rounded p-2"
        />
        <input
          type="text"
          placeholder="Address"
          value={formData.address}
          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
          className="w-full border rounded p-2"
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full border rounded p-2"
        />

        <select
          value={formData.payment}
          onChange={(e) => setFormData({ ...formData, payment: e.target.value })}
          className="w-full border rounded p-2"
        >
          <option>Cash on Delivery</option>
          <option>Visa Card</option>
          <option>Payoneer</option>
          <option>Paypal</option>
          <option>American Express</option>
        </select>

        <button
          type="submit"
          className="mt-6 w-full bg-green-600 text-white py-3 rounded-lg font-semibold active:bg-green-800 cursor-pointer"
        >
          Place Order
        </button>
      </form>

      {/* Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4 text-green-600">
              🎉 Order Placed Successfully!
            </h2>
            <p className="mb-4">
              Thank you <strong>{formData.name}</strong>, your order has been
              placed successfully.
            </p>
            <p className="mb-2">Payment Method: {formData.payment}</p>
            <p className="mb-2 font-semibold text-amber-600">
              Total Amount: $ {finalAmount?.toFixed(2)}
            </p>
            <button
              onClick={() => {
                setShowModal(false);
                handleClose();
              }}
              className="mt-4 w-full bg-rose-600 text-white py-2 rounded-lg cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderSummeryPage;
