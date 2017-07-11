import { CALENDAR_DATA_FILE_URL, API_URL } from '../constants/constants'

export const getCalendarData = fillCalendar => {
  fetch(CALENDAR_DATA_FILE_URL)
    .then(response => response.json())
    .then(calendarData=> fillCalendar(calendarData))
}

export const saveCalendarData = (calendarData, showModal) => {
  const myHeaders = new Headers()
  myHeaders.append('Content-Type', 'application/json')
  fetch(API_URL, {
    method: 'POST',
    headers: myHeaders,
    mode: 'cors',
    cache: 'default',
    body: JSON.stringify(calendarData)
  })
  .then(() => showModal({ component: 'InformationAlert', message: 'Data saved!' }))
}
