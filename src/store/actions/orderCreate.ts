import { CREATE_ORDER, SEE_ORDER } from "./actionsTypes"

export const createOrderStart = (active: boolean) => {
  return {
    type: CREATE_ORDER,
    active: active,
  }
}
export const openDetailsOrder = (active: boolean) => {
  return {
    type: SEE_ORDER,
    active: active,
  }
}
export const openCreateModal = (state: any) => {
  return (dispatch: any) => {
    dispatch(createOrderStart(state))
  }
}

export const openDetailsModal = (state: any) => {
  return (dispatch: any) => {
    dispatch(openDetailsOrder(state))
  }
}
