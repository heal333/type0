import "./App.css";
import TextSection from "./components/textSection/TextSection";
import StatusBar from "./components/statusBar/statusBar";
import { useEffect, useState } from "react";

function App() {
    const [speed, setSpeed] = useState("infinity");
    const [accuracy, setAccuracy] = useState("100.00");
    const [totalLetters, setTotalLetters] = useState(0);




    function speedDriller(speed, accu,totalLetters) {
        setSpeed(speed);
        setAccuracy(accu);
        setTotalLetters(totalLetters)

    }
    return (
        <>
            <TextSection
                speedDriller={speedDriller}
            ></TextSection>
            <StatusBar
                speed={speed}
                accuracy={accuracy}
                totalLetters={totalLetters}
            />
        </>
    );
}

export default App;
