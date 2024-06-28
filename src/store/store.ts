import { configureStore } from "@reduxjs/toolkit"
import { load } from "redux-localstorage-simple"
import authReducer from "./reducer/authReducer"
import orderReducer from "./reducer/orderCreateReducer"

type RootState = {
  auth: ReturnType<typeof authReducer>
  order: ReturnType<typeof orderReducer>
}

type MergedState = {
  histories: {
    [key: string]: any
  }
}

const PERSISTED_KEYS: string[] = []
const loadedState = load({ states: PERSISTED_KEYS }) as Partial<
  RootState & MergedState
>
const tempState: Partial<RootState> = loadedState

export const useBarrelStore = configureStore({
  reducer: {
    auth: authReducer,
    order: orderReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: true,
      serializableCheck: false,
    }),
  devTools: process.env.NODE_ENV === "development",
  preloadedState: tempState,
})

export type AppState = ReturnType<typeof useBarrelStore.getState>
export type AppDispatch = typeof useBarrelStore.dispatch
