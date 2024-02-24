import { useState } from "react";

function LocalHighScore(props) {
    const [highScore,setHighScore] = useState(localStorage.getItem("highScore")?localStorage.getItem("highScore"):0)
    const [highestAccu, setHighestAccu] = useState(localStorage.getItem("highestAccu")?localStorage.getItem("highestAccu"):0)
    if (props.totalLetters>1000 && highScore<props.speed){
        setHighScore(props.speed);
        setHighestAccu(props.accuracy)
        localStorage.setItem("highestAccu",props.accuracy)
        localStorage.setItem("highScore",props.speed);
    }

    return <div>{`highScore:${highScore}, ${highestAccu}%`}</div>;
}

export default LocalHighScore;
