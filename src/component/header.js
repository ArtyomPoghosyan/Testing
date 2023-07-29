import { useState } from "react"

export const Header = ({ onAdd }) => {
    const [text, setText] = useState("");
    const [cal_date, setCal_Date] = useState(null);
    const [id,setId] = useState(1)

    const handleAddList = () => {
        setId(id+1)
        onAdd(text,cal_date,id);
        setText("")
    }

    return (
        <div>
            <input type="text" value={text} onChange={(event) => { setText(event.target.value) }} />
            <input type="date"  onChange={(event) =>{ setCal_Date(event.target.value) }} />
            <button onClick={handleAddList}>Add</button>
        </div>
    )
}