import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/Authprovider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet-async";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import ParticlesBackground from "../Particles/ParticlesBackground";

const UpdateProfile = () => {
    const {updateUser,user} = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false); 
    const handleRegister = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
       updateUser (name,photo)
       .then(()=>{
        console.log(user)
       })
       .catch(error =>{
        console.error(error);
       })

    };

    return (
        <div>
            <Helmet>
          <title>Register|| Realestate</title>
        </Helmet>
            <div className="text-3xl my-10 text-center h-screen bg-blue-950 rounded-2xl">
                <ParticlesBackground></ParticlesBackground>
                <div className="w-3/4 text-center m-auto p-20">
                    <form onSubmit={handleRegister} className="md-3/4 lg:w-1/2 mx-auto bg-slate-500 p-12 rounded-2xl">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Name</span>
                            </label>
                            <input type="text" required name="name" defaultValue = {user?.displayName} placeholder="Enter your name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label" >
                                <span className="label-text font-bold">Photo URL</span>
                            </label>
                            <input type="text" required name="photo" defaultValue={user?.photoURL}  placeholder="Photo URL" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Email</span>
                            </label>
                            <input type="email" required name="email" defaultValue={user?.email}  placeholder="Email" className="input input-bordered" />
                        </div>
                        <div className="form-control flex relative">
                        <label className="label">
                            <span className="label-text font-bold">Password</span>
                        </label>
                        <input type={showPassword ? "text" : "password"} required name="password" placeholder="Password" className="input input-bordered" />
                        <label className="label absolute right-0 top-[60px] transform -translate-y-1/2 cursor-pointer">
                            <span onClick={()=>setShowPassword(!showPassword) }>
                                {
                                    showPassword ? <IoMdEye></IoMdEye> : <IoMdEyeOff></IoMdEyeOff>
                                }
                            </span>
                        </label>
                    </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Update</button>
                            <p className="text-base mt-2">Already have an account? <Link to='/login' className="text-blue-900 font-bold">Login</Link></p>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default UpdateProfile;
