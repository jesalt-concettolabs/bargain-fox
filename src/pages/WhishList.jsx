import React from "react";
import { Link } from "react-router-dom";
import Card2 from "../components/MainCard/Card2";

const WhishList = () => {
  return (
    <main>
      <section className="container w-[80%] flex flex-col gap-4 justify-center mt-6">
        <h4 className="text-[#292D32] text-2xl font-bold">My Whishlist</h4>
        <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 ">
          {/* {gardenCardData &&
            gardenCardData.map((item) => {
              return (
                <div key={item.id}>
                  <Link to={item.cardUrl}>
                    <Card2 data={item} btnClass="true" />
                  </Link>
                </div>
              );
            })} */}
        </div>
      </section>
    </main>
  );
};

export default WhishList;
