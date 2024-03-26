import { useState } from "react";
import { tabMenu } from "../../constants/trendingCardData";

const HoverDiv = () => {
  const [activeTab, setActiveTab] = useState("first");

  const handleTabHover = (eventKey) => {
    setActiveTab(eventKey);
  };

  return (
    <div className="absolute py-3 z-[999] flex flex-col justify-between items-center bg-white w-[450px] h-[250px] top-[150px] left-5 mt-2 rounded-[25px]">
      <div className="flex gap-[8rem]">
        <div className="flex flex-col gap-3">
          {tabMenu.map((tabmenu) => (
            <div key={tabmenu.id}>
              <button
                onMouseEnter={() => handleTabHover(tabmenu.id)}
                className={
                  activeTab === tabmenu.id ? "text-black" : "text-gray-600"
                }
              >
                {tabmenu.menu}
              </button>
            </div>
          ))}
        </div>
        {/* <div className="ml-28"> */}
        <div className="flex flex-col gap-3">
          <div className={activeTab === "first" ? "" : "hidden"}>
            <div className="flex flex-col gap-3">
              <p>Appliances & Accessories</p>
              <p>Cleaning & Household</p>
              <p>Lighting</p>
              <p>Bathroom</p>
              <p>Furnishings</p>
              <p>Decor</p>
            </div>
          </div>
          <div className={activeTab === "second" ? "" : "hidden"}>
            <div className="flex flex-col gap-3">
              <p>Appliances</p>
              <p>Utensils, Tools & Gadgets</p>
              <p>Cooking & Baking</p>
              <p>Tableware</p>
            </div>
          </div>
          <div className={activeTab === "third" ? "" : "hidden"}>
            <div className="flex flex-col gap-3">
              <p>Storage & Organisation</p>
              <p>Supplies</p>
              <p>Printers</p>
              <p>Shredders</p>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default HoverDiv;
