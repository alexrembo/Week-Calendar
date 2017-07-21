import styled from 'styled-components'

export const DayWeek = styled.td`
  width: 90px;
  display: flex;
  color: #d11216;
  font-weight: bold;
  border-right: 1px solid #b5b5b5;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  background-color: ${props => props.active ? '#ff5540' : '#fff'};
`
export const DayContainer = styled.tr`
  display: flex;
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #b5b5b5;
`

export const AllDay = styled.td`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  background: #d11216;
  border-right: 1px solid #b5b5b5;
  cursor: pointer;
`

export const ActiveCircle = styled.img`
  width: 35px;
`

export const MainTable = styled.table`
  width: 100%;
`
