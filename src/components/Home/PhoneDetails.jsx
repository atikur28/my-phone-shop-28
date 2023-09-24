import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import Swal from "sweetalert2";

const PhoneDetails = () => {
  const [phone, setPhone] = useState([]);

  const { id } = useParams();
  const phoneDetails = useLoaderData();

  useEffect(() => {
    const findPhone = phoneDetails?.find(
      (phoneDetail) => phoneDetail.id === id
    );
    setPhone(findPhone);
  }, [id, phoneDetails]);

  const { image, brand_name, phone_name, price } = phone;

  const addToFavorites = () => {
    const addedItems = [];
    const favoriteItems = JSON.parse(localStorage.getItem("favorites"));
    if (!favoriteItems) {
      addedItems.push(phone);
      localStorage.setItem("favorites", JSON.stringify(addedItems));
      Swal.fire(
        "Good job!",
        "You have added it to Favorites successfully!",
        "success"
      );
    } else {
      const isExist = favoriteItems.find((phone) => phone.id === id);
      if (!isExist) {
        addedItems.push(...favoriteItems, phone);
        localStorage.setItem("favorites", JSON.stringify(addedItems));
        Swal.fire(
          "Good job!",
          "You have added it to Favorites successfully!",
          "success"
        );
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "You already added it!!",
        });
      }
    }
  };

  return (
    <div className="my-10">
      <div className="container mx-auto py-24 bg-green-200">
        <h2 className="text-4xl font-normal text-center">Phone Details</h2>
      </div>
      <div className="w-fit px-16 py-5 rounded-lg flex justify-center items-center gap-4 my-20 border mx-auto">
        <div className="w-fit flex justify-center">
          <img className="w-72" src={image} alt="" />
        </div>
        <div className="p-10">
          <p className="text-xl font-semibold">
            Brand: <span className="text-pink-500">{brand_name}</span>
          </p>
          <h3 className="text-2xl font-semibold my-2">{phone_name}</h3>
          <p className="text-xl font-semibold">Price : {price}$</p>
          <div
            onClick={() => addToFavorites()}
            className="flex gap-3 items-center mt-2 text-lg font-medium text-white bg-pink-500 w-fit py-1.5 px-5 rounded-lg hover:bg-green-300 hover:text-pink-500"
          >
            <Link>Add to Favorites</Link>
            <span className="text-xl font-bold mt-1">
              <BsArrowRight></BsArrowRight>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneDetails;
