import { useState, useEffect } from 'react'
import { ClearButton, CountingButton, Debugger, Heading } from "../components"

export default () => {
    const [isHovering, setHovering] = useState(false);
    const [count, setCount] = useState(() => 0);
    const [log, setLog] = useState([]);

    const toggle = () => setHovering(!isHovering);

    useEffect(() => {
        let counter = null
        if (isHovering) {
            counter = setInterval(() => {
                setCount((prevCount) => ++prevCount);
            }, 50)
        }
        return () => clearInterval(counter)
    }, [isHovering])

    return (
        <div>
            <Heading />
            <CountingButton toggle={toggle} setLog={setLog} count={count} isHovering={isHovering} />
            <ClearButton setCount={setCount} setLog={setLog} />
            <Debugger isHovering={isHovering} log={log} />
        </div>
    )
}
