import { playerStep, restartGame } from "../../reducer"
import { store } from "../../store"
import { useStore } from "../../hooks/useStore"

import "./Field.css"

export function Field() {
  const state = useStore()

  // хода игрока
  function stepPlayers(id) {
    if (state.field[id]) return

    store.dispatch(playerStep(id))
  }

  // сбрасываем значения состония
  function gameOver() {
    store.dispatch(restartGame())
  }

  return (
    <div className="field">
      {!state.isGameEnded && (
        <ul className="field_list">
          {state.field.map((item, index) => (
            <li key={index} onClick={() => stepPlayers(index)}>
              {item}
            </li>
          ))}
        </ul>
      )}
      {state.isGameEnded && (
        <div className="field_restart-game">
          <button className="restart-game" onClick={() => gameOver()}>
            Начать заново
          </button>
        </div>
      )}
    </div>
  )
}
