import React, { useEffect, useState } from "react";
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
  Spinner,
  CardHeader,
} from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react"; // Use Swiper components
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // Add additional modules as needed
import "swiper/css";

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
    {
      id: 4,
      title: "Smartwatch",
      description: "Track your fitness and stay connected.",
      price: "$199",
      image: "https://via.placeholder.com/150",
    },
  ];

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
      <Spinner color="primary h-100 flex align-center justify-center">
        Loading...
      </Spinner>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full h-screen  absolute top-0">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          className="w-full h-1/2  "
        >
          <SwiperSlide>
            <img
              src="https://via.placeholder.com/800x400?text=Product+1"
              alt="Product 1"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://via.placeholder.com/800x400?text=Product+2"
              alt="Product 2"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://via.placeholder.com/800x400?text=Product+3"
              alt="Product 3"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://via.placeholder.com/800x400?text=Product+4"
              alt="Product 4"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        </Swiper>

        {/* Featured Products */}
        <div className=" w-100 mt-3">
          <Card>
            <CardHeader>Products</CardHeader>
            <Row md={12}>
              {products.map((product) => (
                <Col md="3" className="mb-4 " key={product.id}>
                  <Card className="shadow-md hover:shadow-lg transition-shadow h-100 ">
                    <CardImg
                      top
                      src={product.image}
                      alt={product.title}
                      className="h-80 p-3"
                    />
                    <CardBody>
                      <CardTitle
                        tag="h5"
                        className="font-semibold text-gray-700"
                      >
                        {product.title}
                      </CardTitle>

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
          </Card>
        </div>
      </div>

      {/* Footer */}
      {/* <footer className="bg-gray-800 text-white py-4 text-center">
        <p>&copy; 2024 E-Shop. All rights reserved.</p>
      </footer> */}
    </div>
  );
};

export default Home;
