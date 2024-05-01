import "./ARefs.css";

export default function ARefs(props) {
  return (
    <a className="headerRefs" href={props.linkTo}>
      {props.showTitle}
    </a>
  );
}
