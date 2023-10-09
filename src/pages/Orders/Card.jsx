const Card = ( { data } ) => {
    const {
        title,
        description,
        price,
        image
    } = data;
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure>
                <img
                    src={image}
                    alt="Movie"
                    className="w-50 md:w-60"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description.slice(0, 100)}.....</p>
                <h3 className="font-semibold">Price: {price}$</h3>
            </div>
        </div>
    );
};

export default Card;
