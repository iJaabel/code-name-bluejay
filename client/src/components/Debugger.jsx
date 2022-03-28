import React from 'react'

export default ({ isHovering, log }) => (
    <div>
        <pre>is hovering: {isHovering.toString()}</pre>
        <pre>log of hovering counting: {log}</pre>
    </div>
)

