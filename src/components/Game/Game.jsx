import { useState } from "react"
import GameLayout from "./GameLayout"

function Game() {
  const [currentPlayer, SetCurrentPlayer] = useState("X") // состояние очереди хода
  const [isGameEnded, SetIsGameEnded] = useState(false) // состояние игры (завершена или нет)
  const [isDraw, SetIsDraw] = useState(false) // состояние ничьи
  const [field, SetField] = useState(["", "", "", "", "", "", "", "", ""]) // состояние поля

  return <GameLayout />
}

export default Game
