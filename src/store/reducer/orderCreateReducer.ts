import {
  CLOSE_CREATE_ORDER,
  CLOSE_EDIT_MODAL,
  CLOSE_SEE_ORDER,
  OPEN_CREATE_ORDER,
  OPEN_EDIT_MODAL,
  OPEN_SEE_ORDER,
} from "../actions/actionsTypes"
import { updateObject } from "../utility"

export interface OrderState {
  active: boolean
  createModal?: boolean
  editModal?: boolean
  orderDetailsModal?: boolean
}

const initialState: OrderState = {
  active: false,
  createModal: false,
  editModal: false,
  orderDetailsModal: false,
}
const openSeeCartModal = (state: any, action: any) => {
  return updateObject(state, {
    active: true,
    createModal: false,
    editModal: false,
    orderDetailsModal: true,
  })
}
const closeSeeCartModal = (state: any, action: any) => {
  return updateObject(state, {
    active: true,
    createModal: false,
    editModal: false,
    orderDetailsModal: false,
  })
}

const openCreateCartModal = (state: any, action: any) => {
  return updateObject(state, {
    active: true,
    createModal: true,
    editModal: false,
    orderDetailsModal: false,
  })
}
const closeCreateCartModal = (state: any, action: any) => {
  return updateObject(state, {
    active: true,
    createModal: false,
    editModal: false,
    orderDetailsModal: false,
  })
}

const openEditModal = (state: any, action: any) => {
  return updateObject(state, {
    active: true,
    createModal: false,
    editModal: true,
    orderDetailsModal: false,
  })
}
const closeEditModal = (state: any, action: any) => {
  return updateObject(state, {
    active: true,
    createModal: false,
    editModal: false,
    orderDetailsModal: false,
  })
}

const orderReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case OPEN_CREATE_ORDER:
      return openCreateCartModal(state, action)
    case CLOSE_CREATE_ORDER:
      return closeCreateCartModal(state, action)
    case OPEN_SEE_ORDER:
      return openSeeCartModal(state, action)
    case CLOSE_SEE_ORDER:
      return closeSeeCartModal(state, action)
    case CLOSE_EDIT_MODAL:
      return closeEditModal(state, action)
    case OPEN_EDIT_MODAL:
      return openEditModal(state, action)

    default:
      return state
  }
}

export default orderReducer
