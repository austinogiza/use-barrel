import { closeEmptyState, openEmptyState } from "@/store/actions/orderCreate"
import { useAppDispatch, useAppSelector } from "@/store/hooks"

export const useEmptyState = () => {
  const dispatch = useAppDispatch()
  const emptyState = useAppSelector((state) => state.order.emptyState)

  const closeEmptyStateMode = () => dispatch(closeEmptyState())
  const openEmptyStateMode = () => dispatch(openEmptyState())

  return {
    closeEmptyStateMode,
    openEmptyStateMode,
    emptyState,
  }
}
