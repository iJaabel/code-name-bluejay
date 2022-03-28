import React from 'react'

export default ({ toggle, setLog, count, isHovering }) => (
    <div>
        <button
            className="hoverBtn"
            onMouseEnter={toggle}
            onMouseLeave={() => {
                toggle();
                setLog((prevLog) => [...prevLog, `\n hover lap times ${count + 1} `]);
            }}
        >
            {isHovering
                ? `counting... ${count}`
                : `Hover over yellow to start counting from ${count}`}
        </button>
    </div>
)

