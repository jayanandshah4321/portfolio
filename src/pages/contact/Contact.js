import React from "react";
import ContactStyle from "./ContactStyle";
import { Link } from "react-router-dom"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import MovingTextContainer from "../../components/ReactMovingTextContainer/MovingTextContainer"
import styled from "styled-components";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import lc from "../../assets/images/leeetcodeicon.avif"

const ModifiedMovingTextContainer = styled(MovingTextContainer)`

@media only screen and (max-width: 336px){
    padding-left: 200%;
}
`;
const Contact = (props) => {

    const email = "jayanand95shah@gmail.com";

    const copyToClipboard = () => {
        navigator.clipboard.writeText(email)
          .then(() => {
            alert('Email copied to clipboard!');
          })
          .catch((err) => {
            console.error('Failed to copy text: ', err);
          });
      };

    // When link is clicked go to the top of the page
    const linkClickHandler = () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0;
    }

    return (
        <ContactStyle>
            <div className="contact">
                <SectionHeading isSecondary={false}>REACH OUT</SectionHeading>
                <button onClick={copyToClipboard} className="contact_mail">
                jayanand95shah@gmail.com
            </button>
                <div className="contact_social_icon">
                    <a href="https://github.com/jayanandshah4321"><GitHubIcon /></a>
                    <a href="https://www.linkedin.com/in/jayanand-shah-774b2a291/"><LinkedInIcon /></a>
                    <a href="https://www.linkedin.com/in/jayanand-shah-774b2a291/"><InstagramIcon /></a>
                    <a href="https://www.linkedin.com/in/jayanand-shah-774b2a291/"><TwitterIcon /></a>
                    <a href="https://leetcode.com/u/Jayanand_-shah4/"><img src={lc} alt="leetcode" /></a>   
                </div>
                <div className="contact_menu_link">
                    <Link onClick={linkClickHandler} to="/">Home</Link>
                    <Link onClick={linkClickHandler} to="/about">About</Link>
                    <Link onClick={linkClickHandler} to="/skill">Skill</Link>
                    <Link onClick={linkClickHandler} to="/projects">Project</Link>
                </div>
            </div>
            <div className="contact_moivng_text_footer">
                <ModifiedMovingTextContainer
                    movingTextText="X Design and Built by Jayanand Shah X"
                    minFontSize="1vw"
                    maxFontSize="16px"
                    movingTextColor="#324235"
                    movingTextFontWeight="900"
                />
            </div>
        </ContactStyle>
    )
}

export default Contact