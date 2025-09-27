import PropTypes from "prop-types"

import "./Field.css"

function FieldLayout({ field, playerStep, isGameEnded, restartGame }) {
  return (
    <>
      <div className="field">
        {!isGameEnded && (
          <ul className="field_list">
            {field.map((item, index) => (
              <li key={index} onClick={() => playerStep(index)}>
                {item}
              </li>
            ))}
          </ul>
        )}
        {isGameEnded && (
          <div className="field_restart-game">
            <button className="restart-game" onClick={() => restartGame()}>
              Начать заново
            </button>
          </div>
        )}
      </div>
    </>
  )
}

FieldLayout.propTypes = {
  currentPlayer: PropTypes.string,
  isGameEnded: PropTypes.bool,
  isDraw: PropTypes.bool,
  field: PropTypes.array,
}

export default FieldLayout
