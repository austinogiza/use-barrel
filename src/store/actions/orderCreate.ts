import {
  CLOSE_CREATE_ORDER,
  CLOSE_EDIT_MODAL,
  CLOSE_EMPTY_STATE,
  CLOSE_SEE_ORDER,
  OPEN_CREATE_ORDER,
  OPEN_EDIT_MODAL,
  OPEN_EMPTY_STATE,
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

export const openEmptyState = () => {
  return {
    type: OPEN_EMPTY_STATE,
  }
}
export const closeEmptyState = () => {
  return {
    type: CLOSE_EMPTY_STATE,
  }
}

export const openEditInvoiceModal = (activeModal?: any) => {
  return {
    type: OPEN_EDIT_MODAL,
    activeModal: activeModal,
  }
}
export const closeEditInvoiceModal = () => {
  return {
    type: CLOSE_EDIT_MODAL,
  }
}
export const openInvoiceDetailModal = (activeModal?: any) => {
  return {
    type: OPEN_SEE_ORDER,
    activeModal: activeModal,
  }
}
export const closeInvoiceDetailModal = () => {
  return {
    type: CLOSE_SEE_ORDER,
  }
}
