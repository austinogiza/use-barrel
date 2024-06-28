import {
  CLOSE_CREATE_ORDER,
  CLOSE_EDIT_MODAL,
  CLOSE_EMPTY_STATE,
  CLOSE_SEE_ORDER,
  OPEN_CREATE_ORDER,
  OPEN_EDIT_MODAL,
  OPEN_EMPTY_STATE,
  OPEN_SEE_ORDER,
} from "../actions/actionsTypes"
import { updateObject } from "../utility"

export interface OrderState {
  active: boolean
  createModal?: boolean
  editModal?: boolean
  orderDetailsModal?: boolean
  activeModal?: any
  emptyState?: boolean
}

const initialState: OrderState = {
  active: false,
  createModal: false,
  editModal: false,
  orderDetailsModal: false,
  emptyState: false,
}
const openSeeCartModal = (state: any, action: any) => {
  return updateObject(state, {
    active: true,
    createModal: false,
    editModal: false,
    emptyState: false,
    orderDetailsModal: true,
    activeModal: action.activeModal,
  })
}
const closeSeeCartModal = (state: any, action: any) => {
  return updateObject(state, {
    active: true,
    createModal: false,
    editModal: false,
    activeModal: null,
    emptyState: false,
    orderDetailsModal: false,
  })
}

const openCreateCartModal = (state: any, action: any) => {
  return updateObject(state, {
    active: true,
    createModal: true,
    editModal: false,
    orderDetailsModal: false,
    emptyState: false,
  })
}
const closeCreateCartModal = (state: any, action: any) => {
  return updateObject(state, {
    active: true,
    createModal: false,
    editModal: false,
    orderDetailsModal: false,
    emptyState: false,
  })
}

const openEditModal = (state: any, action: any) => {
  return updateObject(state, {
    active: true,
    createModal: false,
    editModal: true,
    orderDetailsModal: false,
    activeModal: action.activeModal,
    emptyState: false,
  })
}
const closeEditModal = (state: any, action: any) => {
  return updateObject(state, {
    active: true,
    createModal: false,
    editModal: false,
    orderDetailsModal: false,
    activeModal: null,
    emptyState: false,
  })
}
const openEmptyState = (state: any, action: any) => {
  return updateObject(state, {
    active: true,
    createModal: false,
    editModal: false,
    orderDetailsModal: false,
    emptyState: true,
  })
}
const closeEmptyState = (state: any, action: any) => {
  return updateObject(state, {
    active: true,
    createModal: false,
    editModal: false,
    orderDetailsModal: false,
    emptyState: false,
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

    case OPEN_EMPTY_STATE:
      return openEmptyState(state, action)

    case CLOSE_EMPTY_STATE:
      return closeEmptyState(state, action)

    default:
      return state
  }
}

export default orderReducer
