import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const WhyChooseUs = () => {

    useEffect(() => {
        AOS.init();
      }, [])

    return (
        <div className="text-center flex flex-col items-center mt-10">
            <h1 className="text-3xl font-bold my-5">Why Choose Gam<span className="text-red-600">e</span>vents?</h1>
            <div>
                <p className="mb-5">At Gamevents, we&apos;re more than just event organizers—we&apos;re gaming enthusiasts who are passionate about delivering unforgettable experiences. When you choose us, you&apos;re choosing a team dedicated to taking your gaming events to the next level. Here&apos;s why we stand out:</p>
            </div>
            <div className="mb-20 w-9/12 lg:w-1/3 rounded-lg bg-slate-900 text-white px-3 py-2 lg:px-10 lg:py-4" data-aos="fade-zoom-in">
                <p>Gaming Expertise: Our team consists of avid gamers who understand the gaming community inside and out. We know what it takes to create events that resonate with gamers of all levels, from casual players to eSports professionals.</p>
            </div>
            <div className="mb-20 w-9/12 lg:w-1/3 rounded-lg bg-slate-900 text-white px-3 py-2 lg:px-10 lg:py-4" data-aos="fade-up">
                <p>Tailored Services: We offer a diverse range of gaming event services, from competitive tournaments to casual LAN parties and educational workshops. Whatever your gaming vision, we can tailor our services to meet your specific needs.</p>
            </div>
            <div className="mb-20 w-9/12 lg:w-1/3 rounded-lg bg-slate-900 text-white px-3 py-2 lg:px-10 lg:py-4" data-aos="fade-down">
                <p>Cutting-Edge Technology: We stay up-to-date with the latest gaming technologies and trends. From high-speed internet connections to state-of-the-art equipment, we provide the tools needed for a top-notch gaming experience.</p>
            </div>
            <div className="mb-20 w-9/12 lg:w-1/3 rounded-lg bg-slate-900 text-white px-3 py-2 lg:px-10 lg:py-4" data-aos="fade-left">
                <p>Affordability: Quality gaming events don&apos;t have to break the bank. We offer competitive pricing and flexible packages to make your gaming dreams a reality without breaking your budget.</p>
            </div>
            <div className="mb-20 w-9/12 lg:w-1/3 rounded-lg bg-slate-900 text-white px-3 py-2 lg:px-10 lg:py-4" data-aos="fade-right">
                <p>Customer Satisfaction: Your satisfaction is our top priority. We value your feedback and continuously strive to improve our services to exceed your expectations</p>
            </div>
        </div>
    );
};

export default WhyChooseUs;