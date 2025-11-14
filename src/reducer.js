import { createSlice } from "@reduxjs/toolkit"
import { isWinner, isDraw } from "./utils.js"

const initialState = {
  currentPlayer: "X", // состояние очереда хода
  isGameEnded: false, // состояние игры (завершена или нет)
  isDraw: false, // состояние ничьи
  field: ["", "", "", "", "", "", "", "", ""], // состояние поля
  winCounter: [0, 0], // счетчик побед - Х:О
}

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    playerStep: (state, action) => {
      const newField = [...state.field] // копируем поле
      if (newField[action.payload]) return // проверяем ячейку
      newField[action.payload] = state.currentPlayer

      const winner = isWinner(newField)
      if (winner) {
        return {
          ...state,
          field: newField,
          isGameEnded: true,
          winCounter:
            state.currentPlayer === "X"
              ? [state.winCounter[0] + 1, state.winCounter[1]]
              : [state.winCounter[0], state.winCounter[1] + 1],
          currentPlayer: newField[action.payload],
        }
      }

      const draw = isDraw(newField)
      if (draw) {
        return {
          ...state,
          field: newField,
          isGameEnded: true,
          isDraw: true,
        }
      }

      // смена игрока
      return {
        ...state,
        field: newField,
        currentPlayer: state.currentPlayer === "X" ? "O" : "X",
      }
    },

    restartGame: (state) => {
      return {
        ...initialState,
        winCounter: state.winCounter,
      }
    },
  },
})

export const { playerStep, restartGame } = gameSlice.actions
export const gameReducer = gameSlice.reducer