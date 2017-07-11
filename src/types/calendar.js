// @flow
import type { IdString } from './'

export type CalendarState = {
  [string]: ?Array<Interval>
};

export type Interval = {
  bt: number,
  et: number
};


export type CalendarMetaState = {
  eventType: ?string,
  temporaryIntervalsStore: Array
};
