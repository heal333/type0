function LeaderBoard(props) {
    return (
        <>
            <div className="overlay" onClick={props.closeLeaderBoard}>
                <div
                    className="modal"
                    onClick={(e) => e.stopPropagation()}
                ></div>
            </div>
        </>
    );
}

export default LeaderBoard;
