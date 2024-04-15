import { Outlet } from "react-router-dom";
import Header from "../../Headers/Header/Header";

const Main = () => {
    return (
        <div className="lg:container lg:mx-auto sm:container sm:mx-auto fonty">
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;