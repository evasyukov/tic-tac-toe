import PropTypes from "prop-types"

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
  winCounter,
  SetWinCounter,
}) {
  return (
    <div className="game">
      <Information
        currentPlayer={currentPlayer}
        isGameEnded={isGameEnded}
        isDraw={isDraw}
        winCounter={winCounter}
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
        winCounter={winCounter}
        SetWinCounter={SetWinCounter}
      />
    </div>
  )
}

GameLayout.propTypes = {
  currentPlayer: PropTypes.string,
  isGameEnded: PropTypes.bool,
  isDraw: PropTypes.bool,
  field: PropTypes.array,
  winCounter: PropTypes.array,
}

export default GameLayout
