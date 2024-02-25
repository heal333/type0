const rootEle = document.querySelector(":root");

rootEle.style.setProperty(
    "--visitedLetter",
    localStorage.getItem("visitedLetter")
);
rootEle.style.setProperty(
    "--unvisitedLetter",
    localStorage.getItem("unvisitedLetter")
);
rootEle.style.setProperty(
    "--backgroundColor",
    localStorage.getItem("backgroundColor")
);

function Settings(props) {
    function visitedTextColorSelect(e) {
        rootEle.style.setProperty("--visitedLetter", e.target.value);
        localStorage.setItem("visitedLetter", e.target.value);
    }
    function unvisitedTextColorSelect(e) {
        rootEle.style.setProperty("--unvisitedLetter", e.target.value);
        localStorage.setItem("unvisitedLetter", e.target.value);
    }
    function backgroundColorSelect(e) {
        rootEle.style.setProperty("--backgroundColor", e.target.value);
        localStorage.setItem("backgroundColor", e.target.value);
    }
    function resetTheme() {
        localStorage.setItem("visitedLetter", "#808080");
        localStorage.setItem("unvisitedLetter", "#ffffff");
        localStorage.setItem("backgroundColor", "#000000");
        rootEle.style.setProperty("--visitedLetter", "#808080");
        rootEle.style.setProperty("--unvisitedLetter", "#ffffff");
        rootEle.style.setProperty("--backgroundColor", "#000000");
    }
    return (
        <>
            <div className="overlay" onClick={props.closeSettings}>
                <div className="modal" onClick={(e) => e.stopPropagation()}>
                    <label>
                        visited letter color:{" "}
                        <input
                            type="color"
                            onChange={visitedTextColorSelect}
                            value={localStorage.getItem("visitedLetter")}
                        ></input>
                    </label>

                    <label>
                        unvisited letter color:{" "}
                        <input
                            type="color"
                            onChange={unvisitedTextColorSelect}
                            value={localStorage.getItem("unvisitedLetter")}
                        ></input>
                    </label>

                    <label>
                        background color:{" "}
                        <input
                            type="color"
                            onChange={backgroundColorSelect}
                            value={localStorage.getItem("backgroundColor")}
                        ></input>
                    </label>
                    <button onClick={resetTheme}>reset</button>
                </div>
            </div>
        </>
    );
}

export default Settings;
