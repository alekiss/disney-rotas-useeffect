import { useState } from "react"
import type { CharatersProps } from "../types/character"

const Home = () => {
    const [character, setCharacter] = useState<CharatersProps | null>(null)
    
    return (
        <div>Mudei</div>
    )
}

export default Home