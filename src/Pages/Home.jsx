import React, { useContext, useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import PlantCard from "../components/PlantCard";
import { Link } from "react-router-dom";
import { PlantContext } from "../Provider/PlantContext";
import Loading from "./Loading";
import PlantOfTheWeek from "../components/PlantOfTheWeek";

const Home = () => {
    const { plants, loading } = useContext(PlantContext);
    const featuredPlants = plants.slice(0, 8);

    const [plantCareTips, setPlantCareTips] = useState([]);
    const [greenExperts, setGreenExperts] = useState([]);

    useEffect(() => {
        fetch("/plantCareTips.json")
            .then(res => res.json())
            .then(data => setPlantCareTips(data));

        fetch("/green-experts.json")
            .then(res => res.json())
            .then(data => setGreenExperts(data));
    }, []);

    if (loading) return <Loading />

    return (
        <div>

            {/* Herosection */}

            <HeroSection />

            {/* Plant Section */}

            <div className="flex bg-green-50 flex-col items-center justify-center text-center pb-10">
                <h1 className="text-[48px] font-bold mt-10">All Plants</h1>
                <p className="text-gray-500 text-[20px] mb-6">Explore Your Loved Plants</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-10 px-4 lg:px-20">
                    {featuredPlants.map((plant) => (
                        <PlantCard key={plant.plantId} plant={plant} />
                    ))}
                </div>

                <div className="flex justify-center py-10">
                    <Link
                        className="btn bg-[#075a12] text-white font-semibold w-[145px] h-[45px] hover:scale-105 transition ease-in-out"
                        to="/plant"
                    >
                        See All
                    </Link>
                </div>

                {/* Plant Care Tips Section */}
                <div className="bg-green-50 py-16 px-8 text-center">
                    <h2 className="text-3xl font-bold text-green-900 mb-8">Plant Care Tips</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {plantCareTips.map((tip) => (
                            <div
                                key={tip.id}
                                className="bg-white rounded-xl shadow-md hover:shadow-lg transition flex flex-col"
                            >
                                <div className="w-full h-72 md:h-80 overflow-hidden rounded-t-xl">
                                    <img
                                        src={tip.icon}
                                        alt={tip.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-6 flex flex-col flex-1">
                                    <h3 className="text-xl font-semibold text-green-800 mb-2">{tip.title}</h3>
                                    <p className="text-gray-700">{tip.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Green Experts Section */}
                <div className="bg-green-100 py-16 px-8 text-center">
                    <h2 className="text-3xl font-bold text-green-900 mb-8">Meet Our Green Experts</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {greenExperts.map((expert) => (
                            <div
                                key={expert.id}
                                className="bg-green-50 rounded-xl shadow-md hover:shadow-lg transition flex flex-col items-center p-4"
                            >
                                <div className="w-full h-72 md:h-80 overflow-hidden rounded-t-xl mb-4">
                                    <img
                                        src={expert.image}
                                        alt={expert.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h3 className="text-xl font-semibold text-green-800">{expert.name}</h3>
                                <p className="text-gray-700">{expert.specialization}</p>
                            </div>
                        ))}
                    </div>

                    {/* Plant of the week section */}

                    <PlantOfTheWeek />

                </div>
            </div>
        </div>
    );
};

export default Home;
