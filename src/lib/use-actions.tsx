import {
  closeCreateOrderModal,
  closeEditInvoiceModal,
  closeInvoiceDetailModal,
  openCreateOrderModal,
  openEditInvoiceModal,
  openInvoiceDetailModal,
} from "@/store/actions/orderCreate"
import { useAppDispatch } from "@/store/hooks"

export const useActions = () => {
  const dispatch = useAppDispatch()

  const closeCreateModal = () => dispatch(closeCreateOrderModal())
  const openCreateModal = () => dispatch(openCreateOrderModal())
  const openEditModal = (modalId?: any) =>
    dispatch(openEditInvoiceModal(modalId))
  const closeEditModal = () => dispatch(closeEditInvoiceModal())
  const openDetailModeModal = (modalId?: any) =>
    dispatch(openInvoiceDetailModal(modalId))
  const closeDetailModeModal = () => dispatch(closeInvoiceDetailModal())

  return {
    closeCreateModal,
    openCreateModal,
    openEditModal,
    closeEditModal,
    openDetailModeModal,
    closeDetailModeModal,
  }
}
