import { useReducer } from 'react'
import { movementMaps } from '../constants/keyMapping'
import Commands from '../interfaces/Commands'

interface KeyAction {
  type: 'KeyUp' | 'KeyDown'
  payload: string
}

interface CommandState {
  movement: Commands[]
}

const useCommandState = () => {
  const keyReducer: React.Reducer<CommandState, KeyAction> = (
    state,
    action
  ) => {
    switch (action.type) {
      case 'KeyDown':
        if (
          movementMaps[action.payload] &&
          !state.movement.includes(movementMaps[action.payload])
        ) {
          return {
            ...state,
            movement: [...state.movement, movementMaps[action.payload]],
          }
        }
        return state
      case 'KeyUp':
        if (movementMaps[action.payload]) {
          return {
            ...state,
            movement: state.movement.filter(
              d => d !== movementMaps[action.payload]
            ),
          }
        }
      default:
        return state
    }
  }

  const initialCommandState: CommandState = { movement: [] }

  const [commandState, dispatch] = useReducer(keyReducer, initialCommandState)

  const handleKeyDown = (e: React.KeyboardEvent) =>
    dispatch({ type: 'KeyDown', payload: e.key })
  const handleKeyUp = (e: React.KeyboardEvent) =>
    dispatch({ type: 'KeyUp', payload: e.key })

  return { commandState, handleKeyDown, handleKeyUp }
}

export default useCommandState
