import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.scss'
import SocialMediaButtons from 'react-social-media-buttons';
import img from '../../Assets/CodeChefChapterDDU logo (1).svg';
import { FaFacebook } from 'react-icons/fa'
const Footer = () => {
    const buttonStyle = {
        backgroundColor: '#00000a',
        borderRadius: '50%'
    }
    const iconStyle = {
        color: '#4c911a',
        width: '10vmin',
        height: '10vmin'
    }
    const links = ['https://www.instagram.com/codechef_ddu/', 'https://www.linkedin.com/company/codechef-ddu-chapter/']
    return (
        <div className="footerFile">
            <div className="footer-top">
                <div className="footer-lists">
                    <ul className="list-1">
                        <li className="list-1-item">Contact Us</li>
                        <li className="list-1-item">Join Us</li>
                        <li className="list-1-item">Events</li>
                        <li className="list-1-item">Home</li>
                    </ul>
                    <div className="img-div">
                        <Link to="./"><img src={img} className="logo" /></Link>
                        <h3 className="footer-head">
                            Codechef DDU Chapter, Dharmsinh Desai University <br /> All Rights Reserved.
                        </h3>
                        <SocialMediaButtons links={links} buttonStyle={buttonStyle} iconStyle={iconStyle} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
