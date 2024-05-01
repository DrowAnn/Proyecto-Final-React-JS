import "./Header.css";
import ARefs from "../ARefs/ARefs.jsx";

const Header = () => {
  return (
    <>
      <div className="headerDiv">
        <div className="logoRD">
          R<span>D</span>
        </div>
        <div className="keywordsReference">
          <ARefs showTitle="Home" linkTo="#" />
          <ARefs showTitle="Contact us" linkTo="#" />
        </div>
      </div>
    </>
  );
};

export default Header;
