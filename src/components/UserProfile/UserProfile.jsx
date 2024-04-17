import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../Providers/Authprovider";

const UserProfile = () => {
    const { user } = useContext(AuthContext);

    return (
        <div>
            <Helmet>
                <title>User Profile || Realestate</title>
            </Helmet>
            {user && (
                <div>
                    <h1>Welcome, {user.email}</h1>
                    {/* Display other user information as needed */}
                </div>
            )}
        </div>
    );
};

export default UserProfile;
