import { useEffect, useState } from "react"
import { reqCharacters } from "../service/characters"

export const useCharacters = () => {

    const [characters, setCharacters] = useState()

    useEffect(() => {
        reqCharacters().then((data) =>{
            setCharacters(data.results)
        })
    }, [])

    return {
        characters,
    }
}