import Image from "next/image";
import React, { useEffect } from "react";
import Header from "../components/Header";
import CheckoutProduct from "../components/CheckoutProduct";
import { useSelector } from "react-redux";
import Currency from "react-currency-formatter";
import { selectTotal, userAuthenticated } from "../slices/basketSlice";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
const stripePromise = loadStripe(process.env.stripe_public_key);
const Checkout = () => {
  const items = useSelector((state) => state.basket.items);
  const total = useSelector(selectTotal);
  // same thing as about but here logic is here not in basket slice
  // const total = useSelector((state) =>
  //   state.basket.items.reduce((total, item) => total + item.price, 0)
  // );

  const createCheckoutSession = async () => {
    const stripe = await stripePromise;
    // call the backend to create a checkout  session
    const checkoutSession = await axios.post("/api/create-checkout-session", {
      items: items,
    });
    //redirect user to stripe checkout
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });
    if (result.error) {
      alert(result.error.message);
    }
  };

  return (
    <div className="bg-gray-100">
      <Header />
      <main className="lg:flex max-w-screen-2xl mx-auto">
        {/* left */}
        <div className="flex-grow m-5 shadow-sm">
          <Image
            src="/images/checkoutBanner.png"
            width={1020}
            height={250}
            className="object-fit:contain"
          />
          <div className="flex flex-col p-5 space-y-10 "></div>
          <h1 className="text-3xl border-b pb-4">
            {items.length === 0
              ? "Your Amazon Basket is empty"
              : "Your Shopping Basket"}
          </h1>
          {items.map((item, i) => (
            <CheckoutProduct
              Key={i}
              id={item.id}
              title={item.title}
              price={item.price}
              rating={item.price}
              description={item.description}
              category={item.category}
              image={item.image}
              hasPrime={item.hasPrime}
              rating={item.rating}
            />
          ))}
        </div>
        {/* right */}
        <div className="flex flex-col bg-white p-10 shadow-md">
          {items.length > 0 && (
            <>
              <h2 className="whitespace-nowrap">
                Subtotal ({items.length} items):
                <span className="font-bold">
                  <Currency quantity={total} currency="INR" />
                </span>
              </h2>
              <button
                // disabled={!ifNotAuthenticated}
                // className={`button mt-2 ${
                //   !ifNotAuthenticated &&
                //   "from-gray-500 text-gray-300 cursor-not-allowed"
                // }`}
                className="button"
                onClick={createCheckoutSession}
              >
                {/* {!ifNotAuthenticated
                  ? "sign in to checkout"
                  : "Proceed to checkout"} */}
                Checkout
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default Checkout;
