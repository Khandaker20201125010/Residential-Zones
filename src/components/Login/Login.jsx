import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/Authprovider";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        try {
            const result = await signIn(email, password);
            console.log(result.user);
            navigate(location?.state ? location.state : '/');
            toast.success('Login successful');
        } catch (error) {
            console.error(error);
            toast.error('Login failed');
        }
    };

    return (
        <div className="text-3xl my-10 text-center">
            <div className="w-3/4 text-center m-auto p-20">
                <form onSubmit={handleLogin} className="md-3/4 lg:w-1/2 mx-auto bg-slate-500 p-12 rounded-2xl">
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
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                        <p className="text-base mt-2">Create New Account? <Link to='/register' className="text-blue-900 font-bold">Register</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
