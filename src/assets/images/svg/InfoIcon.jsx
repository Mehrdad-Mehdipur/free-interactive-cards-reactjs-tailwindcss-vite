const InfoIcon = ({ className = "" }) => {
  return (
    <svg
      className={`${className} || ""`}
      width="30"
      height="30"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 36.44"
    >
      <g>
        <path d="M7.84,0H42.16A7.84,7.84,0,0,1,50,7.84v0a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0v0A7.84,7.84,0,0,1,7.84,0Z" />
        <rect y="14.3" width="50" height="7.84" opacity={0.7} />
        <path
          d="M0,28.6H33.56a0,0,0,0,1,0,0v7.84a0,0,0,0,1,0,0H7.84A7.84,7.84,0,0,1,0,28.6v0A0,0,0,0,1,0,28.6Z"
          opacity={0.4}
        />
      </g>
    </svg>
  );
};

export default InfoIcon;
