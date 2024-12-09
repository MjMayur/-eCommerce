import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardImg, CardTitle, Col, Row } from "reactstrap";
function Fashion() {
  const [fashionProducts, setFasionProduct] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setFasionProduct(data.products);

        // setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
        // setLoading(false);
      });
  }, []);
  return (
    <Row md={12}>
      {fashionProducts.slice(0, 6).map((product) => (
        <Col md="2" key={product.id}>
          <Card className="shadow-md hover:shadow-lg  h-70 p-3 mt-4">
            <CardImg
              top
              src={product.thumbnail}
              alt={product.title}
              className="h-100 p-4 hover:scale-110 transition-transform duration-300"
            />
            <CardTitle
              tag="h5"
              className="font-semibold text-gray-700 cursor-pointer text-center hover:text-[#0d6efd]"
              onClick={() => {
                navigate("/product/details", {
                  state: {
                    productID: product.id,
                  },
                });
              }}
            >
              {product.title?.length > 20
                ? `${product.title.slice(0, 20)}...`
                : product.title}
            </CardTitle>
            <p className="text-sm text-center">
              {product.description?.length > 45
                ? `${product.description.slice(0, 45)}...`
                : product.description}
            </p>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Fashion;
