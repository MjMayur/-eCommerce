import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
  Button,
} from "reactstrap";

const Home = () => {
  const featuredProducts = [
    {
      id: 1,
      title: "Smartphone",
      description: "High-quality smartphone with excellent features.",
      price: "$499",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "Wireless Headphones",
      description: "Experience top-notch sound quality on the go.",
      price: "$99",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      title: "Smartwatch",
      description: "Track your fitness and stay connected.",
      price: "$199",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gray-100 py-16 text-center">
        <h1 className="text-4xl font-bold text-primary mb-4">
          Welcome to E-Shop
        </h1>
        <p className="text-lg text-gray-600">
          Discover the best products at unbeatable prices.
        </p>
        <Button color="primary" className="mt-4">
          Shop Now
        </Button>
      </div>

      {/* Featured Products */}
      <Container className="py-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Featured Products
        </h2>
        <Row>
          {featuredProducts.map((product) => (
            <Col md="4" className="mb-4" key={product.id}>
              <Card className="shadow-md hover:shadow-lg transition-shadow">
                <CardImg
                  top
                  src={product.image}
                  alt={product.title}
                  className="h-48 object-cover"
                />
                <CardBody>
                  <CardTitle tag="h5" className="font-semibold text-gray-700">
                    {product.title}
                  </CardTitle>
                  <CardText className="text-gray-500">
                    {product.description}
                  </CardText>
                  <div className="flex justify-between items-center mt-3">
                    <span className="font-bold text-primary">
                      {product.price}
                    </span>
                    <Button color="primary" size="sm">
                      Add to Cart
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>&copy; 2024 E-Shop. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
