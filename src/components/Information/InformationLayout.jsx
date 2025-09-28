import PropTypes from "prop-types"

import "./Information.css"

function InformationLayout({ currentPlayer, isGameEnded, isDraw, winCounter }) {
  return (
    <>
      <div className="information">
        <div className="information_win-counter">
          <p>
            Счет: <span className="x">{winCounter[0]} </span> :{" "}
            <span className="o">{winCounter[1]} </span>
          </p>
        </div>

        {/* если я не ошибаюсь, так делать не рекомендуется, но я решил выделить  currentPlayer немного
            хотя дипсик сказал, что так правильно :)*/}
        {!isGameEnded && (
          <div className="information_game-status">
            Ходит:{" "}
            <span className={`${currentPlayer.toLowerCase()}`}>
              {currentPlayer}
            </span>
          </div>
        )}

        {isGameEnded && (
          <div className="information_game-status">
            Игра окончена!{" "}
            {!isDraw ? (
              <p className={`${currentPlayer.toLowerCase()}`}>
                Победа: {currentPlayer}
              </p>
            ) : (
              <p>Ничья</p>
            )}
          </div>
        )}
      </div>
    </>
  )
}

InformationLayout.propTypes = {
  currentPlayer: PropTypes.string,
  isGameEnded: PropTypes.bool,
  isDraw: PropTypes.bool,
}

export default InformationLayout
