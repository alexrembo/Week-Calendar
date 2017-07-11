// @flow
import type { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux';

import type {
  CalendarState,
  Interval
} from './calendar';

import type {
  ModalState
} from './calendar';

export * from './calendar';
export * from './modal';

export type IdString = string;

export type Action =
  { type: 'calendar/FILL', +payload: CalendarState}
| { type: 'calendar/SET_HOUR', +payload: { day: IdString, interval: Interval } }
| { type: 'calendar/CLEAR_HOUR', +payload: { day: IdString, interval: Interval } }
| { type: 'calendar/SET_DAY', +payload: IdString }
| { type: 'calendar/CLEAR_DAY', +payload: IdString }
| { type: 'calendar/CLEAR_ALL_DAYS' }
| { type: 'calendar/CLEAR_TEMPORARY_STORE' }
| { type: 'calendar/SET_EVENT_TYPE', +payload: IdString }
| { type: 'calendar/SET_SELECTED_INTERVALS', +payload: any }
| { type: 'calendar/ADD_INTERVAL_TO_TEMPORARY_STORE', +payload: { day: IdString, interval: Interval } }
| { type: 'calendar/SET_SELECTED_INTERVALS', +payload: any }
| { type: 'modal/SHOW_MODAL', +payload: { component: IdString, message: IdString }  }
| { type: 'modal/HIDE_MODAL' }
| Object
;

export type State = {
  +calendars: CalendarState,
  +modal: ModalState
};

export type Store = ReduxStore<State, Action>;
export type Dispatch = ReduxDispatch<Action>;
