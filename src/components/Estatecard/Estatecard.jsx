import { useLoaderData } from 'react-router-dom';
import a from '../../assets/image/a.png'
import b from '../../assets/image/b.png'
import Estatecards from '../Estatecards/Estatecards';
const Estatecard = () => {
    const estates = useLoaderData();
    // console.log(estates)
    return (
        <div className='  max-sm:flex max-sm:flex-col  relative flex-grow'>
            <div className="flex flex-col justify-center items-center md:flex-row md:justify-around md:items-center mt-20">
                <div className="flex items-center space-x-2">
                    <img src={b} alt="" />
                    <img src={a} alt="" />
                    <img src={b} alt="" />
                </div>
            </div>
            <div className="text-center">
                <h1 className='text-4xl font-bold mt-5'>Our Latest Estates</h1>
                <p className='text-xl m-auto w-2/3 md:w-1/2 lg:w-1/3 mt-5'>We are very proud of the service we provide. See what our guests have to say about us, our locations, and services.</p>
            </div>

            <div className='mt-10 grid grid-cols-3 w-full gap-8  max-sm:flex max-sm:flex-col  relative flex-grow' >
                {
                    estates.map(estate => <Estatecards
                        key={estate.id}
                        estates={estate}
                    ></Estatecards>)
                }

            </div>

        </div>
    );
};

export default Estatecard;