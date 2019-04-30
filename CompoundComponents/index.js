import React, { useState } from 'react'
import * as S from './styles'

const Tab = ({ children }) => {
  const isDisabled = false;
  const isActive = false;

  return (
    <S.Tab isDisabled={isDisabled} isActive={isActive}>
      {children}
    </S.Tab>
  )
}

const Tabs = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0) // hey react hooks
  return <div>{children}</div>
}

const TabList = ({ children }) => {
  return <div>{children}</div>
}

const Content = ({ children }) => {
  return (
    <S.Content>
      {children}
    </S.Content>
  )
}

const TabContent = ({ children }) => {
  return (
    <div>{children}</div>
  )
}

const App = () => 
  <Tabs>
    <TabList>
      <Tab>Superman</Tab>
      <Tab>Spiderman</Tab>
      <Tab>Batman</Tab>
    </TabList>
    <Content>
      <TabContent>Flys through the air and lifts heavy things</TabContent>
      <TabContent>Swings through the city using his web</TabContent>
      <TabContent>The Dark Knight - of course</TabContent>
    </Content>
  </Tabs>

export default App


/*
  1. get the correct content showing up based on state
  2. Get the tab to show active based on state
  3. get clicks on tabs working
  4. get disabled
*/ 

