import React from "react";
import { useRouter } from "next/router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { CheckCircleIcon } from "@heroicons/react/solid";
const success = () => {
  const router = useRouter();
  return (
    <div className="bg-gray-100 h-screen">
      <Header />
      <main className=" max-w-screen mx-auto">
        <div className="flex flex-col p-10 bg-white">
          <div className="flex items-center space-x-2 mb-5">
            <CheckCircleIcon className="text-green-500 h-10" />
            <h1 className="text-3xl">
              Thank you , your order has been confirmed!
            </h1>
          </div>
          <p>
            Thank you for shopping with us. we'll send a confirmation once your
            products has shipped , if you would like to checkout more products
            please press the link below.
          </p>
          <button onClick={() => router.push("/")} className="button mt-8">
            Continue Shopping
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default success;
