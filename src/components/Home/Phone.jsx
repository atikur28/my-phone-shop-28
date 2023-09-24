import PropTypes from "prop-types";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import EmptyStar from "../../assets/empty-star.png";
import FilledStar from "../../assets/filled-star.png";

const Phone = ({ phone }) => {
  const { image, rating, brand_name, phone_name, price, id } = phone;
  return (
    <div className="relative flex w-fit flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md border">
      <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
        <img src={image} className="h-full w-full object-cover" />
      </div>
      <div className="p-6">
        <p className="">
          <Rating
            emptySymbol={
              <img src={EmptyStar} className="icon w-5" />
            }
            fullSymbol={
              <img src={FilledStar} className="icon w-5" />
            }
            initialRating={rating}
            readonly
          ></Rating>
        </p>
        <h3 className="text-lg font-bold text-gray-500">{brand_name}</h3>
        <div className="mb-2 flex items-center justify-between">
          <p className="block font-sans text-base font-bold leading-relaxed text-blue-gray-900 antialiased">
            {phone_name}
          </p>
          <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
            ${price}
          </p>
        </div>
      </div>
      <div className="p-6 pt-0">
        <Link to={`/phones/${id}`}>
          <button
            className="block bg-gray-100 w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            See Details
          </button>
        </Link>
      </div>
    </div>
  );
};

Phone.propTypes = {
  phone: PropTypes.object,
};

export default Phone;
