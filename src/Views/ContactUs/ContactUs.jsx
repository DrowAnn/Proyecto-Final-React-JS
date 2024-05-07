import TriangleDecoration from "../../Components/TrianglesDecoration/TrianglesDecoration";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contactUs">
      <TriangleDecoration />
      <h1>
        Robert <span>D</span>elgado's Store
      </h1>
      <p>Hi, my name is Robert, i'm a Software Development student</p>
      <h2>Thanks for watching!</h2>
      <h1>{":)"}</h1>
    </div>
  );
};

export default ContactUs;
