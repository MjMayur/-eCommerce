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

import ProductCards from "../BoxCards";
import { useNavigate } from "react-router-dom";
import SmartPhones from "./SmartPhones";
import Fashion from "./Fasion";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="bg-white w-full h-screen flex justify-center items-center ">
        <Spinner color="primary">Loading...</Spinner>
      </div>
    );
  }

  return (
    <div className="bg-[#f1f2f4] p-3">
      {/* Hero Section */}

      <div className="relative w-full h-screen  absolute top-0">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={true}
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
        </Swiper>

        {/* Featured Products */}
        <Row className="p-2">
          <Card className="mt-3  w-75 cursor-pointer">
            <p
              className="bg-white text-2xl font-bold mb-3 pt-4 "
              onClick={() =>
                navigate("/products", {
                  state: { category: "smartphones" },
                })
              }
            >
              Smart Phones
            </p>
            <SmartPhones />
          </Card>{" "}
          <CardImg
            top
            src="https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg"
            alt="shoes"
            className="h-100 w-25 mt-3"
          />
        </Row>
        <Card
          className="p-3"
          onClick={() =>
            navigate("/products", {
              state: { category: "beauty" },
            })
          }
        >
          <p className="bg-white text-2xl font-bold  pt">Beuty</p>
          <Fashion />
        </Card>
        <div className="bg-[#f1f2f4]">
          <Row className="  pt-3 bg-[#f1f2f4]">
            <Col md={4}>
              <Card className="shadow-sm p-3  ">
                <ProductCards category={"beauty"} />
              </Card>
            </Col>
            <Col md={4}>
              <Card className="shadow-sm p-3  ">
                <ProductCards category="kitchen-accessories" />
              </Card>
            </Col>
            <Col md={4}>
              <Card className="shadow-sm p-3  ">
                <ProductCards category={"groceries"} />
              </Card>
            </Col>
          </Row>
        </div>
        <Card className="p-3 mt-3 mb-3">
          <p className="bg-white text-2xl font-bold  pt">Beuty</p>
          <Fashion />
        </Card>
      </div>
    </div>
  );
};

export default Home;
