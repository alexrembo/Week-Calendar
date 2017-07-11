// @flow
import type {
  IdString,
  Action
} from '../types'

export const showModal = (payload: { component: IdString, message: IdString } ): Action =>
  ({
    type: 'modal/SHOW_MODAL',
    payload
  })

export const hideModal = (): Action =>
  ({
    type: 'modal/HIDE_MODAL'
  })