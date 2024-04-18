import p1 from '../../assets/image/p1.jpg'
import p2 from '../../assets/image/p2.jpg'
import p3 from '../../assets/image/p3.jpg'
const CustomerReview = () => {
    return (
        <div className='mt-20'>
            <div>
                <h1 className='font-bold text-2xl text-center'>Customer Review</h1>
                <p className='w-1/2 text-center mt-5 m-auto'>Here is Our customer reviews .you can check our customer Review to trust our website at best</p>
            </div>
            <div className='grid  grid-cols-3 mt-10'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={p1} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Shoes!
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={p2} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Shoes!
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={p3} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Shoes!
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default CustomerReview;