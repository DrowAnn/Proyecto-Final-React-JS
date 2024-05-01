import "./Footer.css";
import { HighlightsContent } from "/src/App.jsx";
import SpecialFeatures from "../SpecialFeatures/SpecialFeatures.jsx";
import { useContext } from "react";

const Footer = () => {
  const highlightsContent = useContext(HighlightsContent);

  return (
    <div className="footerDiv">
      {highlightsContent.map((props) => {
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
