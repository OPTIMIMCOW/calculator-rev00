import { useEffect, useState } from "react";

const MultiLineInput = () => {
    const [inputValue, setInputValue] = useState("");
    const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | undefined>(undefined);

    const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        clearTimeout(timeoutId);
        setInputValue(event.target.value);
        console.log({now:inputValue})
        // setTimeoutId(setTimeout(() => handleSubmit(), 5000));
    }

    const handleSubmit = () => {
        // Do something with the input value, such as parse it into a mathematical expression
        console.log(inputValue);
        // console.log(test);
    }

    useEffect(()=>{
        setTimeoutId(setTimeout(() => handleSubmit(), 5000));
    },[inputValue])

    return (
        <form>
            <label>
                Enter your formula:
                <textarea value={inputValue} onChange={handleInputChange} />
            </label>
            <button type="button" onClick={handleSubmit}>Calculate</button>
        </form>
    );
}

export default MultiLineInput;
