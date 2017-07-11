import styled from 'styled-components'
import { Button } from '../../../components/shared/styled'

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 20px 0 0;
`

export const ClearButton = styled(Button)`
  margin-right: 10px;
`

export const SaveButton = styled(Button)`
  background-color: #970000;
`

export const Header = styled.div`
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

export const Main = styled.div`
  display: flex;
  background: #970000;
  width: 599px;
  height: 512px;
  margin: 0 auto;
  padding: 20px 0;
  border: 1px solid #b5b5b5;
  border-radius: 3%;
  flex-direction: column;
`

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
export const DayWeek = styled.div`
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

export const DayContainer = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #b5b5b5;
`
export const DayHoursContainer = styled.div`
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

export const AllDay = styled.div`
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
export const Head = styled.div`
  text-align: center;
  width: 100%;
  margin: 0 0 15px;
  color: #970000;
  font-size: 20px;
`
