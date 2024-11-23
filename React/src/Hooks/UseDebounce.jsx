/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"

export const UseDebounce = (value , timeout) => {
    const[debouncedValue , setDebouncedValue] = useState(value)

    useEffect(() => {
        let timeoutNumber = setTimeout(() => {
            setDebouncedValue(value)
        },timeout)

        return () => {
            clearTimeout(timeoutNumber)
        }
    } , [value])
    return (
        <div>
            {debouncedValue}
        </div>
    )
}