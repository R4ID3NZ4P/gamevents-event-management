import { useLoaderData } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import WhyChooseUs from "./WhyChooseUs";
import FAQ from "./FAQ";

const Home = () => {
    const data = useLoaderData();

    return (
        <div>
            <div className=""></div>
            <div>
                <h1 className="text-3xl font-bold text-center">Services</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {data.map(card => <ServiceCard key={card.id} data={card}></ServiceCard>)}
                </div>
            </div>
            <WhyChooseUs></WhyChooseUs>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;
