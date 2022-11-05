import styled from "styled-components";

export const MainSection = styled.div`
border: 1px solid red;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
overflow: hidden;

padding: 64px 0px 96px;
gap: 64px;

/* position: absolute; */
/* width: 99vw; */
/* height: 100vh; */
left: 0px;
top: 0px;

/* Base/White */

//background: #FFFFFF;
/* background: green; */


`

export const Header = styled.div`
border: 1px solid red;

`

export const SectionBody = styled.div`
border: 1px solid red;
background: white;

display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px 32px;
gap: 64px;

width: 1280px;
/* height: 800px; */




`

export const Content = styled.div`
border: 1px solid red;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 0px;

width: 1200px;
height: 800px; 


/* Inside auto layout */

flex: none;
order: 0;
align-self: stretch;
flex-grow: 1;


`

export const ContactForm = styled.section`
border:  1px solid red;
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 48px;

width: 720px;


.heading{
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 20px;

width: 100%;
height: 94px;


}

.heading-text{
    border: 1px solid red;
width: 448px;
height: 44px;
font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 36px;
line-height: 44px;
/* identical to box height, or 122% */

letter-spacing: -0.02em;

/* Gray/900 */

color: #101828;

}

.heading-paragraph{
    border: 1px solid red;
width: 720px;
height: 30px;
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 30px;
color: #475467;


/* Inside auto layout */

flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;

}

.form{
    border: 1px solid red;
    display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 32px;

width: 720px;
/* height: 474px; */


/* Inside auto layout */

/* flex: none;
order: 1;
align-self: stretch;
flex-grow: 0; */
}

.form-name{

    border: 1px solid red;
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px;
gap: 24px;

width: 720px;
height: 70px;



}

.form-input{
    display: flex;
    flex-direction: column;
    border: 1px solid red;
    align-items: flex-start;
padding: 0px;
gap: 6px;

width: 348px;
height: 70px;
}

.form-label{
    width: 71px;
height: 20px;

/* Text sm/Medium */

font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 20px;

color: #344054;

}

.fname{
    display: flex;
flex-direction: row;
align-items: center;
padding: 10px 14px;
gap: 8px;

width: 348px;
height: 44px;

/* Base/White */

background: #FFFFFF;
/* Gray/300 */

border: 1px solid #D0D5DD;
/* Shadow/xs */

box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
border-radius: 8px;


}

.form-email{
    border: 1px solid red;
    display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 6px;

width: 720px;
height: 70px;
}

.label-email{

width: 36px;
height: 20px;

font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 20px;

}

.email{
    border: 1px solid red;

    display: flex;
flex-direction: row;
align-items: center;
padding: 10px 14px;
gap: 8px;

width: 100%;
height: 44px;

/* Base/White */

background: #FFFFFF;
/* Gray/300 */

border: 1px solid #D0D5DD;
/* Shadow/xs */

box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
border-radius: 8px;

}

.text-area{
    border: 1px solid red;

    display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 6px;

width: 720px;
height: 158px;

}

.form-message{
    border: 1px solid red;
    display: flex;
flex-direction: row;
align-items: flex-start;
padding: 12px 14px;
gap: 8px;

width: 720px;
height: 132px;

/* Base/White */

background: #FFFFFF;
/* Gray/300 */

border: 1px solid #D0D5DD;
/* Shadow/xs */

box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
border-radius: 8px;
}

.permission{
    border: 1px solid red;
    display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px;
gap: 12px;

width: 720px;
height: 24px;
}

.check-permission{
    width: 20px;
height: 20px;

/* Base/White */

background: #FFFFFF;
/* Gray/300 */

border: 1px solid #D0D5DD;
border-radius: 6px;
}

.permission-text{
    display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 2px;

width: 688px;
height: 24px;
}

.submit-btn{
    display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 12px 20px;
gap: 8px;

width: 720px;
height: 48px;

/* Primary/600 */

background: #1570EF;
/* Primary/600 */

border: 1px solid #1570EF;
/* Shadow/xs */

box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
border-radius: 8px;
}
`