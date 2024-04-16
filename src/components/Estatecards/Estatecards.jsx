const Estatecards = ({ estates }) => {
    const { status, image, segment_name, description, price, area, location, rent, facilities, button_text, estate_title } = estates;
    return (
        <div className="card-container">
            <div>
                <div data-aos="flip-left" className="card w-full bg-base-200 shadow-2xl p-2 max-sm:flex max-sm:flex-col relative h-[500px]">
                    <figure><img className="h-[200px] w-[380px] skeleton" src={image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h1 className='text-xl text-blue-400 font-bold'>{price}</h1>
                        <h1 className="text-xl">{estate_title}</h1>
                        <p className=''>{description}</p>
                        <h1 className="text-base font-bold">Area:{area}</h1>
                        <div className='outline-dashed outline-1 text-gray-300 mt-5'></div>
                        <div className="card-actions justify-between flex flex-col">
                            <div className="flex gap-44">
                                <h3 className="font-bold">{status}</h3>
                                <button className="bg-green-500 rounded-full btn-sm">{button_text}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Estatecards;
