import React from "react";
import { Link } from "react-router-dom";
import Card2 from "../components/MainCard/Card2";
import flowerImg from "/assets/flowers.png";

const WhishList = () => {
  return (
    <main>
      <section className="container w-[80%] flex flex-col gap-4 justify-center mt-6">
        <h4 className="text-[#292D32] text-2xl font-bold">My Whishlist</h4>
        <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 ">
          <Link to={"/product-detail"}>
            <Card2
              imageURL={flowerImg}
              cardDes="Oismys Glow in Dark Tree Elves Fairy 20Pcs Luminous Ghost Micro Landscape Accessories Garden..."
              cardPrice="44"
              cardNotPrice="33.98"
              cardDiscount="-10%"
              btnValue="true"
            />
          </Link>
          <Link to={"/product-detail"}>
            <Card2
              imageURL={flowerImg}
              cardDes="Oismys Glow in Dark Tree Elves Fairy 20Pcs Luminous Ghost Micro Landscape Accessories Garden..."
              cardPrice="44"
              cardNotPrice="33.98"
              cardDiscount="-10%"
              btnValue="true"
            />
          </Link>
          <Link to={"/product-detail"}>
            <Card2
              imageURL={flowerImg}
              cardDes="Oismys Glow in Dark Tree Elves Fairy 20Pcs Luminous Ghost Micro Landscape Accessories Garden..."
              cardPrice="44"
              cardNotPrice="33.98"
              cardDiscount="-10%"
              btnValue="true"
            />
          </Link>
          <Link to={"/product-detail"}>
            <Card2
              imageURL={flowerImg}
              cardDes="Oismys Glow in Dark Tree Elves Fairy 20Pcs Luminous Ghost Micro Landscape Accessories Garden..."
              cardPrice="44"
              cardNotPrice="33.98"
              cardDiscount="-10%"
              btnValue="true"
            />
          </Link>
          <Link to={"/product-detail"}>
            <Card2
              imageURL={flowerImg}
              cardDes="Oismys Glow in Dark Tree Elves Fairy 20Pcs Luminous Ghost Micro Landscape Accessories Garden..."
              cardPrice="44"
              cardNotPrice="33.98"
              cardDiscount="-10%"
              btnValue="true"
            />
          </Link>
          <Link to={"/product-detail"}>
            <Card2
              imageURL={flowerImg}
              cardDes="Oismys Glow in Dark Tree Elves Fairy 20Pcs Luminous Ghost Micro Landscape Accessories Garden..."
              cardPrice="44"
              cardNotPrice="33.98"
              cardDiscount="-10%"
              btnValue="true"
            />
          </Link>
          <Link to={"/product-detail"}>
            <Card2
              imageURL={flowerImg}
              cardDes="Oismys Glow in Dark Tree Elves Fairy 20Pcs Luminous Ghost Micro Landscape Accessories Garden..."
              cardPrice="44"
              cardNotPrice="33.98"
              cardDiscount="-10%"
              btnValue="true"
            />
          </Link>
          <Link to={"/product-detail"}>
            <Card2
              imageURL={flowerImg}
              cardDes="Oismys Glow in Dark Tree Elves Fairy 20Pcs Luminous Ghost Micro Landscape Accessories Garden..."
              cardPrice="44"
              cardNotPrice="33.98"
              cardDiscount="-10%"
              btnValue="true"
            />
          </Link>
          <Link to={"/product-detail"}>
            <Card2
              imageURL={flowerImg}
              cardDes="Oismys Glow in Dark Tree Elves Fairy 20Pcs Luminous Ghost Micro Landscape Accessories Garden..."
              cardPrice="44"
              cardNotPrice="33.98"
              cardDiscount="-10%"
              btnValue="true"
            />
          </Link>
          <Link to={"/product-detail"}>
            <Card2
              imageURL={flowerImg}
              cardDes="Oismys Glow in Dark Tree Elves Fairy 20Pcs Luminous Ghost Micro Landscape Accessories Garden..."
              cardPrice="44"
              cardNotPrice="33.98"
              cardDiscount="-10%"
              btnValue="true"
            />
          </Link>
          <Link to={"/product-detail"}>
            <Card2
              imageURL={flowerImg}
              cardDes="Oismys Glow in Dark Tree Elves Fairy 20Pcs Luminous Ghost Micro Landscape Accessories Garden..."
              cardPrice="44"
              cardNotPrice="33.98"
              cardDiscount="-10%"
              btnValue="true"
            />
          </Link>
          <Link to={"/product-detail"}>
            <Card2
              imageURL={flowerImg}
              cardDes="Oismys Glow in Dark Tree Elves Fairy 20Pcs Luminous Ghost Micro Landscape Accessories Garden..."
              cardPrice="44"
              cardNotPrice="33.98"
              cardDiscount="-10%"
              btnValue="true"
            />
          </Link>
          <Link to={"/product-detail"}>
            <Card2
              imageURL={flowerImg}
              cardDes="Oismys Glow in Dark Tree Elves Fairy 20Pcs Luminous Ghost Micro Landscape Accessories Garden..."
              cardPrice="44"
              cardNotPrice="33.98"
              cardDiscount="-10%"
              btnValue="true"
            />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default WhishList;
