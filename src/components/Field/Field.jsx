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

    if (isWinner(newField)) {
      SetIsGameEnded(true)
    }
  }

  // проверка на наличие победителя
  function isWinner(newField) {
    for (let pattern of WIN_PATTERNS) {
      const [a, b, c] = pattern

      // проверяем что все три ячейки заполнены и одинаковы
      if (newField[a] && newField[a] === newField[b] && newField[a] === newField[c]) {
        SetCurrentPlayer(newField[a])
        return true
      }
    }

    return null
  }

  return (
    <FieldLayout
      field={field}
      currentPlayer={currentPlayer}
      playerStep={playerStep}
    />
  )
}

export default Field
