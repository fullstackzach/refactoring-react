import styled from 'styled-components'

export const Tab = styled.div`
  opacity: ${({isDisabled}) => isDisabled ? 0.5 : 1 };
  border-bottom: ${({isActive}) => isActive ? 'solid black' : 'none' };
  height: 30px;
  display: inline-block;
  margin: 20px;
`

export const Content = styled.div`
  margin: 20px;
`
