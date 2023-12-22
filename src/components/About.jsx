import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div options={{ max: 45, scale: 1, speed: 450 }}>
          <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[250px] flex justify-evenly items-center flex-col">
            <img src={icon} alt={title} className="w-16 h-16 object-contain" />
            <h3 className="text-white text-[20px] font-bold text-center">
              {title}
            </h3>
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <motion.div className="flex flex-col justify-center items-center">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        My name is Vi Truong and I graduated from Texas A&M University with a
        bachelor of science in Computer Science. I have a strong experience in
        building web applications using React.js, Typescript, .NET and ASP.NET
        Core 8.0 framework. With a passion in problem solving and tackling
        challenging problems, I feel so much power and encouragement whenever I
        can put my ideas into building softwares. I am a very open-minded,
        accountable, and collaborative person who is always ready to learn new
        things and willing to take new challenges. I strongly believe that
        networking and collaboration are the pathway to unlock new
        opportunities, overcome new challenges, and gain new insights.
      </motion.p>
    </motion.div>
  );
};

export default SectionWrapper(About, "about");
