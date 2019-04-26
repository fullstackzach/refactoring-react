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
  * {
    text-align: left;
    font-size: 16px;
  }
`

export default ({ children }) => (
  <Reset>
    {children}
  </Reset>
)