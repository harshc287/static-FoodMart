export default function ProductGrid({ products }) {
  return (
    <section className="py-5">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2>Trending Products</h2>
          <div className="small text-muted">Showing {products.length} results</div>
        </div>
        <div className="row g-3">
          {products.map(p => (
            <div className="col-6 col-md-4 col-lg-3" key={p.id}>
              <div className="card product-card h-100">
                {p.badge && <div className="badge-discount">{p.badge}</div>}
                <img src={p.image} className="card-img-top" alt={p.name} style={{height:200,objectFit:'cover'}} />
                <div className="card-body d-flex flex-column">
                  <h6 className="card-title">{p.name}</h6>
                  <p className="text-muted small">{p.desc}</p>
                  <div className="mt-auto d-flex justify-content-between align-items-center">
                    <div className="fw-bold">${p.price}</div>
                    <button className="btn btn-sm btn-primary">Add</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
