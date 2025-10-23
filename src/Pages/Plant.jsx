import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import PlantCard from "../components/PlantCard";
import { PlantContext } from "../Provider/PlantContext";

const Plant = () => {
    const { plants, loading } = useContext(PlantContext);
    const [search, setSearch] = useState("");

    if (loading) return <p className="text-center mt-10">Loading plants...</p>;

    const term = search.trim().toLowerCase();
    const searchedPlants = term
        ? plants.filter((plant) => plant.title.toLowerCase().includes(term))
        : plants;

    return (
        <div className="flex flex-col items-center justify-center text-center pb-10 bg-gray-100 min-h-screen">
            <h1 className="text-[48px] font-bold mt-10">Our All Plants</h1>

            <div className="flex justify-between w-full lg:px-60 p-6 items-center">
                <h1 className="text-3xl font-semibold">
                    ({searchedPlants.length}) Plant Found
                </h1>
                <label className="input input-bordered flex items-center gap-2">
                    <input
                        className="grow"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        type="search"
                        placeholder="Search Plants..."
                    />
                </label>
            </div>

            {searchedPlants.length === 0 ? (
                <div className="flex flex-col justify-center items-center py-20">
                    <img
                        src={"/public/logo.svg"}
                        alt="Plant-Error.png"
                        className="w-[250px] mb-6"
                    />
                    <h1 className="text-black text-[36px] font-semibold mb-2">
                        OOPS!! Plant NOT FOUND
                    </h1>
                    <p className="text-[18px] text-center pb-3">
                        The plant you are looking for is not in our system.
                        <br /> Please try a different name.
                    </p>
                    <Link to="/">
                        <button className="btn bg-green-700 text-white font-semibold w-[145px] h-[45px] hover:scale-105 transition ease-in-out">
                            GO BACK!
                        </button>
                    </Link>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-10 px-4 lg:px-20">
                    {searchedPlants.map((plant) => (
                        <PlantCard key={plant.Id} plant={plant} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Plant;
