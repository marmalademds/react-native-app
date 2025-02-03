import { createContext, useContext, useEffect, useState } from "react"

const BookContext = createContext()

export const BookProvider = ({ children }) => {
    const [selectedBook, setSelectedBook] = useState()

    return (
        <BookContext.Provider
            value={{
                selectedBook,
                setSelectedBook,
            }}
        >
            { children }
        </BookContext.Provider>
    )
}

export const useBook = () => {
    const context = useContext(BookContext)
    return context
}