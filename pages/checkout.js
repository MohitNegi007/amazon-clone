import Image from "next/image";
import Header from "../components/Header";

const Checkout = () => {
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
          <h1 className="text-3xl border-b pb-4">Your Shopping Basket</h1>
        </div>
        {/* right */}
        <div></div>
      </main>
    </div>
  );
};

export default Checkout;