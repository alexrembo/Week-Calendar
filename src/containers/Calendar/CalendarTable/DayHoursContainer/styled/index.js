import styled from 'styled-components'

export const Main = styled.td`
  display: flex;
  width: 100%;
`
export const DayHour = styled.div`
  cursor: pointer;
  width: 100%;
  background: #fff;
  border-right: 1px solid #b5b5b5;
  background-color: ${props => props.active ? '#ff5540' : '#fff'};
  &:last-child {
    border-right: 0;
  }
`
