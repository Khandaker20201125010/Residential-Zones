import { Link } from "react-router-dom";
const Error = () => {
    return (
        <div className="text-center align-middle mt-20 error h-[100%] w-[100%]  p-64">
            <h1 className="text-8xl font-bold">404 Error page</h1>
            <p className="text-2xl mt-10 text-white text-black">Sorry page not fond :( </p>
            <Link to={`/`} >
            <button className="btn mt-10  bg-orange-300">Go back Home</button>
            </Link>
            
            
        </div>
    );
};

export default Error;