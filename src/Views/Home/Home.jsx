import "./Home.css";
import { ButtonLink } from "../../Components/Buttons/Buttons.jsx";

const Home = () => {
  return (
    <div className="Home">
      {/* <div className="shadowPictureDecoration1" />
      <div className="pictureDecoration1" />
      <div className="shadowPictureDecoration2" />
      <div className="pictureDecoration2" /> */}
      <h1 style={{ fontSize: "8vh" }}>Welcome!</h1>
      <ButtonLink to="/Products" message="See Products..." />
    </div>
  );
};

export default Home;
