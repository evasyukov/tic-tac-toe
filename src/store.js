import { reducerGame } from "./reducer"

const createStore = (reducer) => {
  let state
  let listeners = [] // массив функций-подписчиков

  const getState = () => state

  const dispatch = (action) => {
    state = reducer(state, action)
    // уведомляем всех подписчиков об изменении состояния
    listeners.forEach((listener) => listener())
  }

  // подписка на изменения
  const subscribe = (listener) => {
    listeners.push(listener)
    // возвращаем функцию отписки (опционально, но полезно)
    return () => {
      listeners = listeners.filter((l) => l !== listener)
    }
  }

  // инициализация начального состояния
  dispatch({})

  return {
    getState,
    dispatch,
    subscribe,
  }
}
export const store = createStore(reducerGame)
