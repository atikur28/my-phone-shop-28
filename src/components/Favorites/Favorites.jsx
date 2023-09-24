import { useEffect, useState } from "react";
import FavoriteCarts from "./FavoriteCarts/FavoriteCarts";
import { Link } from "react-router-dom";

const Favorites = () => {
  const [items, setItems] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const favoriteItems = JSON.parse(localStorage.getItem("favorites"));
    if (favoriteItems) {
      setItems(favoriteItems);
      const total = favoriteItems.reduce((preValue, currentItem) => preValue + currentItem.price ,0);
      setTotalPrice(total);
    } else {
      setNotFound("No Data Found");
    }
  }, []);

  const deleteAllItems = () => {
    localStorage.clear();
    setItems([]);
    setNotFound("No Data Found");
  };
  return (
    <div className="">
      {notFound ? (
        <p className="h-[70vh] flex justify-center items-center font-bold">
          {notFound}
        </p>
      ) : (
        <div>
          <div className="flex flex-col gap-3 items-center justify-center">
            <Link>
              <button
                onClick={() => deleteAllItems()}
                className="py-1 px-3 bg-sky-500 text-white font-bold rounded-lg"
              >
                Delete All Items
              </button>
            </Link>
            <p className="font-bold text-xl">
              Total Favorite Items : {items.length} Items
            </p>
            <p className="font-bold text-xl">
              Total Favorite Items Price : {totalPrice.toFixed(2)}$
            </p>
          </div>
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 my-20">
            {isShow
              ? items.map((item, idx) => (
                  <FavoriteCarts key={idx} item={item}></FavoriteCarts>
                ))
              : items
                  .slice(0, 4)
                  .map((item, idx) => (
                    <FavoriteCarts key={idx} item={item}></FavoriteCarts>
                  ))}
          </div>
          <div className="flex justify-center items-center mb-14">
            {items.length > 4 && (
              <Link>
                <button
                  onClick={() => setIsShow(!isShow)}
                  className="btn bg-sky-500 text-white hover:text-black"
                >
                  {isShow ? "See Less" : "See All"}
                </button>
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Favorites;
