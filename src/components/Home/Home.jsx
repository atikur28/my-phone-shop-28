import { useLoaderData } from "react-router-dom";
import Phone from "./Phone";
import Banner from "./Banner";

const Home = () => {
  const phones = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <h1 className="text-xl font-bold text-center my-10">
        Our Phones Collections
      </h1>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mb-24">
        {phones?.map((phone) => (
          <Phone key={phone.id} phone={phone}></Phone>
        ))}
      </div>
    </div>
  );
};

export default Home;
