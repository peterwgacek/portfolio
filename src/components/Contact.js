import React from 'react'

const Contact = () => {
  return (
    <div className="contact">
      <div className="text-center">
        <h1>Contact Me</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-xs-12">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              name="name"
            />
            <input
              type="text"
              className="form-control"
              placeholder="Phone Number"
              name="phone"
            />
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              name="email"
            />
            <input
              type="text"
              className="form-control"
              placeholder="Subject"
              name="subject"
            />
          </div>
          <div className="col-md-6 col-xs-12">
            <textarea
              type="text"
              className="form-control"
              placeholder="Message"
              name="description"
            ></textarea>
            <button className="btn-main-offer contact-btn" type="submit">Contact Me</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
