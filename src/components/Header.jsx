import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import {GiMagnifyingGlass} from 'react-icons/gi'

//nav que contiene todo
const StyledHeader = styled.nav`
  height: 60px;
  display: flex;
  padding: 1rem 1rem;
  z-index:100;
  position:fixed;
  width:100%;
  background: #9995c4;
`
//div del buscador
const Search = styled.div`
  position: relative;
  height: 45px;
  width: 45px;
  background: #fff;
`
//input del buscador 
const TextSearch = styled.input`
  border: 0;
  background-color: #fff;
  font-size: 18px;
  /* padding: 10px; */
  height: 43px;
  margin: 0;
  width: ${({search}) => (search ? '200px' : '40px' )};
  transition: width 0.3s ease;
  

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
  transform:${({search}) => (search ? 'translateX(204px)' : 'translateX(0)' )};
  transition: transform 0.3s ease;
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
  const [search, setSearch] = useState(false)

  const input = useRef(null)
  function Unfold(){
    setSearch(!search)
    input.current.focus()
  }


  return (
    <StyledHeader>
      este es el header
      <Search>
        <TextSearch search={search} ref={input}/>
        <Btn search={search}  onClick={Unfold}>
          <Icon/>
        </Btn>
      </Search>
    </StyledHeader>
  )
}

export default Header
