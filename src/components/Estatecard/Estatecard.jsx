import { useLoaderData } from 'react-router-dom';
import a from '../../assets/image/a.png'
import b from '../../assets/image/b.png'
import Estatecards from '../Estatecards/Estatecards';
const Estatecard = () => {
    const estates = useLoaderData();
    // console.log(estates)
    return (
        <div>
             <div className="flex justify-center items-center mt-20">
            <div className="flex items-center space-x-2">
                <img src={b} alt="" />
                <img src={a} alt="" />
                <img src={b} alt="" />
            </div>
            
        </div>
            <div>
                <h1 className='text-4xl text-center font-bold mt-5'>Our latest Estate</h1>
                <p className='text-xl text-center w-2/4 m-auto mt-5 '>We are very proud of the service we provide. See what our guests have to say about us, our locations and services.</p>
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