import React from "react";
import {motion, useScroll, useTransform} from "framer-motion";

export default function Test() {
    const {scrollY}  = useScroll();

    const scaleRight = useTransform(scrollY, [0, 500], [2, 1]);
    const yRight = useTransform(scrollY, [0, 500], ["25vh", "0vh"]);
    const xRight = useTransform(scrollY, [0, 500], ["-25vw", "0vw"]);

    const xLeft = useTransform(scrollY, [0, 500], ["-60%", "0vw"]);

    return (
        <div style={{ width: "100vw", height: "300vh" }}>
            <div
                style={{
                    height: "110vh",
                    display: "flex",
                    position: "sticky",
                    top: "0px",
                }}
            >
                <motion.div
                    className="child"
                    style={{
                        height: "100%",
                        width: "50vw",
                        x: xLeft,
                    }}
                >
                    <h2>Slide In </h2>
                </motion.div>
                <motion.div
                    className="child"
                    style={{
                        height: "100%",
                        width: "50vw",
                        scale: scaleRight,
                        y: yRight,
                        x: xRight,
                    }}
                >
                    <h2>Scroll Down to Zoom Out</h2>
                </motion.div>
            </div>
        </div>
    );
}
