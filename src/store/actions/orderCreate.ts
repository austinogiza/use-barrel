import {
  CLOSE_CREATE_ORDER,
  CLOSE_EDIT_MODAL,
  CLOSE_SEE_ORDER,
  OPEN_CREATE_ORDER,
  OPEN_EDIT_MODAL,
  OPEN_SEE_ORDER,
} from "./actionsTypes"

export const openCreateOrderModal = () => {
  return {
    type: OPEN_CREATE_ORDER,
  }
}
export const closeCreateOrderModal = () => {
  return {
    type: CLOSE_CREATE_ORDER,
  }
}

export const openEditInvoiceModal = () => {
  return {
    type: OPEN_EDIT_MODAL,
  }
}
export const closeEditInvoiceModal = () => {
  return {
    type: CLOSE_EDIT_MODAL,
  }
}
export const openInvoiceDetailModal = () => {
  return {
    type: OPEN_SEE_ORDER,
  }
}
export const closeInvoiceDetailModal = () => {
  return {
    type: CLOSE_SEE_ORDER,
  }
}
