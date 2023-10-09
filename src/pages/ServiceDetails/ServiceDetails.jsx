import { useNavigate } from "react-router-dom";


const ServiceDetails = () => {
    const navigate = useNavigate();
    return (
        <div>
            <button className="btn btn-neutral" onClick={() => navigate(-1)}>Go Back</button>
        </div>
    );
};

export default ServiceDetails;