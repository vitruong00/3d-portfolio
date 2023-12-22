import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

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
