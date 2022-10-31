import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./manager_styles.css";
import { Form, Group, Label, Control, Button } from "react-bootstrap";
import { valueToPercent } from "@mui/base";
import { GetAbout, UpdateAbout } from "../../services/AdminDataStatistic";

const ManagerAbout = () => {
  const [values, setValues] = useState({
    image: "",
    description: "",
  });
  useEffect(() => {
    const loadPost = async () => {
      const response = await GetAbout();
      if (response.status === 200) {
        setValues({
          description: response.data.description,
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
    if (values.description != null) {
      UpdateAbout(values)
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
      <h2 className="manager-title-content">About Us Page Management</h2>
      <div>
        <Form.Group controlId="img-hotel-id" className="mb-3 img-hotel">
          <Form.Label className="about-label">New Image:</Form.Label>
          <Form.Control
            type="file"
            name="image"
            value={values.image}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3 about-group" controlId="description-hotel">
          <Form.Label className="about-label">Description:</Form.Label>
          <Form.Control
            as="textarea"
            rows={16}
            type="text"
            placeholder="Enter new description"
            name="description"
            value={values.description}
            onChange={handleChange}
          />
        </Form.Group>
        <Button type="submit" className="about-button" onClick={handleSubmit}>
          {" "}
          Submit{" "}
        </Button>
      </div>
    </div>
  );
};
export default ManagerAbout;
