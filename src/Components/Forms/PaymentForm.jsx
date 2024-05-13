import { useState } from "react";
import { SubmitButton } from "../Buttons/Buttons";
import "./PaymentForm.css";

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
      onChange={(event) => {
        event.preventDefault();
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
        />
        <label>Last Name: </label>
        <input
          type="text"
          placeholder="Your last name"
          name="lastName"
          onChange={handlerChange}
        />
        <label>Id Number: </label>
        <input
          type="number"
          placeholder="123456789"
          name="idNumber"
          onChange={handlerChange}
        ></input>
        <label>Email: </label>
        <input
          type="email"
          placeholder="name@rdstore.com"
          name="email"
          onChange={handlerChange}
        />
        <label>Phone Number: </label>
        <input
          type="number"
          placeholder="57 321 4567890"
          name="phoneNumber"
          onChange={handlerChange}
        />
        <label>Adress: </label>
        <input
          type="text"
          placeholder="Shipping place"
          name="address"
          onChange={handlerChange}
        />
        <label>City: </label>
        <input
          type="text"
          placeholder="Shipping city"
          name="city"
          onChange={handlerChange}
        />
        <label>Country: </label>
        <input
          type="text"
          placeholder="Shipping country"
          name="country"
          onChange={handlerChange}
        />
        <SubmitButton
          id="submit"
          style={{
            gridColumn: "span 2 / 3",
            justifySelf: "center",
            paddingTop: "0.8vw",
            paddingBottom: "0.8vw",
          }}
          to="/OrderConfirmation"
          message="Submit"
          state={dataForm}
        />
      </div>
    </form>
  );
};

export default PaymentForm;
