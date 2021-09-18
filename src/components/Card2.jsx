import React, { useState } from 'react'
import styled from 'styled-components'
import {AiOutlineGithub} from 'react-icons/ai'
import {GrDeploy} from 'react-icons/gr'


// div principal
const CardUi = styled.div`
  background: linear-gradient(#ef32d9,#89fffd);
  width: 300px;
  height: 470px;
  border-radius: 25px;
  margin-top: 50px;
  display: grid;
  grid-template-rows: ${({show}) => (show ? 'auto 100px' : '1fr 0' )};
  box-shadow: 0 20px 30px #00000080;
  position: relative;
  overflow: hidden;

  @media(max-width: 320px){
    width: 200px;
    height: 370px;
  }
`

// div de la la imagen
const ImageContainer = styled.div`
  width: 300px;
  position: relative;

  @media(max-width: 320px){
    width: 200px;
  }
`
// imagen
const PrincipalImage = styled.figure`
  position: absolute;
  height: 100%;
  left: 0;
  top: -1px;
  width: 100%;
  margin: 0 0;
  background-image: ${props => props.img};
  
  background-size: center center;
  object-fit: cover;

  @media(max-width: 320px){
    background-image: ${props => props.imgResp};
  }
`
// parte inferior
const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 300px;
  position: relative;

  @media(max-width: 320px){
    width: 200px;
  }
`
// boton para cambiar
const Btn = styled.div`
  padding-top: 4px;
  position: absolute;
  top: 0;
  width: 105px;
  height: 27px;
  background: #fff;
  left: 50%;
  transform: ${({show}) => (show ? 'translate(-50%, -50%)' : 'translate(-50%, -170%)' )};
  border-radius: 25px;
  color: #000;
  cursor: pointer;
  user-select: none;
  overflow-y: hidden;
  z-index: 2;
  transition: 0.7s;
`
//div que contiene los textos de el boton
const BtnText = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr;
  transition: 0.7s;
`
//primer texto del boton 
const Text = styled.span`
  font-size: 20px;
  order: ${({show})=>(show ? '1' : '2')};
`
//segundo texto del boton
const Text2 = styled.span`
  font-size: 20px;
  order:${({show})=>(show ? '2' : '1')};
`
//titulo del reto
const Title = styled.div`
  font-weight: bold;
  font-size: 26px;
  line-height: 26px;
  z-index:1;
  transform: ${({show}) => (show ? 'translateY(0px)' : 'translateY(-400px)'  )};
  transition: transform .9s ease-in;
  color: ${({show}) => (show ? '#000' : '#fff')};

  @media(max-width: 320px){
    font-size: 20px;
    transform: ${({show}) => (show ? 'translateY(0px)' : 'translateY(-315px)'  )};
  }
`
//numero del reto
const NumberChallenge = styled.div`
  margin-top: 5px;
  font-size: 18px;
  line-height: 14px;
  z-index: 1;
  transform: ${({show}) => (show ? 'translateY(0px)' : 'translateY(-390px)'  )};
  transition: transform .9s ease-in;
  color: ${({show}) => (show ? '#000' : '#fff')};

  @media(max-width: 320px){
    font-size: 14px;
    transform: ${({show}) => (show ? 'translateY(0px)' : 'translateY(-315px)'  )};
  }
`
//informacion desplegada
const Info= styled.div`
  padding: 20px 0;
  position: absolute;
  background-color: #000000cc;
  top: 0;
  left: 0;
  width: 100%;
  height: 92%;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 0;
  transform: ${({show}) => ( show ? 'translateY(-472px) ease-in-out': 'translateY(0px) ease-in-out')};
  transition: transform .2s ease-in;
  transition-delay: 0.4s;
  display: ${({show}) =>( show ? 'none' : '')};
  transition: 0.7s;
  
`
//descripcion
const Description = styled.p`
  margin-top: 50px;
  margin-bottom: 15px;

  @media(max-width: 320px){
    margin-top: 30px;
    margin-bottom: 5px;
  }  
`
//descripcion del reto
const DescriptionText = styled.p`
  border: 1px solid #fff;
  height: fit-content;
  padding: 10px 10px;
  border-radius: 20px;
  max-width: 500px;
  width: 250px;
  margin: 0;

  @media(max-width: 320px){
    width: 150px;
    font-size: smaller;
  }
`
//contenedor de links
const ContainerLinks = styled.div`
  margin-top: 20px;
  width: 100%;
  padding: 10px 30px;
  display: flex;
  justify-content: space-around;

  @media(max-width: 320px){
    margin-top: 10px;
  }

`
//links
const DirectLink = styled.a`
  color: #fff;
  display:flex;
  justify-content: space-around;
  cursor: pointer;
  text-decoration: none;
`
//contenedor icono y texto
const ContainerGH = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
//texto de los link
const TextLink = styled.p`
  
 &:hover{
   color: #FF1E1E;
 }
 margin: 0;
`
//icono github
const GitHubLink = styled(AiOutlineGithub)`
  width: 45px;
  height: 50px;
`
//contenedor del icono del deploy
const ContainerDeploy = styled.div`
  width: 45px;
  height: 50px;
  background-color: #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`
//icono deploy
const ImageDeploy = styled(GrDeploy)`
  width: 25px;
  height: 35px;
  color: #fff;
`





const Card2 = (props) => {
  const {title,numberCha,description,linkGitH,linkDeploy,image,imgRes} = props
  const [show, setShow] = useState(true)

  function toggle(){
    setShow(!show)
  }

  return (
    <CardUi show={show}>
      <ImageContainer>
        <PrincipalImage img={image} imgResp={imgRes}></PrincipalImage>
      </ImageContainer>
      <Bottom>
        <Btn show={show} onClick={toggle}>
          <BtnText>
            <Text show={show}>More</Text>
            <Text2 show={show}>Close</Text2>
          </BtnText>
        </Btn>
        <Title show={show}>{title}</Title>
        <NumberChallenge show={show}>RETO #{numberCha}</NumberChallenge>
      </Bottom>
      <Info show={show}>
        <Description>Descripcion: </Description>
        <DescriptionText>{description}</DescriptionText>
        <ContainerLinks>
          <DirectLink href={linkGitH}>
            <ContainerGH>
              <GitHubLink/>
              <TextLink>Ir a Github</TextLink>
            </ContainerGH>
          </DirectLink>
          <DirectLink href={linkDeploy}>
            <ContainerGH>
              <ContainerDeploy>
                <ImageDeploy/>
              </ContainerDeploy>
              <TextLink>Ir al deploy</TextLink>
            </ContainerGH>
          </DirectLink>
        </ContainerLinks>
      </Info>
    </CardUi>
  )
}

export default Card2


