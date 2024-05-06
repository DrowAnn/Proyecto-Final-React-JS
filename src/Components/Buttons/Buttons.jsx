import { Link } from "react-router-dom";
import "./Buttons.css";

export const ButtonLink = (props) => {
  return (
    <Link className="buttonLink" to={props.to} style={props.style}>
      {props.message}
    </Link>
  );
};

export const ActionButton = (props) => {
  return (
    <button className="buttonLink" onClick={props.onClick} style={props.style}>
      {props.message}
    </button>
  );
};
