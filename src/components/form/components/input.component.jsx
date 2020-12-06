import { useState, useEffect } from "react"

export default function Input ({ onChange, isClear }) {
    const [value, setValue] = useState('');

    useEffect(() => {
        if (isClear) setValue('');
    }, [isClear]);

    const handleChange = e => {
        setValue(e.target.value);
        onChange(e.target.value);
    }

    return (
        <input type="text" name="input-todo" value={value} onChange={handleChange}/>
    )
}
