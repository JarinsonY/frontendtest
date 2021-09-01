import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { changesAuthStates } from "../firebase/client"

export const USER_STATES = {
    NOT_LOGGED: null,
    NOT_KNOWN: undefined,
}

export default function useUser() {
    const [user, setUser] = useState(USER_STATES.NOT_KNOWN)
    const history = useHistory()

    useEffect(() => {
        changesAuthStates(setUser)
    }, [])

    useEffect(() => {
        user === USER_STATES.NOT_LOGGED && history.push("/login")
    }, [user])

    return user
}
