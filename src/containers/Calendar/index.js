// @flow
import React from 'react'
import Header from './Header'
import CalendarTable from './CalendarTable'
import ButtonsContainer from './ButtonsContainer'
import Modal from 'components/shared/Modal/Main'

import {
  Content,
  Main,
  Head
} from './styled'

const Calendar = () =>
  <Content>
    <Head>
      Set Schedule
    </Head>
    <Main>
      <Header />
      <CalendarTable />
    </Main>
    <ButtonsContainer />
    <Modal />
  </Content>

export default Calendar
