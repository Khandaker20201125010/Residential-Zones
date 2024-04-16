
const Estatecards = ({estates}) => {
    const{status,image} = estates;
    return (
        <div>
           <div>
            <div className="card w-full h-full bg-base-200 shadow-2xl p-2 max-sm:flex max-sm:flex-col  relative">
                <figure><img className="h-[200px] w-[380px] skeleton" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                {/* <div className=" mb-2">
                        {tags.map((tag, index) => (
                            <span key={index} className=" rounded-full px-3 py-1  font-semibold text-green-500 mr-2"></span>
                        ))}
                    </div> */}
                    <h1 className='text-2xl font-bold'></h1>
                    <p className='font-bold '>By:</p>
                    <br />
                    <div className='outline-dashed outline-1 text-gray-300 mt-5'></div>
                    <div className="card-actions justify-between font-bold">
                        <h3></h3>
                        <div className="flex gap-2">
                        <h3></h3>
                        <img src="" alt="" />
                        </div>
                        
                       
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Estatecards;