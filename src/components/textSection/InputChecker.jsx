import { useEffect, useState } from "react";
import React from "react";

let iniTime;
let wrongHit = 0;

function InputChecker(props) {
    let textStream = props.textStream;
    let speed;
    let errorPercentage;
    const [i, setI] = useState(0);

    function currentLetterColor(i, color) {
        document.querySelector(`.ltr${i}`).style.color = color;
    }

    useEffect(() => {
        document.querySelector(".inputOverlay").focus();
    }, []);

    function inputHandeler(e) {
        if (e.key === "Shift") {
        } else if (textStream[i] === e.key) {
            currentLetterColor(i, "var(--visitedLetter)");
            setI((prev) => prev + 1);
        } else if (e.key === "Backspace") {
            if (i > 0) {

                if (
                    document.querySelector(`.ltr${i - 1}`).style
                        .backgroundColor === "grey"
                ) {
                    wrongHit -= 1;
                }
                document.querySelector(`.ltr${i - 1}`).style.backgroundColor =
                null;
                currentLetterColor(i - 1, "var(--unvisitedLetter)");
                setI((prev) => prev - 1);
            }
        } else {
            wrongHit += 1;
            // currentLetterColor(i, "red");
            document.querySelector(`.ltr${i}`).style.backgroundColor = "grey";
            setI((prev) => prev + 1);
        }
        if (i === 0) iniTime = new Date();
        speed =
            (((i + 1 - wrongHit) / ((new Date() - iniTime) / 1000)) * 60) / 5;
        errorPercentage = ((i + 1) / (i + 1 + wrongHit)) * 100;
        props.speedDriller(speed.toFixed(2), errorPercentage.toFixed(2), i + 1);
    }

    return <input className="inputOverlay" onKeyDown={inputHandeler}></input>;
}

export default React.memo(InputChecker);
