import React, { useState, useEffect } from 'react'
import SkillStyle from './SkillStyle'
import SectionHeading from "../../components/SectionHeading/SectionHeading"
import PercentageDisplayer from '../../components/PercentageDisplayer/PercentageDisplayer'
import axios from "../../axios/axiosInstance"
import { motion } from "framer-motion";
import Spinner from "../../components/Spinner/Spinner";


const skillAnimate = {
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

const Skill = () => {

    const skills = [
        {
            _id: "1",
            title: "HTML",
            percentage: 90
        },
        {
            _id: "2",
            title: "CSS",
            percentage: 80
        },
        {
            _id: "3",
            title: "JavaScript",
            percentage: 70
        },
        {
            _id: "4",
            title: "React",
            percentage: 60
        },
        {
            _id: "5",
            title: "Node",
            percentage: 50
        },
        {
            _id: "6",
            title: "MongoDB",
            percentage: 40
        }
    ]

    return (
        <SkillStyle as={motion.section}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={skillAnimate}>
            <SectionHeading isSecondary>SKILLS</SectionHeading>
            <p className="skill_subheading">Click or hover any to know the percentage</p>
            {
                skills.map((skill, index) => {
                        return <PercentageDisplayer
                            key={skill._id}
                            index_number={index + 1}
                            title={skill.title}
                            percentage={skill.percentage}>
                            {skill.title}
                        </PercentageDisplayer>
                    })}
        </SkillStyle>
    )
}

export default Skill