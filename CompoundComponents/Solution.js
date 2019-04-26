import React, { useState } from 'react'
import * as S from './styles'

const Tab = ({ children, isActive, isDisabled, activate }) => {
  return (
    <S.Tab isDisabled={isDisabled} isActive={isActive} onClick={() => activate()}>
      {children}
    </S.Tab>
  )
}

const Tabs = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  return React.Children.map(children, (child) => {
    if (child.type === Content) {
      return React.cloneElement(child, { activeIndex })
    } else if (child.type === TabList) {
      return React.cloneElement(child, {
        activeIndex,
        setActiveIndex
      })
    } else {
      return child
    }
  })
}

const TabList = ({ children, activeIndex, setActiveIndex }) => {
  return React.Children.map(children, (child, index) => {
    return React.cloneElement(child, {
      isActive: activeIndex === index,
      activate: () => setActiveIndex(index)
    })
  })
}

const Content = ({ children, activeIndex }) => {
  return (
    <S.Content>
      {children[activeIndex]}
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
      <Tab isDisabled>Spiderman</Tab>
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
