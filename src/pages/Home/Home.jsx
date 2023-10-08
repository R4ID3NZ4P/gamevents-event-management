import { useLoaderData } from "react-router-dom";
import background from "/background.jpg"


const Home = () => {

    const data = useLoaderData();

    return (
        <div>
            <div className="">
                {/* <img src={background} alt="" className="w-full brightness-[30%]"/> */}
            </div>
            <h1 className="text-3xl font-bold text-center">Services</h1>

        </div>
    );
};

export default Home;