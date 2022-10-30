import styled from "styled-components";

export const Profile = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
width: 100%;


.share-icon-mobile{
    padding: 0.5rem 1rem;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    border-style: dashed ;
    border-color: #d0d5dd;
    position: relative;
    margin-left: 10px;
    display: none;

}

@media screen and (max-width: 768px){
  
    .share-icon{
        display: none;
    }
    
    .share-icon-mobile{
        display: block;
       
    }
}

.user-info{
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding:5px;

    @media screen and (max-width: 768px){
        
    }
    
}




.user{    
width: 88px;
align-self: center;
border-radius: 50%;  

&:hover .user::after{
    content: "";
    position: absolute;

    transform: scale(1);
}
}

`
export const ShareButtonContainer = styled.div`
border: 1px solid red;
/* display: flex;
flex-direction: row; */
`
export const ShareButton = styled.button`
    width: 40px;
    height: 40px;
    border-radius: 100%;
    border-style: dashed;
    border-color: #d0d5dd;
    position: absolute;
    background-color: transparent;
    top: 2rem;
    right: 25%;
    .share-img{
       position: absolute;
       top: 7px;
       right: 7px;
       width: 20px;
    }
    .share-tooltip{
        //border: 1px solid red;
        position: absolute;
        right: 45px;
        top: 10px;
        visibility: hidden;
        width: 80px;
        background-color: black;
        color: #fff;
        text-align: center;
        padding: 2px 0;
        border-radius: 6px;
        z-index: 1;


    }

    .share-tooltip::after{
        content: " ";
        position: absolute;
        top: 50%;
        left: 100%; 
        margin-top: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: transparent transparent transparent black;

    }

    &:hover .share-tooltip{
        visibility: visible;
    }

    @media screen and (max-width: 768px){
 
        display: none;

    }
`