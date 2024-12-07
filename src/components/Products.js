import React, { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Spinner,
  CardHeader,
  Row,
  Col,
  Button,
  CardImg,
} from "reactstrap";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Spinner color="primary flex align-center justify-center">
        Loading...
      </Spinner>
    );
  }

  return (
    <Row md={12} className="m-3">
      {products.map((product) => (
        <Col md={3} className="mt-5">
          <Card className="shadow-md hover:shadow-lg transition-shadow h-100 ">
            <CardHeader>Products</CardHeader>
            <CardImg
              top
              src={product.image}
              alt={product.title}
              className="h-80 p-5"
            />
            <CardBody>
              <CardTitle tag="h5" className="font-semibold text-gray-700">
                {product.title}
              </CardTitle>
              <div className="flex justify-between items-center mt-3 p-3">
                <span className="font-bold text-primary absolute bottom-3 left-3 text-3xl">
                  ${product.price}
                </span>
                <Button color="primary bottom-3 absolute right-3" size="sm">
                  Add to Cart
                </Button>
              </div>
            </CardBody>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Products;
