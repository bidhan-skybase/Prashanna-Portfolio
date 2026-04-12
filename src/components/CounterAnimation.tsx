import {useInView} from "react-intersection-observer";
import {motion} from "framer-motion";
import CountUp from "react-countup";
import React from "react";

const CounterAnimation = ({ end, label }: { end: number; label: string }) => {
    const [ref, inView] = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });

    return (
        <motion.div
            ref={ref}
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
        >
            <div
                className="text-portfolio-dark-green font-regular text-6xl lg:text-8xl mb-2"
                style={{ fontFamily: "Staatliches" }}
            >
                {inView && <CountUp start={0} end={end} duration={2} />}+
            </div>
            <div
                className="text-gray-500 text-xl lg:text-2xl"
                style={{ fontFamily: "Staatliches" }}
            >
                {label}
            </div>
        </motion.div>
    );
};


export default CounterAnimation;
