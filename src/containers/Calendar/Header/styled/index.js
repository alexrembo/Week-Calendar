import styled from 'styled-components'

export const HoursSectionsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  height: 65%;
  align-self: flex-end;
`
export const HoursSection = styled.div`
  width: 100%;
  border-right: 1px solid;
  &:last-child {
    border-right: 0;
  }
`
export const Main = styled.div`
  display: flex;
  background: #d11216;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #b5b5b5;
  color: white;
  font-weight: 500;
  font-size: 17px;
  text-align: center;
`
export const HeadTitle = styled.div`
  width: 90px;
  border-right: 1px solid;
  display: flex;
  align-items: center;
  justify-content: center;
`