import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { getNowApplication, getStoredApplication } from "../utility/localstorage";
import { IoLocationOutline } from "react-icons/io5";
const Detailspage = () => {
    const estates = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const estate = estates.find(estate => estate.id === idInt);

    const handleGetNow = () => {
        const storedGetApplication = getStoredApplication();
        const exists = storedGetApplication.find(estateID => estateID === idInt);
        if (!exists) {
            getNowApplication(idInt);
            toast.success("Your requested estate has been added to the Estate List");
        } else {
            toast.error("This estate is already in the Estate List");
        }
    };
    return (
        <div>
            <div className="animate__animated animate__bounceInDown mt-5 card lg:card-side bg-base-100 shadow-xl">
                <figure className="w-full"><img src={estate.image} alt="Album" /></figure>
                <div className=" p-10 w-3/4">
                    <h2 className="card-title text-2xl">{estate.estate_title}</h2>
                    <h2 className="font-bold">{estate.segment_name}</h2>
                    <p className="animate__animated animate__bounceInRight mt-5">{estate.info}</p>
                    <div className="mt-5">
                    <h className="text-bold text-2xl text-blue-500 mt-5">{estate.price}</h>
                    </div>
                
                    <div className="flex justify-evenly mt-5">
                    <h className="w-60 bg-green-300  rounded-full font-bold p-2 ">{estate.area}</h>
                    <h className="w-60 bg-green-300 gap-2 flex rounded-full p-2 font-bold" ><IoLocationOutline />{estate.location}</h>
                    </div>
                   <div className="flex flex-col mt-5">
                   <h className=" bg-orange-300 rounded-full w-20 p-1 ">{estate.status}</h>
                   <div className="flex flex-wrap gap-2 mt-5">
                            {estate.facilities.map((facility, index) => (
                                <div key={index} className="bg-gray-200 rounded-full px-2 py-1">{facility}</div>
                            ))}
                        </div>
                        
                   </div>
                   <button onClick={handleGetNow} className ="mt-10 ml-2 btn-primary btn rounded-full ">Get Now </button>
                </div>
            </div>
                 <ToastContainer></ToastContainer>
        </div>
    );
};

export default Detailspage;