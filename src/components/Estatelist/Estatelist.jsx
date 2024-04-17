import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getStoredApplication } from "../utility/localstorage";

const Estatelist = () => {
    const estatesData = useLoaderData();
    const [appliedEstates, setAppliedEstates] = useState([]);

    useEffect(() => {
        const storedEstateIds = getStoredApplication();
        if (estatesData.length > 0) {
            const listEstate = estatesData.filter(estate => storedEstateIds.includes(estate.id));
            setAppliedEstates(listEstate);
        }
    }, [estatesData]);

    return (
        <div className="animate__animated animate__lightSpeedInRight">
            {appliedEstates.map(estate => (
                <div key={estate.id} className="card card-side bg-base-100 shadow-2xl">
                    <figure><img className="w-96 h-82 mt-10 shadow-2xl" src={estate.image} alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{estate.estate_title}</h2>
                        <p>{estate.description}</p>
                        <div className="flex  mt-5 gap-28 w-full font-bold">
                            <h2>
                                {estate.area}
                            </h2>
                            <h2>
                                {estate.location}
                            </h2>
                        </div>
                        <h1 className="text-2xl mt-10 text-red-600 font-bold">{estate.status}</h1>
                        <Link to={`/DetailsPage/${estate.id}`}>
                            <div className="card-actions justify-start">
                                <button className="btn btn-primary mt-10">View Details</button>
                            </div>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Estatelist;
