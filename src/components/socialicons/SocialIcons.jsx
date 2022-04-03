import React from 'react'
// import './socialicons.css'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsYoutube} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'


const SocialIcons = (props) => {
    return (
        <div className={props.position}>
            <a href="https://web.facebook.com/atavares75" target="_blank" rel="noopener noreferrer">
                <BsFacebook />
            </a>
            <a href="https://www.instagram.com/atavares2002/" target="_blank" rel="noopener noreferrer">
                <BsInstagram />
            </a>
            <a href="https://www.linkedin.com/in/atavares2002/" target="_blank" rel="noopener noreferrer">
                <BsLinkedin />
            </a>
            <a href="https://twitter.com/atavares1975" target="_blank" rel="noopener noreferrer">
                <BsTwitter />
            </a>
            <a href="https://www.youtube.com/channel/UCUMltv6fWcvPjCLywiBz0Uw" target="_blank" rel="noopener noreferrer">
                <BsYoutube />
            </a>
            <a href="https://github.com/atavares2002" target="_blank" rel="noopener noreferrer">
                <BsGithub />
            </a>
        </div>
  )
}

export default SocialIcons
