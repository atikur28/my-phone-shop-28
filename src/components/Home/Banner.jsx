import CoverPic from "../../assets/banner-cover.avif";

const Banner = () => {
  return (
    <div className="container flex justify-center mx-auto my-10">
      <div
        className="hero h-[70vh]"
        style={{
          backgroundImage: `url(${CoverPic})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="flex justify-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Search by category..."
                className="input input-bordered w-full lg:w-[900px] pr-16 text-black"
              />
              <button className="my-1 py-1.5 px-3 rounded-lg bg-sky-500 absolute top-0 right-0 lg:right-2 rounded-l-none text-white">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
