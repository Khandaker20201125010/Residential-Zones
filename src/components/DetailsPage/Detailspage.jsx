import { useParams } from "react-router-dom";

const Detailspage = () => {
    const {id} = useParams();
    return (
        <div>
            <div className="grid md:grid-cols-4">
                <div className="col-span-3">
                    <h2 className="text-5xl"></h2>
                    <p>{id}</p>
                </div>
                <div>
                </div>
            </div>
            
        </div>
    );
};

export default Detailspage;