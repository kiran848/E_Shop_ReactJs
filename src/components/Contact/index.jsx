const Contact=()=>{
    return(
        <div className="container">
            <h2 className="text-center">Contact Us</h2>
             <p className="text-center">
          Have questions or need help? Reach out to us and our team will get
          back to you as soon as possible.
        </p>

        <div className="row mt-4">

          {/* Contact Information */}
          <div className="col-md-5">
            <h4>Contact Information</h4>

            <p><strong>📍 Address:</strong> Gurgaon, Haryana, India</p>
            <p><strong>📞 Phone:</strong> +91 9998887771</p>
            <p><strong>📧 Email:</strong> support@myshop.com</p>

            <p>
              Our support team is available Monday to Saturday
              from 9:00 AM to 6:00 PM.
            </p>
          </div>

          {/* Contact Form */}
          <div className="col-md-7">

            <form>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your name"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea
                  className="form-control"
                  rows="4"
                  placeholder="Write your message"
                ></textarea>
              </div>

              <button className="btn btn-primary">
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    )
}
export default Contact;
