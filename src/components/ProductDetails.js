import React, { useEffect, useState } from "react";
import { Card, Col, Row, Button, Badge } from "reactstrap";

function ProductDetails() {
  const [product, setProduct] = useState({
    id: 1,
    title: "Essence Mascara Lash Princess",
    description:
      "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
    category: "beauty",
    price: 9.99,
    discountPercentage: 7.17,
    rating: 4.94,
    stock: 5,
    tags: ["beauty", "mascara"],
    brand: "Essence",
    sku: "RCH45Q1A",
    weight: 2,
    dimensions: {
      width: 23.17,
      height: 14.43,
      depth: 28.01,
    },
    warrantyInformation: "1 month warranty",
    shippingInformation: "Ships in 1 month",
    availabilityStatus: "Low Stock",
    reviews: [
      {
        rating: 2,
        comment: "Very unhappy with my purchase!",
        date: "2024-05-23T08:56:21.618Z",
        reviewerName: "John Doe",
        reviewerEmail: "john.doe@x.dummyjson.com",
      },
      {
        rating: 2,
        comment: "Not as described!",
        date: "2024-05-23T08:56:21.618Z",
        reviewerName: "Nolan Gonzalez",
        reviewerEmail: "nolan.gonzalez@x.dummyjson.com",
      },
      {
        rating: 5,
        comment: "Very satisfied!",
        date: "2024-05-23T08:56:21.618Z",
        reviewerName: "Scarlett Wright",
        reviewerEmail: "scarlett.wright@x.dummyjson.com",
      },
    ],
    returnPolicy: "30 days return policy",
    minimumOrderQuantity: 24,
    meta: {
      createdAt: "2024-05-23T08:56:21.618Z",
      updatedAt: "2024-05-23T08:56:21.618Z",
      barcode: "9164035109868",
      qrCode: "...",
    },
    thumbnail: "...",
    images: ["...", "...", "..."],
  });
  useEffect(() => {
    fetch("https://dummyjson.com/products/1")
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        console.log(data.products);
        // setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
        // setLoading(false);
      });
  }, []);
  return (
    <div className="d-flex justify-content-center my-5">
      <Card className="p-4 shadow-lg w-75">
        <Row>
          {/* Product Image Section */}
          <Col md={5}>
            <img
              src={product?.thumbnail || "https://via.placeholder.com/300"}
              alt={product?.title}
              className="img-fluid rounded shadow-sm"
            />
          </Col>

          {/* Product Info Section */}
          <Col md={7}>
            <h2 className="text-primary">{product?.title}</h2>
            <p className="text-muted">{product?.description}</p>
            <h5 className="text-success">${product?.price?.toFixed(2)}</h5>
            <p className="text-danger">
              Discount: {product?.discountPercentage}%
            </p>

            {/* Stock and Rating */}
            <div className="d-flex align-items-center gap-3 mb-3">
              <Badge color={product?.stock > 0 ? "success" : "danger"}>
                {product?.availabilityStatus}
              </Badge>
              <span className="text-warning">
                Rating: {product?.rating}{" "}
                <i className="fa fa-star" aria-hidden="true"></i>
              </span>
            </div>

            {/* Tags */}
            <div className="mb-3">
              <strong>Tags:</strong>{" "}
              {product?.tags?.map((tag, index) => (
                <Badge color="info" className="me-1" key={index}>
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Additional Info */}
            <div className="mb-3">
              <strong>Brand:</strong> {product?.brand}
              <br />
              <strong>SKU:</strong> {product?.sku}
              <br />
              <strong>Warranty:</strong> {product?.warrantyInformation}
              <br />
              <strong>Shipping:</strong> {product?.shippingInformation}
            </div>

            <Button color="primary" className="mt-3">
              Add to Cart
            </Button>
          </Col>
        </Row>

        {/* Reviews Section */}
        <Row className="mt-5">
          <h3>Customer Reviews</h3>
          {product?.reviews?.length ? (
            product?.reviews?.map((review, index) => (
              <Card key={index} className="my-2 p-3 shadow-sm">
                <strong>{review.reviewerName}</strong> (
                {new Date(review?.date).toLocaleDateString()})
                <p className="text-muted">{review?.comment}</p>
                <span className="text-warning">
                  Rating: {review?.rating}{" "}
                  <i className="fa fa-star" aria-hidden="true"></i>
                </span>
              </Card>
            ))
          ) : (
            <p>No reviews yet.</p>
          )}
        </Row>
      </Card>
    </div>
  );
}

export default ProductDetails;
