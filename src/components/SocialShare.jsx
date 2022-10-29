import React from 'react'
import styled from 'styled-components'
import slack from "../assets/images/slack.svg"
import github from "../assets/images/Social icon.svg"


function SocialShare() {
  return (
    <Social>
        <a href=""><img src={slack} alt="" /></a>
        <a href=""><img src={github} alt="" /></a>
    </Social>
  )
}
const Social =  styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
width: 100px;
`
export default SocialShare