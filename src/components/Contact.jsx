import React from 'react'
import { SectionWrapper } from '../hoc'
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion'
import { contactText, linkedinUrl } from '../constants';
import { linkedin } from '../assets';

import { styles } from '../styles';

const Contact = () => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{ max: 25, scale: 1, speed: 450 }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] items-center'
      >
        <p className={styles.sectionSubText}>GET IN TOUCH</p>
        <h2 className={styles.sectionHeadText}>Contact</h2>
        <p className="mt-4 text-secondary text-[17px] max-w-3xl leadin-[30px]">
          {contactText}
        </p>
        <a href={linkedinUrl} target="_blank" className='flex items-center gap-3 mt-5'>
          <img src={linkedin} alt="linkedin-logo" className='w-[40px] h-[40px]'/>
          <span className='text-[25px]'>Emiel Bloem</span>
        </a>
      </div>
    </motion.div>
  )
}

export default SectionWrapper(Contact, 'contact');