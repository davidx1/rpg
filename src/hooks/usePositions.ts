const useState = () => {
  const [playerPos, setPlayerPos] = useState(initPos.player)

  const movementKeyState = useRef(keyState.movement)

  useEffect(() => {
    movementKeyState.current = keyState.movement
  }, [keyState.movement])

  useEffect(() => {
    setInterval(() => {
      const len = movementKeyState.current.length
      if (len) {
        setPlayerPos(prevState =>
          movePlaceable(movementKeyState.current[len - 1], prevState)
        )
      }
    }, gamecycle)
  }, [])

  const tilesToDisplay: PlaceableType[] = [
    ...initPos.tiles.map(obj => ({ ...obj, type: 't' })),
    ...initPos.characters.map(obj => ({ ...obj, type: 'c' })),
    { ...playerPos, type: 'p' },
  ]

  return { tilesToDisplay }
}

export default useGameState
