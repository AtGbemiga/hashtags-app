import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { cleaned } from "./features/inputSlice";

export const Length = () => {
    const inputValue = useSelector(cleaned)
    const [lengthNo, setLengthNo] = useState(null)

    useEffect(()=> {
        const firstResult = inputValue.split(" ")
        const secondResult = firstResult.filter((value, index) => firstResult.indexOf(value) !== index)
        const thirdResult = secondResult.length
        setLengthNo( thirdResult)
    }, [inputValue])

    return lengthNo >= 1 && (
        <section className="no-of-duplicates-container">
            <h4>No. of duplicates</h4>
            {lengthNo}
        </section>
    )
}
