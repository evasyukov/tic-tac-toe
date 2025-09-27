import PropTypes from "prop-types"

import FieldLayout from "./FieldLayout"

function Field({
  field,
  SetField,
  currentPlayer,
  SetCurrentPlayer,
  isDraw,
  SetIsDraw,
  isGameEnded,
  SetIsGameEnded,
}) {
  const WIN_PATTERNS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // Варианты побед по горизонтали
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // Варианты побед по вертикали
    [0, 4, 8],
    [2, 4, 6], // Варианты побед по диагонали
  ]

  // функция для хода игрока
  function playerStep(id) {
    if (field[id]) return // проверяем ячейку

    const newField = [...field] // копируем поле
    newField[id] = currentPlayer

    SetField(newField)
    SetCurrentPlayer(currentPlayer === "X" ? "O" : "X")

    if (isWinnerGame(newField)) {
      SetIsGameEnded(true)
    }

    if (isDrawGame(newField)) {
      SetIsGameEnded(true)
      SetIsDraw(true)
    }
  }

  // проверка на наличие победителя
  function isWinnerGame(field) {
    for (let pattern of WIN_PATTERNS) {
      const [a, b, c] = pattern

      // проверяем что все три ячейки заполнены и одинаковы
      if (field[a] && field[a] === field[b] && field[a] === field[c]) {
        SetCurrentPlayer(field[a])
        return true
      }
    }

    return null
  }

  // проверка на ничью
  function isDrawGame(field) {
    let countCell = 0

    for (const cell of field) {
      if (cell !== "") countCell++
    }

    if (countCell === 9) return true
  }

  // возвращаем все значения в старт
  function restartGame() {
    SetField(["", "", "", "", "", "", "", "", ""])
    SetCurrentPlayer("X")
    SetIsGameEnded(false)
    SetIsDraw(false)
  }

  return (
    <FieldLayout
      field={field}
      currentPlayer={currentPlayer}
      isDraw={isDraw}
      isGameEnded={isGameEnded}
      playerStep={playerStep}
      restartGame={restartGame}
    />
  )
}

Field.propTypes = {
  currentPlayer: PropTypes.string,
  isGameEnded: PropTypes.bool,
  isDraw: PropTypes.bool,
  field: PropTypes.array,
}

export default Field
