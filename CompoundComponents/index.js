import React, { useState } from 'react'



const Tab = ({ children }) => {
  const isDisabled = false;
  const isActive = false;
  const style = isDisabled ?
    styles.disabledTab : isActive ? styles.activeTab : styles.tab

  return (
    <div style={style}>
      {children}
    </div>
  )
}

const Tabs = ({ children }) => {
  [activeIndex, setActiveIndex] = useState(0)
  return <div>{children}</div>
}

const TabList = ({ children }) => {
  return <div>{children}</div>
}

const Content = ({ children }) => {
  return (
    <div style={styles.content}>
      {children}
    </div>
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
