import PropTypes from "prop-types"

import InformationLayout from "./InformationLayout"

function Information({ currentPlayer, isGameEnded, isDraw }) {
  return (
    <InformationLayout
      currentPlayer={currentPlayer}
      isGameEnded={isGameEnded}
      isDraw={isDraw}
    />
  )
}

Information.propTypes = {
  currentPlayer: PropTypes.string,
  isGameEnded: PropTypes.bool,
  isDraw: PropTypes.bool,
}

export default Information
