import { useState } from "react";

function UserName(props) {
    const [textInput, setTextInput] = useState("");
    async function updateGlobalLeader(e) {
        const updatedLeaderBoard = props.previousLeaderboard;
        const minSpeed = Object.keys(updatedLeaderBoard).reduce((acc, curr) => {
            if (acc > curr) {
                return curr;
            } else {
                return acc;
            }
        }, 1000);
        console.log(minSpeed);
        console.log(updatedLeaderBoard[minSpeed]);
        delete updatedLeaderBoard[minSpeed];
        updatedLeaderBoard[props.speed] = {
            accuracy: props.accuracy,
            user: textInput,
        };
        const response = await fetch(
            "https://type0-a8335-default-rtdb.asia-southeast1.firebasedatabase.app/leaderBoard.json",
            { method: "PUT", body: JSON.stringify(updatedLeaderBoard) }
        );
        console.log(await response.json());
        props.closeUserNameModal();
    }
    return (
        <>
            <div className="overlay" onClick={props.closeUserNameModal}>
                <div
                    className="modal leaderboard"
                    onClick={(e) => e.stopPropagation()}
                >
                    <label>enter you name</label>
                    <input
                        onChange={(e) => setTextInput(e.target.value)}
                        className="nameInput"
                        type="text"
                    ></input>
                    <button onClick={updateGlobalLeader}>submit!</button>
                    <button onClick={props.closeUserNameModal}>cancel</button>
                </div>
            </div>
        </>
    );
}

export default UserName;
