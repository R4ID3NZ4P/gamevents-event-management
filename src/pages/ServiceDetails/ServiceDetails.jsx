import { useLoaderData, useNavigate, useParams } from "react-router-dom";


const ServiceDetails = () => {
    const navigate = useNavigate();
    const data = useLoaderData();
    const {id} = useParams();

    const service = data.find((serviceData) => serviceData.id === parseInt(id));
    const {
        title,
        description,
        price,
        image
    } = service;
    
    return (
        <div className="w-full">
            <div className="w-full mx-auto flex flex-col items-center space-y-6">
                <h1 className="text-center text-3xl font-bold">{title}</h1>
                <img src={image} alt="" className="w-3/4"/>
                <p className="text-center">{description}</p>
            </div>
            <button className="btn btn-neutral" onClick={() => navigate(-1)}>Go Back</button>
        </div>
    );
};

export default ServiceDetails;