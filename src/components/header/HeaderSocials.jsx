import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiGeeksforgeeks} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className="header_socials">
        <a href="https://www.linkedin.com/in/rahul-saroj2000/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/RahulSaroj9298" target="_blank"> <FaGithub/></a>
        <a href="https://auth.geeksforgeeks.org/user/rahulsarojrs2652/practice/" target="_blank"> <SiGeeksforgeeks/></a>
    </div>
  )
}

export default HeaderSocials