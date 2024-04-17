import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Estatecard from "../Estatecard/Estatecard";
import Perfect from "../Perfect/Perfect";
import Footer from "../Footer/Footer";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const estate = useLoaderData();
  console.log(estate)
    return (
      <>
      <div className="fonty">
        <Helmet>
          <title>Home || Realestate</title>
        </Helmet>
        <Banner />
        <Perfect />
        <Estatecard />
        <Footer></Footer>
        
      </div>
       
      </>
    );
};

export default Home;
