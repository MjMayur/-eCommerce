import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Card, CardImg, CardTitle, Col, Row } from "reactstrap";

function SmartPhones() {
  const navigate = useNavigate();
  const [electricProducts, setElectricProducts] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products/category/smartphones")
      .then((response) => response.json())
      .then((data) => {
        setElectricProducts(data.products);
        console.log(data.products);
        // setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
        // setLoading(false);
      });
  }, []);
  return (
    <Row md={12}>
      {electricProducts.slice(0, 6).map((product) => (
        <Col md="2" key={product.id}>
          <Card
            className="shadow-md hover:shadow-lg  h-90 p-3 mt-4  hover:text-[#0d6efd]"
            onClick={() =>
              navigate("/products", {
                state: { category: "smartphones" },
              })
            }
          >
            <CardImg
              top
              src={product.thumbnail}
              alt={product.title}
              className="h-100 p-4 hover:scale-110 transition-transform duration-300"
            />
            <CardTitle
              tag="h5"
              className="font-semibold  cursor-pointer text-center"
            >
              {product.title?.length > 20
                ? `${product.title.slice(0, 20)}...`
                : product.title}
            </CardTitle>{" "}
            <p className="text-sm text-center">
              {product.description?.length > 35
                ? `${product.description.slice(0, 35)}...`
                : product.description}
            </p>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default SmartPhones;
