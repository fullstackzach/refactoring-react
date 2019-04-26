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
  const [activeIndex, setActiveIndex] = useState(0)
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
<div>
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
</div>

export default App
