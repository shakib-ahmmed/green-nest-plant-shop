import React, { useContext } from "react";
import { Link } from "react-router-dom";
import PlantCard from "../components/PlantCard";
import { PlantContext } from "../Provider/PlantContext";
import Loading from "./Loading";

const Plant = () => {
    const { plants, loading } = useContext(PlantContext);

    if (loading) return <Loading />;

    return (
        <div className="flex flex-col items-center justify-center text-center pb-10 bg-gray-100 min-h-screen">
            <h1 className="text-[48px] font-bold mt-10">Our All Plants</h1>

            <h1 className="text-3xl flex justify-start w-full lg:px-60 font-semibold mt-6">
                ({plants.length}) Plants Found
            </h1>

            {plants.length === 0 ? (
                <div className="flex flex-col justify-center items-center py-20">
                    <img
                        src={"/public/logo.svg"}
                        alt="Plant-Error.png"
                        className="w-[250px] mb-6"
                    />
                    <h1 className="text-black text-[36px] font-semibold mb-2">
                        OOPS!! No Plants Found
                    </h1>
                    <p className="text-[18px] text-center pb-3">
                        There are currently no plants in our system.
                    </p>
                    <Link to="/">
                        <button className="btn bg-green-700 text-white font-semibold w-[145px] h-[45px] hover:scale-105 transition ease-in-out">
                            GO BACK!
                        </button>
                    </Link>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 pt-10 px-4 lg:px-20">
                    {plants.map((plant) => (
                        <PlantCard key={plant.Id} plant={plant} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Plant;
