import {useEffect, useRef} from "react";

const LeaderboardIcon = () => {
    const firstBoard = useRef();
    const secondBoard = useRef();
    const thirdBoard = useRef();
    const firstBoardInitialHeight = 145.163333;
    const firstBoardInitialY = 227.7266667;

    const cssTransitionStyle = `0.5s cubic-bezier(0.2, 0.8, 0.2, 1)`;

    useEffect(() => {
        setTimeout(() => {
            firstBoard.current.setAttribute('height', firstBoardInitialHeight);
            // firstBoard.current.setAttribute('y', firstBoardInitialY);
        }, 300)
    }, []);

    return (
        <svg width="253px" height="253px" viewBox="0 0 253 253" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <g id="iconLeaderboard" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="Group" transform="translate(2.000000, 6.000000)" stroke="#000000" strokeWidth="22.22">
                    <rect style={{
                        transition: cssTransitionStyle,
                    }} ref={firstBoard} id="Rectangle" x="11.11" y={firstBoardInitialY}
                          width="75.5654251" height="2"
                          rx="9.09" ry="5"></rect>
                    <rect ref={secondBoard} id="Rectangle" x="162.324575" y="132.11" width="75.5654251" height="98.78"
                          rx="9.09"></rect>
                    <rect ref={thirdBoard} id="Rectangle" x="86.7172874" y="11.11" width="75.5654251" height="219.78"
                          rx="9.09"></rect>
                </g>
            </g>
        </svg>
    );
}

export default LeaderboardIcon;