import React from 'react'
import { BsTwitter, BsInstagram, BsLinkedin , BsGithub } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'
const SocialMedia = () => {
    return (
        <div className='app__social'>
            <div>
                <a href="https://twitter.com/SarahMabrouk13" >
                    <BsTwitter />
                </a>
            </div>
            <div>
                <a href="https://www.linkedin.com/in/sara-mabrouk/">
                    <BsLinkedin />
                </a>
            </div>
            <div>
                <a href="https://www.instagram.com/soo.queen/">
                    <BsInstagram />
                </a>
            </div>
            <div>
                <a href="https://www.facebook.com/profile.php?id=100005024448072">
                    <FaFacebook />
                </a>
            </div>
            <div>
                <a href="https://github.com/Sara-mabrouk">
                    <BsGithub/>
                </a>
            </div>
        </div>
    )
}
export default SocialMedia;