import React, { useEffect, useState } from "react";
import Loading from "../Pages/Loading";
import { Link } from "react-router-dom";

const PlantOfTheWeek = () => {
    const [featuredPlant, setFeaturedPlant] = useState(null);

    useEffect(() => {
        fetch("/plant-data.json")
            .then((res) => res.json())
            .then((data) => {
                if (!data || data.length === 0) return;
                const randomIndex = Math.floor(Math.random() * data.length);
                setFeaturedPlant(data[randomIndex]);
            })
            .catch((err) => console.error("Failed to fetch plant data:", err));
    }, []);

    if (!featuredPlant) return <Loading />;

    return (
        <section className="bg-green-50 py-12 text-center rounded-lg shadow-md my-12">
            <h2 className="text-3xl font-bold mb-10">Plant of the Week</h2>

            <div className="flex flex-col md:flex-row items-center justify-center gap-20">
                <img
                    src={featuredPlant.image}
                    alt={featuredPlant.plantName}
                    className="w-200 h-115 object-cover rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
                />
                <div className="max-w-md text-left flex flex-col">
                    <h3 className="text-2xl font-semibold mb-2">{featuredPlant.plantName}</h3>
                    <p className="mb-4 text-gray-700">{featuredPlant.description}</p>
                    <p className="mb-4 font-medium text-gray-800">Care Level</p>
                    <Link
                        to={`/plant-details/${featuredPlant.plantId}`}
                        className="mt-auto text-center bg-green-500 hover:bg-green-600 text-white font-medium py-2 rounded-md"
                    >
                        View Details
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default PlantOfTheWeek;
