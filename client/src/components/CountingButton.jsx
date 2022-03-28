export default ({ toggle, setLog, count, isHovering }) => (
    <button
        className="hoverBtn"
        onMouseEnter={() => {
            toggle()
        }}
        onMouseLeave={() => {
            toggle();
            setLog((prevLog) => [...prevLog, `\n hover lap times ${count} `]);
        }}
    >
        {isHovering
            ? `counting... ${count}`
            : `Hover over yellow to start counting from ${count}`}
    </button>
)
