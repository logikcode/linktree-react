import styled from "styled-components";

export const Link = styled.p`
box-sizing: border-box;

/* Auto layout */

display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 24px 32px;
gap: 8px;

width: 100%;
height: 76px;

/* Gray/200 */

background: #EAECF0;
/* Gray/200 */

border: 1px solid #EAECF0;
border-radius: 8px;



margin: 25px 0px;


&:hover{
    background: #d0d5dd;
}

`
export const Button = styled.a`
align-self: center;
text-decoration: none;
justify-content: center;
font-weight: 600;
cursor: pointer;

&:active{
    color: #101828;
}

&:visited{
    color: #101828;
}
&:link{
    color: #101828;
}

`

export const Iyalaya = styled.div`
width: 100%;
`