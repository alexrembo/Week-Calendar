// @flow
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import type { Connector } from 'react-redux'

import Base from 'components/shared/Modal/Base'

import * as modalActions from '../../../../actions/modal'

import { Button } from '../../styled'

import type { Dispatch, State } from '../../types'

import {
  Wrapper,
  Header,
  Content
} from './styled'

type Props = {
  hideModal: () => void,
  message: string
};

const InformationAlert = ({ hideModal, message }: Props) =>  
  <Base onHide={ hideModal }>
    <Wrapper>
      <Header>
        Information Modal
      </Header>
      <Content>
        { message }
      </Content>
      <Button onClick={ hideModal }>
        Close
      </Button>
    </Wrapper>
  </Base>
 
function mapDispatchToProps(dispatch: Dispatch): {[key: string]: Function} {
  return bindActionCreators({ ...modalActions }, dispatch)
}

function mapStateToProps(state: State) {
  return state.modal
}

const connector: Connector<{}, Props> = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default connector(InformationAlert)
