function ProductCard({ name, image, price, desc }) {
  return (
    <div className="col-6 col-md-4 col-lg-3">
      <div className="card position-relative">
        <img src={image} className="card-img-top" alt={name} />
        <div className="card-body">
          <h6 className="card-title">{name}</h6>
          <p className="mb-1 small text-muted">{desc}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="fw-bold">${price}</div>
            <button className="btn btn-sm btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
