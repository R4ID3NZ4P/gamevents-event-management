import { useLoaderData } from "react-router-dom";
import Card from "./Card";

const Orders = () => {
    const data = useLoaderData();

    return (
        <div className="flex flex-col items-center my-20">
            <h1 className="text-3xl font-bold">Past Orders</h1>
            <div className="flex flex-col items-center space-y-10">
                {data.map(card => <Card key={card.id} data={card}></Card>)}
            </div>
        </div>
    );
};

export default Orders;
