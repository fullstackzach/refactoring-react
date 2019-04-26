import styled from 'styled-components'

export const Tab = styled.div`
  opacity: ${({isDisabled}) => isDisabled ? 0.5 : 1 };
  border-bottom: ${({isActive}) => isActive ? 'solid black' : 'none' };
  height: 30px;
  font-size: 20px;
  font-weight: 600;
  display: inline-block;
  margin: 20px;
`

export const Content = styled.div`
  padding: 20px;
`
