import React from "react";
import Header from "../components/Header";
import { selectTotal } from "../slices/basketSlice";
import { useSelector } from "react-redux";
const orders = ({ orders }) => {
  const items = useSelector((state) => state.basket.items);
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const yyyy = today.getFullYear();
  const date = `${dd}|${mm}|${yyyy}`;
  const total = useSelector(selectTotal);
  return (
    <div>
      <Header />
      <main className="max-w-screen-lg mx-auto p-10">
        <h1 className="text-3xl mb-2 pb-1 border-yellow-400">Your Orders</h1>
        <div className="mt-5 space-y-4">
          <div className="relative border rounded-md">
            <div className="flex items-center space-x-10 p-5 bg-gray-100 text-sm text-gray-600"></div>
            <div>
              <p className="font-bold text-xs">ORDER PLACED</p>
              <p>Date : {date}</p>
            </div>
            <div>
              <p className="text-xs font-bold">TOTAL : {total}</p>
              {/* <Curreny quanity={totalAmount} currency="INR" /> */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default orders;
