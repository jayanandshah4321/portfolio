import React, { useState, useEffect } from 'react'
import ProjectStyle from './ProjectsStyle'
import SectionHeading from "../../components/SectionHeading/SectionHeading"
import SearchInput from '../../components/InputField/InputField'
import Tag from '../../components/Tag/Tag'
import ProjectCard from '../../components/ProjectCard.js/ProjectCard'
import axios from "../../axios/axiosInstance"
import { motion } from 'framer-motion'
import Spinner from "../../components/Spinner/Spinner"

// Initialy the selected tag will be an empty array
const selectedTag = [];

const projectAnimate = {
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
const Projects = () => {

    const tags = ['Java', 'React', 'Python', 'Node', 'MongoDB', 'Express', 'JavaScript', 'HTML', 'CSS', 'Bootstrap', 'Material-UI', 'Tailwind', 'Redux', 'SASS', 'Styled-Components', 'React-Router', 'React-Hooks', 'React-Context', 'React-Redux']
    const project = [
        {
            _id: "1",
            title: "ONE PICT",
            desc: "A community website for PICT",
            link: "https://one-pict.vercel.app/"
        },
        {
            _id: "2",
            title: "EDTEC platform",
            desc: "A platform for students to learn and teachers to teach",
            link: "https://github.com/jayanandshah4321/EDTEC?tab=readme-ov-file"
        },
        
        {
            _id: "3",
            title: "Video Conferencing App",
            desc: "A video conferencing app which includes websocket and peer to peer connection",
            link: "https://github.com/jayanandshah4321/video-conferance",
        }
    ]


    const [searchValue, setSearchValue] = useState("")
    const [filterData, setFilterData] = useState([]);

    useEffect(() => {
        setFilterData(project)
    }, [])

    const inputChangeHandler = (value) => {

        setSearchValue(value);
        // Check for title
        const updatedFilterData = project.filter(data => {
            console.log(data.title);

            if (data.title.toLowerCase().includes(value.toLowerCase())) {
                return data.title.toLowerCase().includes(value.toLowerCase())
            }
            return data.tag.includes(value.toUpperCase())
        })
        setFilterData(updatedFilterData);

    }


    const tagClickHandler = (tag) => {
        const clickedTag = tag.toUpperCase();
        // Check that if the selectedTag array is empty then we have to display the entire data

        // Check to see that if the selected tag is selected again then we have to diable that tag
        // which means we have to remove the data related to that tag
        if (selectedTag.includes(clickedTag)) {
            const tagIndex = selectedTag.indexOf(clickedTag);
            selectedTag.splice(tagIndex, 1);
        }
        else {
            selectedTag.push(clickedTag);
        }

        if (selectedTag.length <= 0) {
            return setFilterData(project)
        }

        // Displaing the data from the selectedTag
        // Here some property of an array comes very handy.
        const updateData = project.filter(value => selectedTag.some(tag => value.tag.includes(tag)));
        setFilterData(updateData);
    }

    return (
        <ProjectStyle as={motion.section}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={projectAnimate}>
            <SectionHeading isSecondary>PROJECTS</SectionHeading>
            <SearchInput input_type="search" placeholder="Search" inputchange={(value) => inputChangeHandler(value)} value={searchValue} />
            <div className="project_tags">
                {tags.map((tag, index) => {
                    return <Tag
                        handleclick={() => tagClickHandler(tag)}
                        key={index}
                    >{tag}
                    </Tag>
                })}
            </div>

            <div className="project_project_container">
                        {filterData.map((value, index) => {
                            return <ProjectCard key={value._id}
                                project_title={value.title}
                                project_desc={value.desc}
                                project_number={index + 1}
                                button_link={value.link}
                            />

                        })}
                    </div>



        </ProjectStyle>
    )
}

export default Projects