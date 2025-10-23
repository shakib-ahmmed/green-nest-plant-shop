import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { Star } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PlantDetails = () => {
    const data = useLoaderData();
    const { plantId } = useParams();
    const plant = data.find((p) => String(p.plantId) === String(plantId));

    const [formData, setFormData] = useState({ name: "", email: "" });

    if (!plant) return <h2 className="text-center mt-10">Plant not found</h2>;

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success("Consultation booked successfully!");
        setFormData({ name: "", email: "" });
    };

    return (
        <div className="w-8/12 mx-auto py-5 p-6 space-y-8">

            {/* Plant Info */}

            <div className="bg-gray-100  p-6 rounded-lg shadow flex flex-col md:flex-row gap-8">

                <div className="md:w-1/2 flex justify-center items-center">
                    <img
                        src={plant.image}
                        alt={plant.plantName}
                        className=" h-auto w-full max-h-96  rounded-lg"
                    />
                </div>
                <div className="flex-1 flex flex-col justify-between space-y-4">
                    <h1 className="text-4xl font-bold">{plant.plantName}</h1>
                    <p className="text-gray-700 text-lg leading-relaxed">{plant.description}</p>
                    <div className="flex flex-wrap gap-6 mt-4 items-center">
                        <div className="flex items-center gap-2">
                            <Star className="text-yellow-400 fill-yellow-400" />
                            <span className="font-semibold text-lg">{plant.rating}</span>
                        </div>
                        <div>
                            <span className="font-semibold text-lg">Stock:</span> {plant.availableStock}
                        </div>
                        <div>
                            <span className="font-semibold text-lg">Price:</span> ${plant.price}
                        </div>
                    </div>
                </div>
            </div>


            {/* Book Consultation Form */}

            <div className="bg-gray-100 p-6 rounded-lg shadow">
                <h2 className="text-2xl font-semibold mb-4">Book Consultation</h2>
                <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
                    <div>
                        <label className="block text-sm font-medium mb-1">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 rounded-md p-2"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 rounded-md p-2"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-md"
                    >
                        Book Now
                    </button>
                </form>
            </div>

            <ToastContainer position="top-right" autoClose={3000} />
        </div>
    );
};

export default PlantDetails;
