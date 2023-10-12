'use client';
import { motion } from "framer-motion";

import { subtitle, title } from "@/components/primitives";
import { textVariant } from "@/utils/motion";

const ExperienceHead = () => {
    return (
        <motion.div variants={textVariant()}>
            <h1 className={title({ class: "sm:text-sm" })}>
                Our
                <span className={title({ color: "violet" })}>Experience</span>
                InTheWeb
            </h1>
            <p className={subtitle()}>We are a startup based in India, making appearence in the industry recently. We have already worked with quite multiple startups, local bussinesses and freelancers. Many of our clients have seen growth using the power of the Web. The power of the internet once harnessed and used correctly can boost ones growth.</p>
        </motion.div>
    );
};

export default ExperienceHead;