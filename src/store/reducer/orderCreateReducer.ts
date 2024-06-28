import { CREATE_ORDER, SEE_ORDER } from "../actions/actionsTypes"
import { updateObject } from "../utility"

export interface OrderState {
  active: boolean
  modal: "Create" | "See"
}

const initialState: OrderState = {
  active: false,
  modal: "Create",
}
const seeCartModal = (state: any, action: any) => {
  return updateObject(state, {
    active: true,
    modal: "See",
  })
}

const createCartModal = (state: any, action: any) => {
  return updateObject(state, {
    active: true,
    modal: "Create",
  })
}

const orderReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CREATE_ORDER:
      return createCartModal(state, action)
    case SEE_ORDER:
      return seeCartModal(state, action)

    default:
      return state
  }
}

export default orderReducer
