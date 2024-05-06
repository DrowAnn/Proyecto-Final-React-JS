import "./Footer.css";
import SpecialFeatures from "../SpecialFeatures/SpecialFeatures.jsx";
import { useSelector } from "react-redux";

const Footer = () => {
  const features = useSelector((state) => {
    return state.SpecialFeaturesContent.features;
  });

  return (
    <div className="footerDiv">
      {features.map((props) => {
        return (
          <div key={props.id}>
            <SpecialFeatures
              image={props.image}
              title={props.title}
              description={props.description}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Footer;
