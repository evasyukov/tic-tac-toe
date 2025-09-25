import "./Information.css"

function InformationLayout({ currentPlayer, isGameEnded, isDraw }) {
  return (
    <>
      <div className="information">
        {/* если я не ошибаюсь, так делать не рекомендуется, но я решил выделить  currentPlayer немного
            хотя дипсик сказал, что так правильно :)*/}
        {!isGameEnded && (
          <div className="information_about_step">
            Сейчас ход:{" "}
            <span className={`${currentPlayer.toLowerCase()}`}>
              {currentPlayer}
            </span>
          </div>
        )}

        {isGameEnded && (
          <div className="information_about_result">
            Игра окончена!{" "}
            {!isDraw && (
              <p className={`${currentPlayer.toLowerCase()}`}>
                Победа: {currentPlayer}
              </p>
            )}
            {isDraw && <span>Ничья</span>}
          </div>
        )}
      </div>
    </>
  )
}

export default InformationLayout
