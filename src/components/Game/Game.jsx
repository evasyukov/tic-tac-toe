import { useState } from "react"
import GameLayout from "./GameLayout"

function Game() {
  const [currentPlayer, SetCurrentPlayer] = useState("X") // состояние очереди хода
  const [isGameEnded, SetIsGameEnded] = useState(false) // состояние игры (завершена или нет)
  const [isDraw, SetIsDraw] = useState(false) // состояние ничьи
  const [field, SetField] = useState(["", "", "", "", "", "", "", "", ""]) // состояние поля

  return (
    <GameLayout
      currentPlayer={currentPlayer}
      SetCurrentPlayer={SetCurrentPlayer}
      isGameEnded={isGameEnded}
      SetIsGameEnded={SetIsGameEnded}
      isDraw={isDraw}
      SetIsDraw={SetIsDraw}
      field={field}
      SetField={SetField}
    />
  )
}

export default Game
