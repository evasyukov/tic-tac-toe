import "./Information.css"

function InformationLayout({ currentPlayer, isGameEnded }) {
  return (
    <>
      <div className="information">
        {/* если я не ошибаюсь, так делать не рекомендуется, но я решил выделить  currentPlayer немного
            хотя дипсик сказал, что так правильно :)*/}
        <div className="information_about_step">
          Сейчас ход: {<span className={`${currentPlayer.toLowerCase()}`}>{currentPlayer}</span>}
        </div>

        {isGameEnded && (
          <div className="information_about_result">
            Игра окончена! Победил {<span className={`${currentPlayer.toLowerCase()}`}>{currentPlayer}</span>}
          </div>
        )}
      </div>
    </>
  )
}

export default InformationLayout
