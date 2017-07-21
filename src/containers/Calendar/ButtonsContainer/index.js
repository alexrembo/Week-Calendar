// @flow
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import type { Connector } from 'react-redux'

import * as modalActions from 'actions/modal'
import * as calendarActions from 'actions/calendar'

import { saveCalendarData } from 'utils/api'

import {
  Main,
  ClearButton,
  SaveButton
} from './styled'

import type { Dispatch, State, CalendarState } from 'types'

type Props = {
  calendar: CalendarState,
  clearAllDays: () => void,
  showModal: (string) => void
};

const ButtonsContainer = ({ calendar, clearAllDays, showModal }: Props) => 
  <Main>
    <ClearButton onClick={ clearAllDays }>
      Clear
    </ClearButton>
    <SaveButton onClick={ () => saveCalendarData(calendar, showModal) }>
      Save Changes
    </SaveButton>
  </Main>

function mapDispatchToProps(dispatch: Dispatch): {[key: string]: Function} {
  return bindActionCreators({ ...calendarActions, ...modalActions }, dispatch)
}

function mapStateToProps(state: State) {
  return {
    ...state.calendar
  }
}

const connector: Connector<{}, Props> = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default connector(ButtonsContainer)
