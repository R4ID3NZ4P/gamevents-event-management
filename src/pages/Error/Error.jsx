import { Link } from "react-router-dom";
import errorPic from "../../assets/error.png"

const Error = () => {
    return (
        <div className="w-full h-screen flex flex-col items-center justify-center">
            <img src={errorPic} alt="" />
            <h1 className="text-5xl font-bold my-5">Oooooooops!!!!!</h1>
            <p>The page you are trying to reach is not found!</p>
            <Link to={"/"} className="btn btn-neutral my-5">Go Back To Home Page</Link>
        </div>
    );
};

export default Error;