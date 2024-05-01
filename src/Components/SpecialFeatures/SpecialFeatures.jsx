import "./SpecialFeatures.css";

export default function SpecialFeatures(props) {
  return (
    <div className="container">
      <img className="pictureClass" src={props.image} />
      <p className="titleClass">{props.title}</p>
      <p className="descriptionClass">{props.description}</p>
    </div>
  );
}
