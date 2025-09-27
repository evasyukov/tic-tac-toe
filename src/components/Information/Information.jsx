import InformationLayout from "./InformationLayout"

function Information({
  currentPlayer,
  isGameEnded,
  isDraw,
}) {
  return (
    <InformationLayout
      currentPlayer={currentPlayer}
      isGameEnded={isGameEnded}
      isDraw={isDraw}
    />
  )
}

export default Information
