import { Link } from "react-router-dom";
import "./ARefs.css";

export default function ARefs(props) {
  return (
    <Link className="headerRefs" to={props.linkTo}>
      {props.img ? (
        <div className="shoppingCartContainer">
          <img src={props.img} />
          <p className="itemsCount">{props.count}</p>
        </div>
      ) : (
        props.showTitle
      )}
    </Link>
  );
}
