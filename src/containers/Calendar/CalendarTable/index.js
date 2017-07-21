// @flow
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import type { Connector } from 'react-redux'
import R from 'ramda'
import DayHoursContainer from './DayHoursContainer'

import * as calendarActions from 'actions/calendar'

import { daysMinutesIntervals } from 'constants/constants'

import { imagePath } from 'utils/helpers'

import {
  MainTable,
  DayWeek,
  DayContainer,
  AllDay,
  ActiveCircle
} from './styled'

import type { Dispatch, State, CalendarState } from 'types'

type Props = {
  calendar: CalendarState,
  setDay: (string) => void,
  clearDay: (string) => void,
};

class CalendarTable extends Component {
  props: Props;

  selectAllDay = day => {
    const { calendar, setDay, clearDay } = this.props
    if (!R.equals(calendar[day], daysMinutesIntervals)) {
      setDay(day)
    } else {
      clearDay(day)
    }
  }
  render() { 
    const { calendar } = this.props
    return (
      <MainTable>
        {
          Object.keys(calendar).map((day, dayIndex) =>
            <DayContainer key={ dayIndex }> 
              <DayWeek active={ !R.isEmpty(calendar[day]) }>
                { day }
              </DayWeek>
              <AllDay
                onClick={ () => this.selectAllDay(day) }>
                {
                  R.equals(calendar[day], daysMinutesIntervals) &&
                  <ActiveCircle
                    src={ imagePath('check.svg') }
                  />
                }
              </AllDay>
              <DayHoursContainer day={ day } />
            </DayContainer>
          )
        }
      </MainTable>
    )
  }
}

function mapDispatchToProps(dispatch: Dispatch): {[key: string]: Function} {
  return bindActionCreators({ ...calendarActions }, dispatch)
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

export default connector(CalendarTable)
