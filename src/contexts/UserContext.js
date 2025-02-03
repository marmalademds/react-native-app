import { randomUserApi } from "../services";
import { useState, useEffect, useContext, createContext } from 'react'

const UserContext = createContext()

export const UserProvider = ({children}) => {
    const [randomUsers, setRandomUsers] = useState([])
    const [randomUsersIsLoading, setRandomUsersIsLoading] = useState(false)

    const getRandomUsers = async () => {
        setRandomUsersIsLoading(true)
        const users = await randomUserApi()
        setRandomUsers(users.results)
        setRandomUsersIsLoading(false)
        console.log(users.results)
    }

    useEffect(() => {
        const runAsync = async () => {
            await getRandomUsers()
        }
        runAsync()
    }, [])

    return (
        <UserContext.Provider
            value = {{
                randomUsers,
                randomUsersIsLoading,
            }}
        >
            {children}
        </UserContext.Provider>
    )
}

export const useRandomUser = () => {
    const context = useContext(UserContext)
    return context
}
