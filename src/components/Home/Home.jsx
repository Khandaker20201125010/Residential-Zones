import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Estatecard from "../Estatecard/Estatecard";
import Perfect from "../Perfect/Perfect";
import Estatecards from "../Estatecards/Estatecards";

const Home = () => {
  const estate = useLoaderData();
  console.log(estate)
    return (
      <>
      <div className="fonty">
        <Banner />
        <Perfect />
        <Estatecard />
        
      </div>
       
      </>
    );
};

export default Home;
