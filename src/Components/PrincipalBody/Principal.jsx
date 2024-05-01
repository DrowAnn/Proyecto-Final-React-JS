import "./Principal.css";
import Button from "../Buttons/Buttons.jsx";
import ProductsList from "../Lists/Lists.jsx";

const Principal = ({ statusWelcome, onClick }) => {
  let [welcomeMessage, welcomeButton, backButton, productsList] = "";

  if (statusWelcome) {
    welcomeMessage = <h1 style={{ fontSize: "8vh" }}>Welcome!</h1>;
    welcomeButton = <Button message="See Products..." onClick={onClick} />;
  } else {
    backButton = (
      <Button
        message="Back To Home"
        onClick={onClick}
        style={{ position: "absolute", top: "14vh", left: "5%" }}
      />
    );
    productsList = <ProductsList />;
  }

  return (
    <div>
      <div className="shadowPictureDecoration1" />
      <div className="pictureDecoration1" />
      <div className="shadowPictureDecoration2" />
      <div className="pictureDecoration2" />
      {welcomeMessage}
      {welcomeButton}
      {backButton}
      {productsList}
    </div>
  );
};

export default Principal;
