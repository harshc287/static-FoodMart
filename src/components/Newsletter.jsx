function Newsletter() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h4>Get 25% Off on your first purchase</h4>
            <p className="small text-muted">
              Sign up to receive exclusive deals and offers.
            </p>
            <form className="row g-2">
              <div className="col-6">
                <input className="form-control" placeholder="Name" />
              </div>
              <div className="col-6">
                <input className="form-control" placeholder="Email" />
              </div>
              <div className="col-12 mt-2">
                <button className="btn btn-primary">Subscribe</button>
              </div>
            </form>
          </div>
          <div className="col-md-6 text-center">
            <img
              src="https://picsum.photos/500/300?promo"
              className="img-fluid rounded"
              alt="promo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;

