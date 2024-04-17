import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredApplication } from "../utility/localstorage";

const Estatelist = () => {
    const estates = useLoaderData();
    const [appliedEstates, setAppliedEstates] = useState([]);
    useEffect(() => {
        const storedEstateIds = getStoredApplication();
        if (estates.length > 0) {
            const listEstate = estates.filter(estate => storedEstateIds.includes(estate.id));
            setAppliedEstates(listEstate);
        }
    }, [estates]);

    return (
        <div>
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
                        <div className="card-actions justify-start">
                            <button className="btn btn-primary mt-10">Go back</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Estatelist;
