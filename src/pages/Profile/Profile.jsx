import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import userLogo from "../../assets/user.png"


const Profile = () => {
    const { user } = useContext(AuthContext);
    const photo = user && user?.photoURL ? user.photoURL : userLogo;
    
    return (
        <div className="my-20 h-[70vh] flex flex-col items-center justify-center space-y-8">
            <img src={user && photo} alt="" className="rounded-full w-32 mr-2"/>
            <h1 className="text-2xl"><span className="font-bold">Name: </span>{user.displayName}</h1>
            <h1 className="text-2xl"><span className="font-bold">Email: </span>{user.email}</h1>
        </div>
    );
};

export default Profile;