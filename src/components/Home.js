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

import ProductCards from "./BoxCards";

const Home = () => {
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
  const categories = [
    {
      name: "HeadPhones",
      image:
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSb9-vDjZAJpJPrsG6cYNnZQ-K_J7l6ee9ROe6cugzfBI3iXyVtm0iqQFANBlLVpAh7W3nZOL2ZCwBUYL5cbSRwH9hQQxqjHUWsQQBrw3Dzcg8cruPtTZKwxw",
    },
    {
      name: "Bluthoot Speaker",
      image:
        "https://m.media-amazon.com/images/I/4181R+nktQS._SY300_SX300_.jpg",
    },
    {
      name: "Smart Watches",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUenhb34V1tnn6-pWz3uwFatH9RVDYi4T2AA&s",
    },
    {
      name: "Trimer",
      image:
        "data:image/jpeg;base64,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",
    },
    {
      name: "TV",
      image:
        "data:image/jpeg;base64,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",
    },
    {
      name: "TV",
      image:
        "data:image/jpeg;base64,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",
    },
  ];

  return (
    <div className="bg-[#f1f2f4] p-3">
      {/* Hero Section */}

      <div className="relative w-full h-screen  absolute top-0">
        {/* <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          className="w-full h-25 "
        >
          <SwiperSlide>
            <img
              src="https://media.post.rvohealth.io/wp-content/uploads/2024/05/3614145-T2-1-9-11-23-The-11-Best-Heart-Rate-Monitor-Watches-for-2024-1296x728-Header-f1d8e6.jpg"
              alt="Product 1"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/8074e7b2f6d2bfea.jpg?q=20"
              alt="Product 2"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/1316eb53d6f52c71.jpg?q=20"
              alt="Product 3"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        </Swiper> */}

        {/* Featured Products */}
        <Row>
          <Card className="mt-3  w-75">
            <p className="bg-white text-2xl font-bold mb-3 pt-4">Electronics</p>
            <Row md={12}>
              {categories.map((product) => (
                <Col md="2" key={product.id}>
                  <Card className="shadow-md hover:shadow-lg  h-60 p-3 mt-4">
                    <CardImg
                      top
                      src={product.image}
                      alt={product.title}
                      className="h-100 p-4 "
                    />

                    <CardTitle
                      tag="h5"
                      className="font-semibold text-gray-700 cursor-pointer text-center"
                    >
                      {product.title?.length > 20
                        ? `${product.title.slice(0, 20)}...`
                        : product.name}
                    </CardTitle>
                  </Card>
                </Col>
              ))}
            </Row>
          </Card>{" "}
          {/* <CardImg
            top
            src="https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg"
            alt="shoes"
            className="h-100 w-25 mt-3"
          /> */}
        </Row>
        <Card className="mt-3 p-3">
          <p className="bg-white text-2xl font-bold mb-2 ">Fasion</p>
          <Row md={12}>
            {categories.map((product) => (
              <Col md="2" key={product.id}>
                <Card className="shadow-md hover:shadow-lg  h-60 p-3 ">
                  <CardImg
                    top
                    src={product.image}
                    alt={product.title}
                    className="h-100 p-4"
                  />

                  {/* <CardTitle
                  tag="h5"
                  className="font-semibold text-gray-700 cursor-pointer absolute bottom-3"
                >
                  {product.title?.length > 20
                    ? `${product.title.slice(0, 20)}...`
                    : product.name}
                </CardTitle> */}
                </Card>
              </Col>
            ))}
          </Row>
        </Card>
        <div className="bg-[#f1f2f4]">
          <Row className="  pt-3 bg-[#f1f2f4]">
            <Col md={4}>
              <Card className="shadow-sm p-3  ">
                <ProductCards />
              </Card>
            </Col>
            <Col md={4}>
              <Card className="shadow-sm p-3  ">
                <ProductCards />
              </Card>
            </Col>
            <Col md={4}>
              <Card className="shadow-sm p-3  ">
                <ProductCards />
              </Card>
            </Col>
          </Row>
        </div>
        <div className="bg-[#f1f2f4] ">
          <Card className="mt-3 p-3 ">
            <p className="bg-white text-2xl font-bold mb-2 ">Electronics</p>
            <Row md={12}>
              {categories.map((product) => (
                <Col md="2" key={product.id}>
                  <Card className="shadow-md hover:shadow-lg  h-60 p-3 ">
                    <CardImg
                      top
                      src={product.image}
                      alt={product.title}
                      className="h-100 p-4"
                    />

                    {/* <CardTitle
                  tag="h5"
                  className="font-semibold text-gray-700 cursor-pointer absolute bottom-3"
                >
                  {product.title?.length > 20
                    ? `${product.title.slice(0, 20)}...`
                    : product.name}
                </CardTitle> */}
                  </Card>
                </Col>
              ))}
            </Row>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Home;
