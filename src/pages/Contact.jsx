function Contact() {
  return (
    <section className="py-5">
      <div className="container">
        <h2>Contact Us</h2>
        <p className="text-muted">
          We’d love to hear from you! Fill out the form below.
        </p>

        <form className="row g-3 mt-3">
          <div className="col-md-6">
            <input type="text" className="form-control" placeholder="Name" />
          </div>
          <div className="col-md-6">
            <input type="email" className="form-control" placeholder="Email" />
          </div>
          <div className="col-12">
            <textarea
              className="form-control"
              rows="4"
              placeholder="Message"
            ></textarea>
          </div>
          <div className="col-12">
            <button className="btn btn-primary">Send Message</button>
          </div>
        </form>

        <div className="mt-5">
          <h5>Our Store</h5>
          <p>123 Green Street, California, USA</p>
          <p>Email: support@foodmart.com | Phone: +980-349-84089</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
