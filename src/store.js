import { gameReducer } from "./reducer"
import { configureStore } from "@reduxjs/toolkit"

export const store = configureStore({
  reducer: {
    game: gameReducer,
  },
})
