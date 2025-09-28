import { useState } from "react"
import GameLayout from "./GameLayout"

function Game() {
  const [currentPlayer, SetCurrentPlayer] = useState("X") // состояние очереди хода
  const [isGameEnded, SetIsGameEnded] = useState(false) // состояние игры (завершена или нет)
  const [isDraw, SetIsDraw] = useState(false) // состояние ничьи
  const [field, SetField] = useState(["", "", "", "", "", "", "", "", ""]) // состояние поля
  const [winCounter, SetWinCounter] = useState([0, 0]) // счетчик побед - X:O
  
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
      winCounter={winCounter}
      SetWinCounter={SetWinCounter}
    />
  )
}

export default Game
