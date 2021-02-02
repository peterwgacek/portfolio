import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';

const Contact = () => {
  const { successMessage, setSuccessMessage } = useState("");
  const { register, handleSubmit, errors } = useForm();

  const serviceID = 'service_ID';
  const templateID = "template_ID";
  const userID = "user_Rlw1ov1jrSgB3pN6M67WP";

  const onSubmit = (data, r) => {
    sendEmail(
      serviceID,
      templateID,
      {
        name: data.name,
        phone: data.phone,
        email: data.email,
        subject: data.subject,
        description: data.description
      },
      userID
    )
    r.target.reset();
  }

  const sendEmail = (serviceID, templateID, variables, userID) => {
    emailjs.send(serviceID, templateID, variables, userID)
      .then(() => {
        setSuccessMessage("Form sent successfully! I'll contact you as soon as possible.");
      }).catch(err => console.error(`Something went wrong ${err}`));
  }

  return (
    <div id="contact" className="contact">
      <div className="text-center">
        <h1>Contact Me</h1>
        <span className="success-message">{successMessage}</span>
      </div>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-6 col-xs-12">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
                ref={
                  register({
                    required: "Please enter your name",
                    maxLength: {
                      value: 20,
                      message: "Please enter a name with fewer than 20 characters"
                    }
                  })
                }
              />
              <span className="error-message">
                {errors.name && errors.name.message}
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Phone Number"
                name="phone"
                ref={
                  register({
                    required: "Please enter your phone number"
                  })
                }
              />
              <span className="error-message">
                {errors.phone && errors.phone.message}
              </span>
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                name="email"
                ref={
                  register({
                    required: "Please enter your email",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "invalid Email"
                    }
                  })
                }
              />
              <span className="error-message">
                {errors.email && errors.email.message}
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Subject"
                name="subject"
                ref={
                  register({
                    required: "Please enter a subject"
                  })
                }
              />
              <span className="error-message">
                {errors.subject && errors.subject.message}
              </span>
            </div>

            <div className="col-md-6 col-xs-12">
              <textarea
                type="text"
                className="form-control"
                placeholder="Message"
                name="description"
                ref={
                  register({
                    required: "Please describe shortly your project needs...",
                  })
                }
              ></textarea>
              <span className="error-message">
                {errors.description && errors.description.message}
              </span>
              <button className="btn-main-offer contact-btn" type="submit">Contact Me</button>

            </div>

          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
