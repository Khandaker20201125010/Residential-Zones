import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/Authprovider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const { createUser } = useContext(AuthContext);

    const handleRegister = async (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');

        // Check if all required fields are filled
        if (!name || !photo || !email || !password) {
            toast.error('All fields are required');
            return;
        }

         try{
            const result = await createUser(email, password);
            console.log(result.user);
   
            toast.success('Registration successful');
        } catch (error) {
            console.error(error);

            if (error.code === 'auth/email-already-in-use') {
                toast.error('Email is already in use');
            } else {

                toast.error('Registration failed');
            }
        }
    };


    return (
        <div>
            <div className="text-3xl my-10 text-center">
                <div className="w-3/4 text-center m-auto p-20">
                    <form onSubmit={handleRegister} className="md-3/4 lg:w-1/2 mx-auto bg-slate-500 p-12 rounded-2xl">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Name</span>
                            </label>
                            <input type="text" required name="name" placeholder="Enter your name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Photo URL</span>
                            </label>
                            <input type="text" required name="photo" placeholder="Photo URL" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Email</span>
                            </label>
                            <input type="email" required name="email" placeholder="Email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Password</span>
                            </label>
                            <input type="password" required name="password" placeholder="Password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                            <p className="text-base mt-2">Already have an account? <Link to='/login' className="text-blue-900 font-bold">Login</Link></p>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Register;
