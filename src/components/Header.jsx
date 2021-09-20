import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import {GiMagnifyingGlass} from 'react-icons/gi'

//nav que contiene todo
const StyledHeader = styled.nav`
  height: 60px;
  display: flex;
  padding: 1rem 1rem;
  z-index:100;
  position:fixed;
  align-items: center;
  justify-content: space-between;
  width:100%;
  background: #000;
`
//logo
const Logo = styled.i`
width: 70px;
height: 70px;
background-image: url('https://i.ibb.co/k1vVp9w/Group-1.png');
background-size: cover;
object-fit: fill;
`
const Title = styled.h2`
  color: #fff;
  text-align: center;
  
  @media(max-width: 425px){
    width: 130px;
    margin-right: 43px;
  }
  
`
//div del buscador
const Search = styled.div`
  position: relative;
  height: 45px;
  width: 45px;
  background: #fff;
  right: 36px;
`
//input del buscador 
const TextSearch = styled.input`
  border: 0;
  background-color: #fff;
  font-size: 18px;
  /* padding: 10px; */
  height: 43px;
  margin: 0;
  transform:${({search}) => (search ? 'translateX(-160px)' : 'translateX(0px)' )};
  /* transition: transform 0.3s ease; */
  width: ${({search}) => (search ? '200px' : '40px' )};
  /* transition: width 0.3s ease-out; */
  position: absolute;
  top: 0;
  left: 0;
  &:focus{
    outline: none;
  }
`
//boton 
const Btn = styled.button`
  border: 0;
  cursor: pointer;
  height: 45px;
  width: 45px;
  background-color: #fff;
  font-size: 24px;
  position: absolute;
  top: 0;
  left: 0;
  /* transform:${({search}) => (search ? 'translateX(45px)' : 'translateX(0)' )};
  transition: transform 0.3s ease; */
  display: flex;
  justify-content: center;
  align-items: center;
`
// icono de lupa
const Icon = styled(GiMagnifyingGlass)`
  height: 30px;
  width: 30px;
  transform: rotate(270deg);
`

const Header = () => {
  const [search, setSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState(false)

  const input = useRef(null)
  
  function Unfold(){
    setSearch(!search)
    input.current.focus()
  }

  function filterData(term){
    console.log(term)
  }

  useEffect(() => {
    input.current.addEventListener('input', (e) => filterData(e.target.value))
    return () => {
      input.current.removeEventListener('input', (e) => filterData(e.target.value))
    }
  }, [input])




  return (
    <StyledHeader>
      <Logo/>
      <Title>50 Retos Javascript</Title>
      <Search>
        <TextSearch search={search} ref={input} placeholder='Buscar por título'/>
        <Btn search={search}  onClick={Unfold}>
          <Icon/>
        </Btn>
      </Search>
    </StyledHeader>
  )
}

export default Header
