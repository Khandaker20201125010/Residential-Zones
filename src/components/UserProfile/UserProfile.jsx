import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../Providers/Authprovider";
import ParticlesBackground from "../Particles/ParticlesBackground";
import { Link } from "react-router-dom";


const UserProfile = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="h-screen bg-blue-900 rounded-2xl">
            <Helmet>
                <title>User Profile || Realestate</title>
            </Helmet>
            {user && (
                <div className="w-1/2 bg-info mt-5 m-auto mt-42 p-20 rounded-3xl">
                    <ParticlesBackground></ParticlesBackground>
                    <img className="rounded-full m-auto" src={user.photoURL} alt="" />
                    <div className="flex gap-5 ml-36 mt-10 text-white">
                        <div className="flex flex-col font-bold">
                            <h2>Name:</h2>
                            <h2 className="mt-5">Email</h2>
                        </div>
                        <div className="flex flex-col ">
                            <h1>{user.displayName}</h1>
                            <h1 className="mt-5">{user.email}</h1>
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <p className="text-base mt-2">Update your Account? <Link to='/Update Profile'><span className="font-bold">Update</span></Link> </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserProfile;
