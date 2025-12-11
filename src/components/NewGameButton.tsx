import type { JSX } from 'react'

type NewGameButtonProps = {
    //This is how you type a function prop that takes no parameters and returns nothing.
    // if parameters  (name: string) => number
    isGameOver: boolean,
    startNewGame: () => void
}

export default function NewGameButton({ isGameOver, startNewGame }: NewGameButtonProps): JSX.Element | null {
    if (!isGameOver) {
        return null
    } else {
        return (
            <button className="new-game" onClick={startNewGame}>
                New Game
            </button>
        )
    }
}