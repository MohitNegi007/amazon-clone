import React, { useState } from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";
import { useDispatch } from "react-redux";
const CheckoutProduct = ({
  id,
  title,
  price,
  description,
  category,
  image,
  hasPrime,
  rating,
}) => {
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
      hasPrime,
      rating,
    };
    //push item in to redux
    dispatch(addToBasket(product));
  };

  const removeItemFromBasket = () => {
    //remove item from redux
    //  is passsed as object ({id} is object)
    dispatch(removeFromBasket({ id }));
  };

  return (
    <div className="grid grid-cols-5">
      <Image src={image} height={200} width={200} className="object-contain" />
      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon className="h-5  color-yellow  text-yellow-500" />
            ))}
        </div>
        <p className="text-sm mt-2 mb-2 line-clamp-3">{description}</p>
        <Currency quantity={price} currency="INR" />
        {hasPrime && (
          <div className="flex items-center space-x-2">
            <img
              src="/images/amazonPrime.png"
              alt="img"
              loading="lazy"
              className="w-12"
            />
            <p className="text-sm text-gray-500">FREE Next-day Delivery</p>
          </div>
        )}
      </div>
      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <button className="button mt-auto" onClick={addItemToBasket}>
          Add To Basket
        </button>
        <button className="button mt-auto" onClick={removeItemFromBasket}>
          Remove From Basket
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
