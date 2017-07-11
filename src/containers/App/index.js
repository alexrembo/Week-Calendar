import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import type { Connector } from 'react-redux'
import { Main } from './styled'
import Calendar from '../Calendar'

import * as calendarActions from '../../actions/calendar'

import { getCalendarData } from '../../utils/api'

import type { Dispatch } from '../../types'

type Props = {
  fillCalendar: () => void
};

class App extends Component {
  props: Props;

  componentWillMount() {
    const { fillCalendar } = this.props
    getCalendarData(fillCalendar)
  }
  render() {
    return (
      <Main>
        <Calendar />
      </Main>
    )
  }
}

function mapDispatchToProps(dispatch: Dispatch): {[key: string]: Function} {
  return bindActionCreators({ ...calendarActions }, dispatch)
}

const connector: Connector<{}, Props> = connect(
  null,
  mapDispatchToProps
)

export default connector(App)
