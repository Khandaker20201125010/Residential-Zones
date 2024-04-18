import { useState } from "react";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/Authprovider";
import { Helmet } from "react-helmet-async";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from "../../firebase/firebase.config";
import { FcGoogle } from "react-icons/fc";
import { GithubAuthProvider } from "firebase/auth";
import { FaGithub } from "react-icons/fa";
import ParticlesBackground from "../Particles/ParticlesBackground";
const Login = () => {
    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const [user, setUser] = useState();
    const [showPassword, setShowPassword] = useState(false);
    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const naviGate = useNavigate();
    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        signIn(email, password)
            .then(result => {

                naviGate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.error(error);
            });
    };
    const googleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedInUser = result.user;
                setUser(loggedInUser);
            })
            .catch(error => {
                console.log(error.message);
            });
    };
    const gitSignIn = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                setUser(loggedInUser);
            })
            .catch(error => {
                console.log(error.message);
            });
    };

    return (
        <div className="text-3xl my-10 text-center bg-zinc-950 rounded-2xl lbg  ">
            <ParticlesBackground></ParticlesBackground>
            <Helmet>
                <title>Login || Realestate</title>
            </Helmet>
            <div className="w-3/4 text-center m-auto p-20">
                <form onSubmit={handleLogin} className="md-3/4 lg:w-1/2 mx-auto bg-slate-500 p-12 rounded-2xl">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Email</span>
                        </label>
                        <input type="email" required name="email" placeholder="Email" className="input input-bordered" />
                    </div>
                    <div className="form-control flex relative">
                        <label className="label">
                            <span className="label-text font-bold">Password</span>
                        </label>
                        <input type={showPassword ? "text" : "password"} required name="password" placeholder="Password" className="input input-bordered" />
                        <label className="label absolute right-0 top-[60px] transform -translate-y-1/2 cursor-pointer">
                            <span onClick={() => setShowPassword(!showPassword)}>
                                {
                                    showPassword ? <IoMdEye></IoMdEye> : <IoMdEyeOff></IoMdEyeOff>
                                }
                            </span>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                        <p className="text-base mt-2">Create New Account? <Link to='/register'><span className="text-blue-900 font-bold">Register</span></Link></p>
                    </div>
                    <div className="flex  gap-5  m-auto">
                        <button onClick={googleSignIn} className="btn mt-5 rounded-full"><FcGoogle size={32} /></button>
                        <button onClick={gitSignIn} className="btn mt-5 rounded-full"><FaGithub size={32} /></button>
                    </div>
                </form>
               
            </div>
        </div>
    );
};

export default Login;
