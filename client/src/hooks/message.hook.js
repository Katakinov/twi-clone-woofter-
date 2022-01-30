import { useCallback } from "react"

export const UseMessage = () => {
    return useCallback( text => {
        if (text) {
            alert(text)
        }
    }, [])
}