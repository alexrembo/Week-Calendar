import R from 'ramda'

export const isAciveInterval = (day, interval, calendar) =>
  R.contains(true, R.pickBy((val, key) => key === day, calendar)[day].map(item =>
    (interval.bt >= item.bt && interval.et <= item.et) ||
     (interval.bt <= item.bt && interval.et >= item.bt) ||
     (interval.bt <= item.et && interval.et >= item.et) 
  ))

export const imagePath = path => `/icons/${path}`

export const sortingIntervalsByRise = (a, b) => (a.bt - b.bt) && (a.et - b.et)
