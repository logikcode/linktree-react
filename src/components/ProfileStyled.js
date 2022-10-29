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
    display: none;

}

@media screen and (max-width: 768px){
    width: 100%;
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
   

  

    
}
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

    @media screen and (max-width: 768px){
 
        display: none;
    }
`