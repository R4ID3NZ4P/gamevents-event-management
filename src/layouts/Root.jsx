import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar";
import Footer from "../pages/Shared/Footer";
import background from "/background.jpg"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Banner from "../pages/Home/Banner";


const Root = () => {
    const location = useLocation();
    return (
        <div className="relative">
            <ToastContainer />
            {/* {location.pathname === "/" && <img src={background} alt="" className="absolute w-full h-screen brightness-[30%] -z-10"/>} */}
            <div className="max-h-[600px] px-5 lg:px-32" style={(location.pathname === "/") ? {
                    background: `url(${background})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                } : {}}>
                    <Navbar></Navbar>
                    {(location.pathname === "/") && <Banner></Banner>}
                </div>

            <div className="px-5 lg:px-32">
                {/* <Navbar></Navbar> */}
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;