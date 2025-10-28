export default function Hero({ data }) {
  return (
    <section className="hero-section py-5">
      <div className="container">
        <div className="row g-3 align-items-center">
          <div className="col-lg-7">
            <div className="hero-card p-5 rounded">
              <div className="text-muted mb-3">{data.badge}</div>
              <h1 className="hero-title">{data.titleTop} <br /> <span>{data.titleBottom}</span></h1>
              <p className="lead text-muted mt-3" style={{maxWidth:560}}>{data.description}</p>
              <button className="btn btn-outline-primary mt-4">{data.cta}</button>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="offers-stack">
              <div className="offer-card mb-3 rounded p-4 d-flex align-items-center justify-content-between">
                <div>
                  <div className="small text-muted">20% Off</div>
                  <h5 className="mb-1">Fruits & Vegetables</h5>
                  <div className="text-muted small">Shop Collection →</div>
                </div>
                <img src="https://picsum.photos/200/140?fruits" alt="offer" className="img-fluid rounded" style={{width:160}} />
              </div>

              <div className="offer-card rounded p-4 d-flex align-items-center justify-content-between">
                <div>
                  <div className="small text-muted">15% Off</div>
                  <h5 className="mb-1">Bread & Bakery</h5>
                  <div className="text-muted small">Shop Collection →</div>
                </div>
                <img src="https://picsum.photos/200/140?bread" alt="offer2" className="img-fluid rounded" style={{width:160}} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
