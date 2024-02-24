import { useEffect, useState } from "react";
import React from "react";

let iniTime;
let wrongHit = 0;

function InputChecker(props) {
    let textStream = props.textStream;
    let speed;
    let errorPercentage;
    const [i, setI] = useState(-1);

    useEffect(() => {
        if (i >= 0) {
            document.querySelector(`.ltr${i}`).style.color =
                "var(--visitedLetter)";
        }
    }, [i]);

    useEffect(() => {
        document.querySelector(".inputOverlay").focus();
    }, []);

    function inputHandeler(e) {
        if (textStream[i + 1] === e.target.value) {
            if (i + 1 === 0) {
                iniTime = new Date();
            }
            setI((prev) => prev + 1);
        } else {
            wrongHit += 1;
        }
        e.target.value = "";
        if (i + 1 > 0) {
            speed = (((i + 1) / ((new Date() - iniTime) / 1000)) * 60) / 5;
            errorPercentage = ((i + 1) / (i + 1 + wrongHit)) * 100;
            props.speedDriller(
                speed.toFixed(),
                errorPercentage.toFixed(2),
                i + 1
            );
        }
    }

    return <input className="inputOverlay" onChange={inputHandeler}></input>;
}

export default React.memo(InputChecker);
