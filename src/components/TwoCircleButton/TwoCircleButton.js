import React from 'react'
import TwoCircleButtonStyle from './TwoCircleButtonStyle'

const TwoCircleButton = (props) => {
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
  return (
    <TwoCircleButtonStyle className={props.className} onClick={props.buttonClicked}>
        <a onClick={props.type!=='project' ? copyToClipboard : null} href={props.link} class="hire_me_button">{props.text}</a>
        <div className="circle_button circle_1"></div>
        <div className="circle_button circle_2"></div>
    </TwoCircleButtonStyle>
  )
}

export default TwoCircleButton