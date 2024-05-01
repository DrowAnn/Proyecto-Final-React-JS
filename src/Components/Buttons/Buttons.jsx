import "./Buttons.css";

const Button = (props) => {
  return (
    <button onClick={props.onClick} style={props.style}>
      {props.message}
    </button>
  );
};

export default Button;
