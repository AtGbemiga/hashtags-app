import './App.css';
import { useDispatch } from "react-redux";
import { useState } from 'react';
import { firstClick } from './features/inputSlice';

export const Main = () => {
    const dispatch = useDispatch()
    const [localInput, setlocalInput] = useState("")

    function handleCleanHashtags() {
        dispatch(firstClick(localInput))
    }
    return (
        <section className="input-section">
            <h2>Type in your Hashtags</h2>
            <textarea
                value={localInput}
                onChange={(e)=> setlocalInput(e.target.value)}
                maxLength={490}
                placeholder='#madebyGbemiga'
            />
            <button className="clean-btn" onClick={handleCleanHashtags}>Clean Hashtags</button>
        </section>
    )
}