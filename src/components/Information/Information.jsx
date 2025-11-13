import "./Information.css"
import { useStore } from "../../hooks/useStore"

export function Information() {
  const state = useStore()

  return (
    <div className="information">
      <div className="information_win-counter">
        <p>
          Счет: <span className="x">{state.winCounter[0]} </span> :{" "}
          <span className="o">{state.winCounter[1]} </span>
        </p>
      </div>

      {!state.isGameEnded && (
        <div className="information_game-status">
          Ходит:{" "}
          <span className={`${state.currentPlayer.toLowerCase()}`}>
            {state.currentPlayer}
          </span>
        </div>
      )}

      {state.isGameEnded && (
        <div className="information_game-status">
          Игра окончена!{" "}
          {!state.isDraw ? (
            <p className={`${state.currentPlayer.toLowerCase()}`}>
              Победа: {state.currentPlayer}
            </p>
          ) : (
            <p>Ничья</p>
          )}
        </div>
      )}
    </div>
  )
}
