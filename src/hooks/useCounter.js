
import { useEffect, useState } from "react"

const useCounter = (count) => {
    const [counter, setCounter] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((prev) => prev + 1)

        }, 2)
        if (counter >= count) {
            clearInterval(interval)
        }
        return () => {
            clearInterval(interval)
        }
    }, [counter, count])
    return counter
}

export default useCounter