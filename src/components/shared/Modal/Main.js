// @flow
import React, { Component, createElement } from 'react'
import { connect } from 'react-redux'
import type { Connector } from 'react-redux'
import * as Modal from './index'

import type { State } from '../../types'

type Props = {
  show: bool,
  component: any,
  payload: Object
};

class Main extends Component {
  props: Props;

  render() {
    const { show, component, payload } = this.props
    if (!show) {
      return null
    }
    return createElement(Modal[component], payload)
  }
}

function mapStateToProps(state: State) {
  return state.modal
}

const connector: Connector<{}, Props> = connect(
  mapStateToProps
)

export default connector(Main)
