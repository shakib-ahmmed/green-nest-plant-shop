import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import banner1 from "../assets/banner-1.jpg";
import banner2 from "../assets/banner-2.jpg";
import banner3 from "../assets/banner-3.jpg";

const slides = [
    { image: banner1, slogan: "Bring Nature Home", sub: "Discover the joy of indoor plants" },
    { image: banner2, slogan: "Nurture Your Green Space", sub: "Healthy plants, happy life" },
    { image: banner3, slogan: "Grow with Care", sub: "Expert tips for thriving plants" },
];

const HeroSectionMotion = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative w-full h-[80vh]  pt-10 overflow-hidden flex justify-center items-center">
            {slides.map((slide, i) => (
                <motion.img
                    key={i}
                    src={slide.image}
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ zIndex: i === index ? 2 : 1 }} 
                    initial={{ opacity: i === index ? 1 : 0 }}
                    animate={{ opacity: i === index ? 1 : 0 }}
                    transition={{ duration: 1.8, ease: "easeInOut" }}
                    alt={slide.slogan}
                />
            ))}

            <div className="absolute inset-0 bg-black/40"></div>

            <motion.div
                key={slides[index].slogan}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 1.2 }}
                className="absolute z-10 text-center text-white px-4"
            >
                <h1 className="text-4xl md:text-6xl font-bold mb-3 drop-shadow-lg">
                    {slides[index].slogan}
                </h1>
                <p className="text-lg md:text-2xl drop-shadow-md">{slides[index].sub}</p>
            </motion.div>
        </section>
    );
};

export default HeroSectionMotion;
