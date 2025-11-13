import "./Field.css"
import { store } from "../../store"
import { useStore } from "../../hooks/useStore"

export function Field() {
  const state = useStore()

  // хода игрока
  function playerStep(id) {
    if (state.field[id] || state.isGameEnded) return

    store.dispatch({ type: "PLAYER_STEP", payload: id })
  }

  // сбрасываем значения состония
  function restartGame() {
    store.dispatch({ type: "RESTART_GAME" })
  }

  return (
    <div className="field">
      {!state.isGameEnded && (
        <ul className="field_list">
          {state.field.map((item, index) => (
            <li key={index} onClick={() => playerStep(index)}>
              {item}
            </li>
          ))}
        </ul>
      )}
      {state.isGameEnded && (
        <div className="field_restart-game">
          <button className="restart-game" onClick={() => restartGame()}>
            Начать заново
          </button>
        </div>
      )}
    </div>
  )
}
