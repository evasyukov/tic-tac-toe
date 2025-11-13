import { isWinner, isDraw } from "./utils.js"

const initialState = {
  currentPlayer: "X", // состояние очереда хода
  isGameEnded: false, // состояние игры (завершена или нет)
  isDraw: false, // состояние ничьи
  field: ["", "", "", "", "", "", "", "", ""], // состояние поля
  winCounter: [0, 0], // счетчик побед - Х:О
}

export function reducerGame(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    // ход игрока
    case "PLAYER_STEP": {
      const newField = [...state.field] // копируем поле
      if (newField[payload]) return // проверяем ячейку
      newField[payload] = state.currentPlayer 

      // проверка победы
      const winner = isWinner(newField)

      // победитель найден
      if (winner) {
        return {
          ...state,
          field: newField,
          isGameEnded: true,
          winCounter:
            state.currentPlayer === "X"
              ? [state.winCounter[0] + 1, state.winCounter[1]]
              : [state.winCounter[0], state.winCounter[1] + 1],
          currentPlayer: newField[payload],
        }
      }

      // проверка ничьей
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
    }
    // рестарт игры
    case "RESTART_GAME":
      return {
        ...initialState,
        winCounter: state.winCounter,
      }
    default:
      return state
  }
}
