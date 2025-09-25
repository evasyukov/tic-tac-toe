import InformationLayout from "./InformationLayout"

function Information({
  currentPlayer,
  SetCurrentPlayer,
  isGameEnded,
  SetIsGameEnded,
  isDraw,
}) {
  return (
    <InformationLayout
      currentPlayer={currentPlayer}
      SetCurrentPlayer={SetCurrentPlayer}
      isGameEnded={isGameEnded}
      SetIsGameEnded={SetIsGameEnded}
      isDraw={isDraw}
    />
  )
}

export default Information
