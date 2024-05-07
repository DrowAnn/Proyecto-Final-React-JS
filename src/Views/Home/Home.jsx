import "./Home.css";
import { ButtonLink } from "../../Components/Buttons/Buttons.jsx";
import TriangleDecoration from "../../Components/TrianglesDecoration/TrianglesDecoration.jsx";

const Home = () => {
  return (
    <div className="Home">
      <TriangleDecoration />
      <h1 style={{ fontSize: "8vh" }}>Welcome!</h1>
      <ButtonLink to="/Products" message="See Products..." />
    </div>
  );
};

export default Home;
