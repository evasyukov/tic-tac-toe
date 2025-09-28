import PropTypes from "prop-types"

import InformationLayout from "./InformationLayout"

function Information({ currentPlayer, isGameEnded, isDraw, winCounter }) {
  return (
    <InformationLayout
      currentPlayer={currentPlayer}
      isGameEnded={isGameEnded}
      isDraw={isDraw}
      winCounter={winCounter}
    />
  )
}

Information.propTypes = {
  currentPlayer: PropTypes.string,
  isGameEnded: PropTypes.bool,
  isDraw: PropTypes.bool,
  winCounter: PropTypes.array,
}

export default Information
