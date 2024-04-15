import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Card2 from "../components/MainCard/Card2";
import Loader from "../components/Loader/Loader";
import { manageWishListDetail, wishListDetail } from "../api/constant";
import axios from "axios";
import NoDataFound from "../components/NoDataFound/NoDataFound";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addCartCounterValue } from "../reducers/cartCounterSlice";

const WhishList = () => {
  const [loading, setLoading] = useState(false);
  const [wishData, setWishData] = useState();
  const [deleteStatus, setDeleteStatus] = useState();

  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const wishListAPI = async () => {
    try {
      setLoading(true);
      const response = await axios.post(
        wishListDetail,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.status === 200) {
        setLoading(false);
        setWishData(response.data.result.data);
        dispatch(addCartCounterValue(response.data.result.data.length));
      }
    } catch (error) {
      console.log("Wishlist API error: ", error);
      setLoading(false);
    }
  };

  const manageWishCard = async (id, action) => {
    try {
      const response = await axios.post(
        manageWishListDetail,
        { product_id: id, action: action },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.status === 200) {
        setDeleteStatus(response.data);
        toast.success("Removed from wishlist successfully");
      }
    } catch (error) {
      console.log("Manage wishlist API error: ", error);
    }
  };

  useEffect(() => {
    wishListAPI();
  }, [deleteStatus]);

  const handleDelete = (e, id) => {
    e.preventDefault();
    const action = "delete";
    manageWishCard(id, action);
  };

  if (token && loading) {
    return <Loader />;
  }

  if (!token && loading) {
    return navigate("/");
  }

  return wishData?.length == 0 ? (
    <NoDataFound title={"Your Wishlist is empty"} />
  ) : (
    <section className="container w-[80%] flex flex-col gap-4 justify-center mt-6">
      <h4 className="text-[#292D32] text-2xl font-bold">My Whishlist</h4>
      <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 ">
        {wishData &&
          wishData.map((item) => {
            return (
              <div key={item.id}>
                <Link
                  to={`/product-detail/${item.slug}/${item.unique_id}?sku=${item.sku}`}
                >
                  <Card2
                    data={item}
                    btnClass="true"
                    handleDelete={(e) => handleDelete(e, item.id)}
                  />
                </Link>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default WhishList;
