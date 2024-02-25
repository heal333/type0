import React, { useState } from "react";
import ham from "../../plugs/ham.png";
import leaderboard from "../../plugs/leaderboard.png";
import Settings from "./settings";
import LeaderBoard from "./leaderboard";
function HambergerMenu() {
    3;
    const [showSettings, setShowSettings] = useState(false);
    const [showLeaderBoard, setShowLeaderBoard] = useState(false);
    function openSettings() {
        setShowSettings(true);
    }
    function closeSettings() {
        setShowSettings(false);
    }
    function openLeaderBoard() {
        setShowLeaderBoard(true);
    }
    function closeLeaderBoard() {
        setShowLeaderBoard(false);
    }
    return (
        <>
            <img
                className="hambergerMenu"
                src={ham}
                onClick={openSettings}
            ></img>
            <img
                className="leaderBoard"
                src={leaderboard}
                onClick={openLeaderBoard}
            ></img>
            {showSettings && <Settings closeSettings={closeSettings} />}
            {showLeaderBoard && <LeaderBoard closeLeaderBoard={closeLeaderBoard} />}
        </>
    );
}

export default React.memo(HambergerMenu);
