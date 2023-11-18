import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion'
import { techStackIntro } from '../constants';

import { styles } from '../styles';
const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Tech</p>
        <h2 className={styles.sectionHeadText}>Stack</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leadin-[30px]"
      >{techStackIntro}</motion.p>
      <div className="flex flex-row flex-wrap justify-center gap-10 mt-10">
        {technologies.map((tech) => (
          <div className="w-28 h-28" key={tech.name}>
            <BallCanvas
              icon={tech.icon}
            />
          </div>
        ))}

      </div>
    </>
  )
}

export default SectionWrapper(Tech, "tech")