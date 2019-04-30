import React, { useState } from 'react'
import * as S from './styles'

const Tabs = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  
  const renderTabs = () => {
    return data.map((tab, index) => {
      const isActive = index === activeIndex
      const handleSetActive = () => setActiveIndex(index)
      return <S.Tab 
        key={tab.label} 
        isActive={isActive}
        onClick={handleSetActive}
      >{tab.label}</S.Tab>
    })
  }

  const renderContent = () => {
    const tab = data[activeIndex]
    return <S.Content>{tab.description}</S.Content>
  }

  return (
    <div>
      {renderTabs()}
      {renderContent()}
    </div>
  )
}

const App = () => {
  const tabData = [
    {
      label: 'Superman',
      description: <p>The Man of Steel - Flys through the air and lifts heavy things</p>
    },
    {
      label: 'Spiderman',
      description: <p>Swings through the city using his web</p>
    },
    {
      label: 'Batman',
      description: <p>The Dark Knight - of course</p>
    }
  ]
  return (
    <>
      <Tabs data={tabData} />
    </>
  )
}

export default App
