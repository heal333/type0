function LeaderboardSvg(props) {
  return (
    <svg
      className={props.className}
      onClick={props.onClick}
      title="leaderboards"
      width="50px"
      height="50px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          d="M20 19.75H4C3.73939 19.7581 3.47982 19.7135 3.23682 19.619C2.99381 19.5245 2.77234 19.382 2.58566 19.2C2.39897 19.018 2.25089 18.8002 2.15026 18.5596C2.04964 18.3191 1.99853 18.0607 2 17.8V12.27C2.01305 11.7483 2.22951 11.2523 2.60317 10.888C2.97684 10.5237 3.47812 10.3198 4 10.32H6.87C6.9291 10.32 6.98761 10.3084 7.04221 10.2858C7.0968 10.2631 7.14641 10.23 7.1882 10.1882C7.22998 10.1464 7.26313 10.0968 7.28575 10.0422C7.30836 9.98762 7.32 9.92911 7.32 9.87001V7.87001C7.33268 7.35683 7.54219 6.86817 7.90518 6.50519C8.26816 6.14221 8.75682 5.93269 9.27 5.92001H14.83C15.3604 5.92001 15.8691 6.13073 16.2442 6.5058C16.6193 6.88087 16.83 7.38958 16.83 7.92001V12.39C16.83 12.5094 16.8774 12.6238 16.9618 12.7082C17.0462 12.7926 17.1607 12.84 17.28 12.84H20C20.52 12.8556 21.0134 13.0732 21.3756 13.4466C21.7378 13.82 21.9402 14.3198 21.94 14.84V17.8C21.9413 18.0556 21.8921 18.309 21.7952 18.5455C21.6983 18.782 21.5556 18.9971 21.3753 19.1783C21.1951 19.3595 20.9807 19.5033 20.7447 19.6014C20.5087 19.6995 20.2556 19.75 20 19.75ZM4 11.82C3.88239 11.8226 3.77049 11.8712 3.68825 11.9553C3.60601 12.0394 3.55997 12.1524 3.56 12.27V17.8C3.55997 17.9176 3.60601 18.0306 3.68825 18.1147C3.77049 18.1988 3.88239 18.2474 4 18.25H20C20.1176 18.2474 20.2295 18.1988 20.3118 18.1147C20.394 18.0306 20.44 17.9176 20.44 17.8V14.74C20.44 14.6224 20.394 14.5094 20.3118 14.4253C20.2295 14.3412 20.1176 14.2926 20 14.29H17.23C16.7081 14.2902 16.2068 14.0863 15.8332 13.722C15.4595 13.3577 15.243 12.8617 15.23 12.34V7.87001C15.23 7.75067 15.1826 7.63621 15.0982 7.55182C15.0138 7.46742 14.8993 7.42001 14.78 7.42001H9.27C9.15065 7.42001 9.03619 7.46742 8.9518 7.55182C8.86741 7.63621 8.82 7.75067 8.82 7.87001V9.87001C8.82016 10.3919 8.61633 10.8932 8.252 11.2668C7.88767 11.6405 7.39172 11.857 6.87 11.87L4 11.82Z"
          fill="#000000"
        ></path>
      </g>
    </svg>
  );
}

export default LeaderboardSvg;