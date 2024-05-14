import { useState } from "react";
import { ActionButton } from "../Buttons/Buttons";
import "./PaymentForm.css";
import { Link } from "react-router-dom";

const PaymentForm = () => {
  const [dataForm, setDataForm] = useState({
    name: "",
    lastName: "",
    idNumber: "",
    email: "",
    phoneNumber: "",
    address: "",
    city: "",
    country: "",
  });

  const handlerChange = (event) => {
    const { name, value } = event.target;
    setDataForm({ ...dataForm, [name]: value });
  };

  return (
    <form
      className="paymentForm"
      onSubmit={(event) => {
        event.preventDefault();
        document.getElementById("submitButton").click();
      }}
    >
      <h1>
        Billing <span>I</span>nformation
      </h1>
      <div className="data">
        <label>Name: </label>
        <input
          type="text"
          placeholder="Your name"
          name="name"
          onChange={handlerChange}
          required
        />
        <label>Last Name: </label>
        <input
          type="text"
          placeholder="Your last name"
          name="lastName"
          onChange={handlerChange}
          required
        />
        <label>Id Number: </label>
        <input
          type="number"
          placeholder="123456789"
          name="idNumber"
          onChange={handlerChange}
          required
        ></input>
        <label>Email: </label>
        <input
          type="email"
          placeholder="name@rdstore.com"
          name="email"
          onChange={handlerChange}
          required
        />
        <label>Phone Number: </label>
        <input
          type="number"
          placeholder="57 321 4567890"
          name="phoneNumber"
          onChange={handlerChange}
          required
        />
        <label>Adress: </label>
        <input
          type="text"
          placeholder="Shipping place"
          name="address"
          onChange={handlerChange}
          required
        />
        <label>City: </label>
        <input
          type="text"
          placeholder="Shipping city"
          name="city"
          onChange={handlerChange}
          required
        />
        <label>Country: </label>
        <input
          type="text"
          placeholder="Shipping country"
          name="country"
          onChange={handlerChange}
          required
        />
        <ActionButton
          style={{
            gridColumn: "span 2 / 3",
            justifySelf: "center",
            paddingTop: "0.8vw",
            paddingBottom: "0.8vw",
          }}
          message="Submit"
        />
        <Link
          id="submitButton"
          style={{
            display: "none",
          }}
          to="/OrderConfirmation"
          state={dataForm}
        />
      </div>
    </form>
  );
};

export default PaymentForm;
