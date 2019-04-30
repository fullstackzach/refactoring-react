// example Layout.js
import React from 'react'
import styled from 'styled-components'

const Reset = styled.div`
  background-color: white;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  width: 100vw;
  && * {
    text-align: left;
    font-size: 16px;
  }
`

export default ({ children }) => (
  <Reset>
    <div style={{ height: '100%'}}>
      {children}
    </div>
  </Reset>
)