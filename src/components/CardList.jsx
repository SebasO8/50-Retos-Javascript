import React from 'react'
import styled from 'styled-components'
import Card2 from './Card2'
import Data from  '../info.json'


const CardListUI = styled.div`
  width: 95%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 60px;

  @media(max-width: 425px){
    display: flex;
    justify-content: center;
  }
`



const CardList = () => {
  
  return (
    <CardListUI>
      {
        Data.map(item => <Card2 title={item.title} numberCha={item.id} description={item.description} linkGitH={item.github} linkDeploy={item.deploy} image={item.img} imgRes={item.imgRes} key={item.id}/>)
        

      }
    </CardListUI>
  )
}

export default CardList
