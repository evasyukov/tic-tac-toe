import InformationLayout from "./InformationLayout"

function Information({
  currentPlayer,
  SetCurrentPlayer,
  isGameEnded,
  SetIsGameEnded,
}) {
  return (
    <InformationLayout
      currentPlayer={currentPlayer}
      SetCurrentPlayer={SetCurrentPlayer}
      isGameEnded={isGameEnded}
      SetIsGameEnded={SetIsGameEnded}
    />
  )
}

export default Information
