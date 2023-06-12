import React from "react";
import "../Components/Home/Home.css"

import TopSection from "../Components/Home/TopSection";
import LeftSection from "../Components/Home/LeftSection";
import RightSection from "../Components/Home/RightSection";

export default function Home() {
  return (
    <>
      <TopSection />

      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <LeftSection />
          </div>
          <div className="col-md-6">
            <RightSection />
          </div>
        </div>
      </div>
    </>
  );
}
