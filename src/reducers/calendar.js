// @flow
import { combineReducers } from 'redux'
import R from 'ramda'

import type { CalendarState, Action, CalendarMetaState } from '../types'

import { daysMinutesIntervals } from './../constants/constants'

import { sortingIntervalsByRise } from './../utils/helpers'

function calendar(state: CalendarState = {}, action: Action) {
  switch (action.type) {
    case 'calendar/FILL':
      return action.payload
    case 'calendar/SET_HOUR':
      return { 
        ...state,
        [action.payload.day]: R.sort(sortingIntervalsByRise, 
          R.concat(state[action.payload.day], [action.payload.interval])
        )        
      }
    case 'calendar/CLEAR_HOUR':
      return { 
        ...state,
        [action.payload.day]: [
          ...state[action.payload.day].filter(item => !R.equals(item, action.payload.interval))
        ]
      }
    case 'calendar/SET_DAY':
      return { 
        ...state,
        [action.payload]: [...daysMinutesIntervals]
      }
    case 'calendar/CLEAR_DAY':
      return { 
        ...state,
        [action.payload]: []
      }
    case 'calendar/CLEAR_ALL_DAYS': 
      return R.mapObjIndexed(() => [], state)
    case 'calendar/SET_SELECTED_INTERVALS': {
      const updateEveryInterval = (value, day, calendar) => {
        const before = [
          ...calendar[day],
          ...action.payload[day]
        ]
        return R.sort(sortingIntervalsByRise, R.uniq(before))
      }
      return R.mapObjIndexed(updateEveryInterval, state)
    }
    default:
      return state
  }
}

const initialMeta: CalendarMetaState = {
  eventType: null,
  temporaryIntervalsStore: {
    mo: [],
    tu: [],
    we: [],
    th: [],
    fr: [],
    sa: [],
    su: []
  }
}

function meta(state: CalendarMetaState = initialMeta, action: Action) {
  switch (action.type) {
    case 'calendar/SET_EVENT_TYPE':
      return {
        ...state,
        eventType: action.payload
      }
    case 'calendar/ADD_INTERVAL_TO_TEMPORARY_STORE': {
      const { payload: { day, interval } } = action
      return {
        ...state,
        temporaryIntervalsStore: {
          ...state.temporaryIntervalsStore,
         [day]: [
          ...state.temporaryIntervalsStore[day],
          interval
         ] 
        }
      }
    }
    case 'calendar/CLEAR_TEMPORARY_STORE':
      return initialMeta
    default:
      return state
  }
}

export default combineReducers({
  calendar,
  meta
})


