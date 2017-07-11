// @flow
import type {
  Action,
  CalendarNormalizePayload,
  Interval,
  IdString,
  CalendarState
} from '../types'

export const fillCalendar = (payload: CalendarState): Action =>
  ({
    type: 'calendar/FILL',
    payload
  })

export const setHour = (payload: { day: IdString, interval: Interval }): Action =>
  ({
    type: 'calendar/SET_HOUR',
    payload
  })

export const clearHour = (payload: { day: IdString, interval: Interval }): Action =>
  ({
    type: 'calendar/CLEAR_HOUR',
    payload
  })

export const setDay = (payload: IdString): Action =>
  ({
    type: 'calendar/SET_DAY',
    payload
  })

export const clearDay = (payload: IdString): Action =>
  ({
    type: 'calendar/CLEAR_DAY',
    payload
  })

export const clearAllDays = (): Action =>
  ({
    type: 'calendar/CLEAR_ALL_DAYS'
  })

export const setEventType = (payload: IdString): Action =>
  ({
    type: 'calendar/SET_EVENT_TYPE',
    payload
  })

export const addIntervalToTemporaryStore = (payload: { day: IdString, interval: Interval }): Action =>
  ({
    type: 'calendar/ADD_INTERVAL_TO_TEMPORARY_STORE',
    payload
  })

export const setSelectedIntervals = (payload: any): Action =>
  ({
    type: 'calendar/SET_SELECTED_INTERVALS',
    payload
  })

export const clearTempoparyStore = (): Action =>
  ({
    type: 'calendar/CLEAR_TEMPORARY_STORE'
  })
