// @flow
import R from 'ramda'

import type { ModalState, Action } from '../types'

const initialState: ModalState = {
  component: null,
  show: false,
  payload: {}
}

export default function modal(state: ModalState = initialState, action: Action) {
  switch (action.type) {
    case 'modal/SHOW_MODAL':
        return R.assoc('show', true, R.merge(initialState, action.payload))
    case 'modal/HIDE_MODAL':
        return initialState
    default:
        return state
  }
}
