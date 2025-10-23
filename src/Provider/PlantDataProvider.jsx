import React, { useState, useEffect } from "react";
import { PlantContext } from "./PlantContext";

export const PlantDataProvider = ({ children }) => {
    const [plants, setPlants] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/plant-data.json")
            .then((res) => res.json())
            .then((data) => {
                setPlants(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Failed to load plant data", err);
                setLoading(false);
            });
    }, []);

    return (
        <PlantContext.Provider value={{ plants, loading }}>
            {children}
        </PlantContext.Provider>
    );
};
