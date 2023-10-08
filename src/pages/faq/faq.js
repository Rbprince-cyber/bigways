import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const Journal = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation(location.state.data);
  }, [location]);
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="FAQ" prevLocation={prevLocation} />
      <div className="pb-10">
        <h1 className="max-w-[600px] text-base text-lightText mb-2">
          <span className="text-primeColor font-semibold text-lg">BigWays</span>{" "}
          - Find your answer
        </h1><p>
        1. What countries do you ship to?<br/>
        Ans. India.<br/><br/>
        2. What is your return/exchange policy?<br/>
        Ans. We have a 30 days money back guarantee on all orders placed with us and we will refund the amount within that time frame.<br/><br/>
        4. What payment methods do you accept?<br/>
        Ans. Cash on delivery and Paypal<br/><br/>
        5. Do you have gift packaging options?<br/>
        Ans. Yes we offer free shipping for orders over INR 399/-<br/><br/>
        </p>
        <Link to="/shop">
          <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Journal;
