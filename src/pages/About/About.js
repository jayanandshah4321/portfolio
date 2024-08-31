import { motion } from 'framer-motion'
import React, { useState, useEffect } from 'react'
import SectionHeading from '../../components/SectionHeading/SectionHeading'
import AboutStyle from './AboutStyle';
import axios from "../../axios/axiosInstance"
import Spinner from "../../components/Spinner/Spinner"


const aboutAnimate = {
    initial: {
        x: "-100vw",
        opacity: 0,
        transition: {
            duration: 1,
            type: "spring"
        }
    },
    animate: {
        x: "0",
        opacity: 1,
        transition: {
            duration: 1,
            type: "spring"
        }
    },
    exit: {
        x: "100vw",
        opacity: 0,
        transition: {
            duration: 1,
            type: "spring"
        }
    }
}
const About = () => {

    const about ="I am a Full Stack Developer with a passion for building web applications. I have experience in developing web applications using React, Node.js, Express.js, and MongoDB. I am a quick learner and always eager to learn new technologies. I am a team player and have experience working in a team environment. I am always looking for opportunities to work on challenging projects and improve my skills.I am also a competitive programmer and have a good understanding of data structures and algorithms. I have a good problem-solving ability."

    const email = 'jayanand95shah@gmail.com';

    const copyToClipboard = () => {
      navigator.clipboard.writeText(email)
        .then(() => {
          alert('Email copied to clipboard!');
        })
        .catch((err) => {
          console.error('Failed to copy text: ', err);
        });
    };


    return (
        <AboutStyle as={motion.div}
            animate="animate"
            initial="initial"
            exit="exit"
            variants={aboutAnimate}>
            <SectionHeading isSecondary>ABOUT</SectionHeading>
            <p className="about_content">
                        {about}
            </p>
            
            <a onClick={copyToClipboard} href="mailto:jayanand95shah@gmail.com" className="about_link">Drop a note</a>
        </AboutStyle>
    )
}

export default About