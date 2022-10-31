import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./manager_styles.css";
import { Form, Group, Label, Control, Button } from "react-bootstrap";
import { getContact, updateContact } from "../../services/AdminDataStatistic";

const ManagerContact = () => {
  const [values, setValues] = useState({
    address: "",
    phone: "",
    email: "",
    creditCard: "",
  });
  useEffect(() => {
    const loadPost = async () => {
      const response = await getContact();
      if (response.status === 200) {
        setValues({
          address: response.data.address,
          phone: response.data.phone,
          email: response.data.email,
          creditCard: response.data.creditCard,
        });
      }
    };
    loadPost();
  }, []);
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = () => {
    if (
      values.address != "" &&
      values.phone != null &&
      values.email != "" &&
      values.creditCard != null
    ) {
      updateContact(values)
        .then((res) => {
          if (res === 200) {
            alert("Update Successfully!");
          }
        })
        .catch((error) => {
          alert("Error Happens");
        });
    } else {
      alert("Please Enter Something");
    }
  };

  return (
    <div className="contact-container">
      <h2 className="manager-title-content">Contact Page Management</h2>
      <div>
        <Form.Group className="mb-3 contact-group">
          <Form.Label className="contact-label">Address:</Form.Label>
          <Form.Control
            className="contact-control"
            type="text"
            placeholder="Enter new address"
            name="address"
            value={values.address}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group
          className="mb-3 contact-group"
          controlId="phone-number-hotel"
        >
          <Form.Label className="contact-label">Phone Number:</Form.Label>
          <Form.Control
            className="contact-control"
            type="number"
            placeholder="Enter new phone number"
            name="phone"
            value={values.phone}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3 contact-group" controlId="email-hotel">
          <Form.Label className="contact-label">Email Address:</Form.Label>
          <Form.Control
            className="contact-control"
            type="email"
            placeholder="Enter new email address"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group
          className="mb-3 contact-group"
          controlId="credit-card-hotel"
        >
          <Form.Label className="contact-label">Credit card:</Form.Label>
          <Form.Control
            className="contact-control"
            type="text"
            placeholder="Enter new credit card"
            name="creditCard"
            value={values.creditCard}
            onChange={handleChange}
          />
        </Form.Group>
        <Button type="submit" className="contact-button" onClick={handleSubmit}>
          {" "}
          Submit{" "}
        </Button>
      </div>
    </div>
  );
};
export default ManagerContact;
