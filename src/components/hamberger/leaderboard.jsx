import { useEffect, useState } from "react";

function LeaderBoard(props) {
    // let topTenList = [1, 2, 3, 4];
    const [topTenList,setTopTenList] = useState([])
    async function getTopTen() {
        const response = await fetch(
            "https://type0-a8335-default-rtdb.asia-southeast1.firebasedatabase.app/leaderBoard.json"
        );
        const result = await response.json();
        setTopTenList(Object.entries(result).reverse());
    }
    if (topTenList.length===0){
        getTopTen();
    }

    return (
        <>
            <div className="overlay" onClick={props.closeLeaderBoard}>
                <div
                    className="modal leaderboard"
                    onClick={(e) => e.stopPropagation()}
                >
                    {topTenList.map((ele) => (
                        <div className="rankItem" key={ele[0]}>
                            <div>{ele[1].user}</div>
                            <div>{ele[0]}WPM</div>
                            <div>{ele[1].accuracy}%</div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default LeaderBoard;
