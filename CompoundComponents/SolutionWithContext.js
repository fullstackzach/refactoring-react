import React, { useState, useContext } from 'react'
import * as S from './styles'

const TabContext = React.createContext()

const Tab = ({ children, isActive, isDisabled, activate }) => {
  return (
    <S.Tab isDisabled={isDisabled} isActive={isActive} onClick={() => !isDisabled && activate()}>
      {children}
    </S.Tab>
  )
}

const Tabs = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  return (
    <TabContext.Provider value={{ activeIndex, setActiveIndex }}>
      {children}
    </TabContext.Provider>
  )
}

const TabList = ({ children }) => {
  const { activeIndex, setActiveIndex } = useContext(TabContext)
  return React.Children.map(children, (child, index) => {
    return React.cloneElement(child, {
      isActive: activeIndex === index,
      activate: () => setActiveIndex(index)
    })
  })
}

const Content = ({ children }) => {
  const { activeIndex } = useContext(TabContext)
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

const tabData = [
  {
    label: 'Superman',
    description: <p>Flys through the air and lifts heavy things</p>
  },
  {
    label: 'Spiderman',
    description: <p>Swings through the city using his web</p>,
    disabled: true
  },
  {
    label: 'Batman',
    description: <p>The Dark Knight - of course</p>
  }
]

// You can still wrap your Compound component and map over the data to like you did in the Plain example
const DataTabs = ({ data }) => 
  <Tabs>
    <TabList>
      {data.map((dataItem) => 
        <Tab isDisabled={dataItem.disabled}>{dataItem.label}</Tab>
      )}
    </TabList>
    <Content>
      {data.map((dataItem) => 
        <TabContent>{dataItem.description}</TabContent>
      )}
    </Content>
  </Tabs>


const App = () => 
    <DataTabs data={tabData} />

export default App
