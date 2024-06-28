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
  const openEditModal = () => dispatch(openEditInvoiceModal())
  const closeEditModal = () => dispatch(closeEditInvoiceModal())
  const openDetailModeModal = () => dispatch(openInvoiceDetailModal())
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
