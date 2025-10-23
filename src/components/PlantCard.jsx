import React from 'react';
import { Link } from "react-router-dom";

const PlantCard = ({ plant }) => {
    const { plantId, plantName, category, price, rating, image } = plant;

    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 >= 0.5;
        const stars = [];

        for (let i = 0; i < fullStars; i++) stars.push('★');
        if (halfStar) stars.push('☆');
        while (stars.length < 5) stars.push('☆');

        return stars.join('');
    };

    return (
        <div className="card bg-white lg:h-[380px] lg:w-[300px] gap-3 shadow-md rounded-lg hover:scale-105 transition ease-in-out">
            <figure className="overflow-hidden rounded-t-lg h-48">
                <img
                    className="w-full h-auto"
                    src={image}
                    alt={plantName}
                />
            </figure>
            <div className="card-body p-4 flex flex-col gap-2">
                <h2 className="text-2xl font-semibold">{plantName}</h2>
                <p className="text-sm font-medium text-green-700">Category: {category}</p>
                <p className="text-lg font-semibold text-gray-800">${price}</p>
                <p className="text-sm text-gray-500">Rating: {renderStars(rating)}</p>

                {/* Button */}
                <Link
                    to={`/plantdetails${plantId}`}
                    className="mt-auto text-center bg-green-500 hover:bg-green-600 text-white font-medium py-2 rounded-md"
                >
                    View Details
                </Link>
            </div>
        </div>
    );
};

export default PlantCard;
