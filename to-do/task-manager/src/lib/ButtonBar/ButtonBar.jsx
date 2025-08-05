const ButtonBar = ({
  buttonList = [],
  selectedButton,
  onButtonChange,
  backgroundClass = "bg-gray-200",
  activeButtonClass = "bg-blue-600",
  activeButtonBorderClass = "border-blue-600",
  buttonBarStyle = {},
  buttonStyle = {},
}) => {
  return (
    <span className={`py-2  ${backgroundClass}`} style={{ ...buttonBarStyle }}>
      {buttonList.map((type, buttonIndex) => (
        <button
          key={type + "-" + buttonIndex}
          onClick={() => onButtonChange(type)}
          className={`px-4 py-1 m-1 border cursor-pointer ${
            selectedButton === type
              ? `${activeButtonClass} text-white ${activeButtonBorderClass}`
              : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
          } transition`}
          style={{ ...buttonStyle }}
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </button>
      ))}
    </span>
  );
};

export default ButtonBar;
