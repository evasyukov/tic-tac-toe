import { useState, useEffect } from "react"
import { store } from "../store"

export function useStore() {
  // состояние из store
  const [state, setState] = useState(store.getState())

  // отслеживаем изменения в store
  useEffect(() => {
    const handleChange = () => {
      setState(store.getState())
    }

    const unsubscribe = store.subscribe(handleChange)
    // отписка при размонтировании
    return () => unsubscribe()
  }, [])

  return state.game
}
