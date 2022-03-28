import React from 'react'

export default ({ setCount, setLog }) => (
    <div>
        <button
            onClick={() => {
                setCount(0);
                setLog([]);
            }}
        >
            reset app
        </button>
    </div>
)

