import Banner from "../Banner/Banner";
import Estatecard from "../Estatecard/Estatecard";
import Perfect from "../Perfect/Perfect";
import Footer from "../Footer/Footer";
import { Helmet } from "react-helmet-async";

const Home = () => {
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
