import React, { useState } from "react";

const ContactSection = (props) => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formState);
  };

  return (
    <>
      <section>
        <h2>{props.text}</h2>
        <p>{props.subText}</p>
        <img src={props.imageSrc} alt={props.imageText} />
      </section>
      <section>
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formState.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Message:</label>
            <textarea
              name="message"
              value={formState.message}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </section>
    </>
  );
};

export default ContactSection;
