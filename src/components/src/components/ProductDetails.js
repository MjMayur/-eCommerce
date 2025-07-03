import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Card,
  Col,
  Row,
  Button,
  Badge,
  CardHeader,
  Container,
} from "reactstrap";

function ProductDetails() {
  const location = useLocation();
  const productID = location.state?.productID || 1;

  const [product, setProduct] = useState(null);
  const [zoomPosition, setZoomPosition] = useState({
    x: 0,
    y: 0,
    isHovering: false,
  });

  const handleMouseMove = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setZoomPosition({ x, y, isHovering: true });
  };

  const handleMouseLeave = () => {
    setZoomPosition((prev) => ({ ...prev, isHovering: false }));
  };

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${productID}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching product:", error));
  }, [productID]);

  if (!product) return <div className="text-center mt-5">Loading...</div>;

  return (
    <Container className="my-5">
      <Card className="p-4 shadow-lg">
        <Row>
          {/* Image Column */}
          <Col
            xs="12"
            md="5"
            className="mb-4 mb-md-0 d-flex justify-content-center"
          >
            <div
              className="border rounded overflow-hidden"
              style={{
                width: "100%",
                maxWidth: "400px",
                height: "400px",
                position: "relative",
              }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={product.thumbnail || "https://via.placeholder.com/300"}
                alt={product.title}
                className="img-fluid h-100 w-100 object-fit-cover"
                style={{ objectFit: "cover" }}
              />
            </div>
          </Col>

          {/* Details Column */}
          <Col xs="12" md="7">
            <h2 className="text-primary">{product.title}</h2>
            <p className="text-muted">{product.description}</p>

            <h4 className="text-success mb-1">₹{product.price?.toFixed(2)}</h4>
            <p className="text-danger mb-2">
              Discount: {product.discountPercentage}%
            </p>

            <div className="d-flex align-items-center gap-3 flex-wrap mb-3">
              <Badge color={product.stock > 0 ? "success" : "danger"}>
                {product.availabilityStatus ||
                  (product.stock > 0 ? "In Stock" : "Out of Stock")}
              </Badge>
              <span className="text-warning">
                Rating: {product.rating} <i className="fa fa-star" />
              </span>
            </div>

            <div className="mb-2">
              <strong>Tags:</strong>{" "}
              {product.tags?.map((tag, i) => (
                <Badge key={i} color="info" className="me-1">
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="mb-2">
              <strong>Brand:</strong> {product.brand} <br />
              <strong>SKU:</strong> {product.sku} <br />
              <strong>Warranty:</strong> {product.warrantyInformation || "N/A"}{" "}
              <br />
              <strong>Shipping:</strong>{" "}
              {product.shippingInformation || "Standard"} <br />
              <strong>Return Policy:</strong>{" "}
              {product.returnPolicy || "No return"}
            </div>

            <Button color="primary" className="mt-3 w-100 w-md-auto">
              Add to Cart
            </Button>
          </Col>
        </Row>

        {/* Reviews */}
        <Row className="mt-5">
          <Col>
            <h4>Customer Reviews</h4>
            {product.reviews?.length > 0 ? (
              product.reviews.map((review, i) => (
                <Card key={i} className="p-3 my-2 shadow-sm">
                  <strong>{review.reviewerName}</strong>{" "}
                  <span className="text-muted">
                    ({new Date(review.date).toLocaleDateString()})
                  </span>
                  <p>{review.comment}</p>
                  <span className="text-warning">
                    Rating: {review.rating} <i className="fa fa-star" />
                  </span>
                </Card>
              ))
            ) : (
              <p>No reviews available.</p>
            )}
          </Col>
        </Row>
      </Card>
    </Container>
  );
}

export default ProductDetails;
