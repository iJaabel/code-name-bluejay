import React, { useState, useCallback, useEffect } from 'react'
import { ClearButton, CountingButton, Debugger, Heading } from "../components"

export default () => {
    const [isHovering, setHovering] = useState(false);
    const [count, setCount] = useState(() => 0);
    const [log, setLog] = useState([]);

    const toggle = () => setHovering(!isHovering);

    const counting = useCallback(() => {
        //rewrite this to work as a loop...
        setTimeout(() => {
            setCount((prevCount) => prevCount + 1);
        }, 50);
    });

    useEffect(() => {
        if (isHovering) counting();
    }, [isHovering, counting]);

    return (
        <div>
            <Heading />
            <CountingButton toggle={toggle} setLog={setLog} count={count} isHovering={isHovering} />
            <ClearButton setCount={count} setLog={setLog} />
            <Debugger isHovering={isHovering} log={log} />
        </div>
    )
}
