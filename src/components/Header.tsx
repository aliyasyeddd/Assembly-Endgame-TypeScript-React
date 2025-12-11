import type { JSX } from 'react'

//So as long as we're returning a JSX element like we would for most functional components we won't need to type a React component,
export default function Header(): JSX.Element {
    return (
        <header>
            <h1>Assembly: Endgame</h1>
            <p>Guess the word within 8 attempts to keep the
                programming world safe from Assembly!</p>
        </header>
    )
}
