import { Link } from "react-router-dom";

const ServiceCard = ( { data } ) => {
    console.log(data);

    const {
        id,
        title,
        description,
        price,
        image
    } = data;
    return (

        <div className="card card-compact shadow-xl">
            <figure>
                <img
                    src={image}
                    alt={title}
                    className="h-[324px]"
                />
            </figure>
            <div className="card-body text-center">
                <h2 className="text-xl font-bold">{title}</h2>
                <p>{description.slice(0, 100) + "....."}</p>
                <h3 className="font-semibold">Price: {price}$</h3>
                <div className="card-actions">
                    <Link to={`/service/${id}`} className="w-full"><button className="btn btn-neutral w-full">Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
