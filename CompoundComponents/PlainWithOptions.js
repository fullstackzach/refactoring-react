import React, { useState } from 'react'
import * as S from './styles'

const Tabs = ({ data, tabsOnBottom, disabled }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  
  const renderTabs = () => {
    return data.map((tab, index) => {
      const isActive = index === activeIndex
      const isDisabled = disabled.indexOf(index) > -1
      const handleSetActive = () => !isDisabled && setActiveIndex(index)
      return <S.Tab 
        key={tab.label} 
        isActive={isActive}
        isDisabled={isDisabled}
        onClick={handleSetActive}
      >{tab.label}</S.Tab>
    })
  }

  const renderContent = () => {
    const tab = data[activeIndex]
    return <S.Content>{tab.description}</S.Content>
  }

  return (
    <>
      {tabsOnBottom
      ? <div>
        {renderTabs()}
        {renderContent()}
      </div>
      : <div>
        {renderContent()}
        {renderTabs()}
      </div>}
    </>
  )
}

const App = () => {
  const tabData = [
    {
      label: 'Superman',
      description: <p>Flys through the air and lifts heavy things</p>
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
      <Tabs data={tabData} disabled={[ 1 ]} tabsOnBottom />
    </>
  )
}

export default App