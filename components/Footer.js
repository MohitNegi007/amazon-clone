import React from "react";

const Footer = () => {
  const languages = [
    "India",
    "Australia",
    "Brazil",
    "Canada",
    "China",
    "France",
    "Germany",
    "Italy",
    "Japan",
    "Mexico",
    "Netherlands",
    "Poland",
    "Singapore",
    "Spain",
    "Turkey",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
  ];
  return (
    <div>
      {/* back to top button */}
      <div className="bg-gray-700 p-3 text-center">
        <a className="text-white  text-xl" href="#Header">
          Back to top
        </a>
      </div>
      {/* social media */}
      <div className="bg-gray-800 text-white  flex gap-5 lg:gap-0 justify-start lg:justify-evenly  flex-wrap p-4">
        <ul className="space-y-2 hover:border-b-white-50  ">
          <li className="text-xl font-semibold link">Get to Know Us</li>
          <li className="link">Careers</li>
          <li className="link">Press Releases</li>
          <li className="link">Amazon Science</li>
        </ul>
        <ul className="space-y-2 ">
          <li className="text-xl font-semibold link">Connect with Us</li>
          <li className="link">Facebook</li>
          <li className="link">Twitter</li>
          <li className="link">Instagram</li>
        </ul>
        <ul className="space-y-2 mt-6 lg:mt-0">
          <li className="text-xl font-semibold link">Make Money with Us</li>
          <li className="link">Sell under Amazon Accelerator</li>
          <li className="link">Amazon Global Selling</li>
          <li className="link">Become an Affiliate</li>
          <li className="link">Fulfilment by Amazon</li>
          <li className="link">Sell on Amazon</li>
          <li className="link">Advertise Your Products</li>
          <li className="link">Amazon Pay on Merchants</li>
        </ul>
        <ul className="space-y-2 mt-6 lg:mt-0">
          <li className="text-xl font-semibold link">Let Us Help You</li>
          <li className="link">COVID-19 and Amazon</li>
          <li className="link">Your Account</li>
          <li className="link">Returns Centre</li>
          <li className="link">100% Purchase Protection</li>
          <li className="link">Amazon App Download</li>
          <li className="link">Amazon Assistant Download</li>
          <li className="link">Help</li>
        </ul>
      </div>
      <hr />
      {/* languages */}
      <div className="bg-gray-800 flex flex-col pb-5">
        <div className="flex items-center justify-center gap-11 ">
          <img
            className="h-[100px] w-[100px] object-contain"
            src="/images/amazonLogo.png"
            alt="amazon"
          />
          <button className="border-2 p-2 text-white mb-3">English</button>
        </div>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          {languages.map((item) => (
            <span className="text-white text-center font-thin font-lg  link">
              {item}
            </span>
          ))}
        </div>
      </div>
      {/* ebooks */}
      <div className="bg-gray-900 text-xs py-4 grid grid-cols-5 gap-2 lg:gap-5 grid-rows-2  justify-items-center align-start">
        <div className="text-white link justify-self-center">
          <h2 className="text-sm">AbeBooks</h2>
          <p className="opacity-70">
            Books,art <br />& collectibles
          </p>
        </div>
        <div className="text-white link justify-self-start">
          <h2 className="text-sm">Amazon Web Servies</h2>
          <p className="opacity-70">
            Scalable Cloud
            <br /> Computing Servies
          </p>
        </div>
        <div className="text-white link justify-self-start">
          <h2 className="text-sm">Audible</h2>
          <p className="opacity-70">
            Download <br /> Audio Books
          </p>
        </div>
        <div className="text-white link justify-self-start">
          <h2 className="text-sm">DpReview</h2>
          <p className="opacity-70">
            Digital <br />
            Photography
          </p>
        </div>
        <div className="text-white link justify-self-start">
          <h2 className="text-sm">IMDb</h2>
          <p className="opacity-70">
            Movies , TV <br />& Celebrities
          </p>
        </div>
        <div className="text-white link justify-self-center">
          <h2 className="text-sm">Shopbop</h2>
          <p className="opacity-70">
            Designer <br /> Fashion Brands
          </p>
        </div>
        <div className="text-white link justify-self-start">
          <h2 className="text-sm">Amazon Business</h2>
          <p className="opacity-70">
            Everything For <br />
            Your Business
          </p>
        </div>
        <div className="text-white link justify-self-start">
          <h2 className="text-sm">Prime Now</h2>
          <p className="opacity-70">
            2-Hour Delivery <br />
            on Everyday Items
          </p>
        </div>
        <div className="text-white link justify-self-start">
          <h2 className="text-sm">Amazon Prime Music</h2>
          <p className="opacity-70">
            90 million songs , add-free <br />
            over 15 million podcast episodes
          </p>
        </div>
      </div>
      {/* conditions */}
      <div className="bg-gray-900 text-white text-center py-6 text-sm">
        <p>
          Conitions of Use & Sale &nbsp;&nbsp;&nbsp;&nbsp; Privacy Notice
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Interest-Based Ads <br />© 1999-2022 ,
          Amazon.com , Inc. or its affiliates
        </p>
      </div>
    </div>
  );
};

export default Footer;
