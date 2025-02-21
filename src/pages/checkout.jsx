import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Checkout = () => {
    const { orderId } = useParams(); // Get orderId from the URL
    const [orderDetails, setOrderDetails] = useState(null);

    useEffect(() => {
        const fetchOrderDetails = async () => {
            try {
                const response = await fetch(`http://localhost:5003/checkout/user-orders/${orderId}`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("authToken")}`
                    }
                });

                const data = await response.json();

                if (response.ok) {
                    setOrderDetails(data);
                    console.log("✅ Fetched order details:", data);
                } else {
                    console.error("❌ Error fetching order:", data.message);
                }
            } catch (error) {
                console.error("❌ Fetch error:", error.message);
            }
        };

        if (orderId) fetchOrderDetails();
    }, [orderId]);

    if (!orderDetails) return <p>Loading...</p>;

    return (
        <div className="container mx-auto p-8">
            <h2 className="text-2xl font-bold">Checkout for {orderDetails.course.title}</h2>
            <p className="text-lg">Price: ${orderDetails.course.price}</p>
            <p>Status: {orderDetails.status}</p>
            <button className="mt-4 bg-green-500 text-white px-6 py-2 rounded">
                Proceed to Payment
            </button>
        </div>
    );
};

export default Checkout;
