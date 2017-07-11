// @flow
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import type { Connector } from 'react-redux'
import R from 'ramda'
import Modal from '../../components/shared/Modal/Main'

import * as calendarActions from '../../actions/calendar'
import * as modalActions from '../../actions/modal'

import {
  daysMinutesIntervals,
  hoursSections
} from '../../constants/constants'

import { isAciveInterval, imagePath } from '../../utils/helpers'

import { saveCalendarData } from '../../utils/api'

import {
  Content,
  Main,
  DayWeek,
  DayContainer,
  DayHoursContainer,
  DayHour,
  AllDay,
  Header,
  HoursSectionsContainer,
  HoursSection,
  HeadTitle,
  ActiveCircle,
  ButtonsContainer,
  ClearButton,
  SaveButton,
  Head
} from './styled'

import type { Dispatch, State, CalendarState, Interval } from '../../types'

type Props = {
  calendar: CalendarState,
  clearHour: () => void,
  setHour: ({ 
    day: string,
    interval: Interval
  }) => void,
  setDay: (string) => void,
  clearDay: (string) => void,
  clearAllDays: () => void,
  setEventType: (string) => void,
  eventType: string,
  addIntervalToTemporaryStore: ({
    day: string,
    interval: Interval
  }) => void,
  setSelectedIntervals: () => void,
  temporaryIntervalsStore: any,
  clearTempoparyStore: () => void,
  showModal: (string) => void
};

class Calendar extends Component {
  props: Props;

  selectInterval = (day, interval) => {
    const { setHour, clearHour, calendar } = this.props
    if (!R.contains(interval, calendar[day])) {
      setHour({ day, interval })
    } else {
      clearHour({ day, interval })
    }
  }
  selectSeveralIntervals = (day, interval) => {
    const {
      eventType,
      addIntervalToTemporaryStore,
      setSelectedIntervals,
      temporaryIntervalsStore,
      clearTempoparyStore
    } = this.props
    if (eventType === 'mousedown') {
      addIntervalToTemporaryStore({ day, interval })
    } else if (eventType === 'mouseup') {
      setSelectedIntervals(temporaryIntervalsStore)
      clearTempoparyStore()
    }
  }
  selectAllDay = day => {
    const { calendar, setDay, clearDay } = this.props
    if (!R.equals(calendar[day], daysMinutesIntervals)) {
      setDay(day)
    } else {
      clearDay(day)
    }
  }
  render() { 
    const {
      calendar,
      setHour,
      clearAllDays,
      setEventType,
      showModal
    } = this.props
    return (
      <Content>
        <Head>
          Set Schedule
        </Head>
        <Main>
          <Header>
            <HeadTitle>
              DAY
            </HeadTitle>
            <HeadTitle>
              ALL DAY
            </HeadTitle>
            <HoursSectionsContainer>
              {
                hoursSections.map((hour, hourIndex) =>
                  <HoursSection key={ hourIndex }>
                    { hour }
                  </HoursSection>
                )
              }
            </HoursSectionsContainer>
          </Header>
          {
            Object.keys(calendar).map((day, dayIndex) =>
              <DayContainer
                key={ dayIndex }
              > 
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
                <DayHoursContainer
                  onMouseDown={ () => setEventType('mousedown') }
                  onMouseUp={ () => setEventType('mouseup') }
                >
                  {
                    daysMinutesIntervals.map((interval, intervalIndex) =>
                      <DayHour
                        key={ intervalIndex }
                        onClick={ () => this.selectInterval(day, interval) }
                        onMouseOut={ () => this.selectSeveralIntervals(day, interval) }
                        active={ isAciveInterval(day, interval, calendar) }
                      >
                        { '' }
                      </DayHour>
                    )
                  }
                </DayHoursContainer>
              </DayContainer>
            )
          }
        </Main>
        <ButtonsContainer>
          <ClearButton onClick={ clearAllDays }>
            Clear
          </ClearButton>
          <SaveButton onClick={ () => saveCalendarData(calendar, showModal) }>
            Save Changes
          </SaveButton>
        </ButtonsContainer>
        <Modal />
      </Content>
    )
  }
}

function mapDispatchToProps(dispatch: Dispatch): {[key: string]: Function} {
  return bindActionCreators({ ...calendarActions, ...modalActions }, dispatch)
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

export default connector(Calendar)
