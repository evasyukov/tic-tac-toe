import "./Game.css"

import Information from "../Information/Information"
import Field from "../Field/Field"

function GameLayout({
  currentPlayer,
  SetCurrentPlayer,
  isGameEnded,
  SetIsGameEnded,
  isDraw,
  SetIsDraw,
  field,
  SetField,
}) {
  return (
    <div className="game">
      <Information
        currentPlayer={currentPlayer}
        SetCurrentPlayer={SetCurrentPlayer}
        isGameEnded={isGameEnded}
        SetIsGameEnded={SetIsGameEnded}
        isDraw={isDraw}
      />
      <Field
        field={field}
        SetField={SetField}
        currentPlayer={currentPlayer}
        SetCurrentPlayer={SetCurrentPlayer}
        isGameEnded={isGameEnded}
        SetIsGameEnded={SetIsGameEnded}
        isDraw={isDraw}
        SetIsDraw={SetIsDraw}
      />
    </div>
  )
}

export default GameLayout
