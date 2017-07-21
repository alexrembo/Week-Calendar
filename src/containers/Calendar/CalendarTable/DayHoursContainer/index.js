// @flow
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import type { Connector } from 'react-redux'
import R from 'ramda'

import * as calendarActions from 'actions/calendar'

import { daysMinutesIntervals } from 'constants/constants'

import { isAciveInterval } from 'utils/helpers'

import {
  Main,
  DayHour
} from './styled'

import type { Dispatch, State, CalendarState, Interval } from 'types'

type Props = {
  calendar: CalendarState,
  clearHour: () => void,
  setHour: ({ 
    day: string,
    interval: Interval
  }) => void,
  setEventType: (string) => void,
  eventType: string,
  addIntervalToTemporaryStore: ({
    day: string,
    interval: Interval
  }) => void,
  setSelectedIntervals: () => void,
  temporaryIntervalsStore: any,
  clearTempoparyStore: () => void,
  day: string
};

class DayHoursContainer extends Component {
  props: Props;

  selectInterval = interval => {
    const { setHour, clearHour, calendar, day } = this.props
    if (!R.contains(interval, calendar[day])) {
      setHour({ day, interval })
    } else {
      clearHour({ day, interval })
    }
  }
  selectSeveralIntervals = interval => {
    const {
      eventType,
      addIntervalToTemporaryStore,
      setSelectedIntervals,
      temporaryIntervalsStore,
      clearTempoparyStore,
      day
    } = this.props
    if (eventType === 'mousedown') {
      addIntervalToTemporaryStore({ day, interval })
    } else if (eventType === 'mouseup') {
      setSelectedIntervals(temporaryIntervalsStore)
      clearTempoparyStore()
    }
  }
  render() { 
    const {
      calendar,
      setHour,
      setEventType,
      day
    } = this.props
    return (
      <Main
        onMouseDown={ () => setEventType('mousedown') }
        onMouseUp={ () => setEventType('mouseup') }
      >
        {
          daysMinutesIntervals.map((interval, intervalIndex) =>
            <DayHour
              key={ intervalIndex }
              onClick={ () => this.selectInterval(interval) }
              onMouseOut={ () => this.selectSeveralIntervals(interval) }
              active={ isAciveInterval(day, interval, calendar) }
            >
              { '' }
            </DayHour>
          )
        }
      </Main>
    )
  }
}

function mapDispatchToProps(dispatch: Dispatch): {[key: string]: Function} {
  return bindActionCreators({ ...calendarActions }, dispatch)
}

function mapStateToProps(state: State) {
  const {
    calendar,
    meta: {
      eventType,
      temporaryIntervalsStore
    }
  } = state.calendar
  return {
    calendar,
    eventType,
    temporaryIntervalsStore
  }
}

const connector: Connector<{}, Props> = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default connector(DayHoursContainer)
