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
  Badge,
} from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import ProductCards from "../BoxCards";
import { useNavigate } from "react-router-dom";
import SmartPhones from "./SmartPhones";
import Fashion from "./Fasion";
import {
  FiGift,
  FiHeart,
  FiShield,
  FiShoppingCart,
  FiStar,
  FiTruck,
} from "react-icons/fi";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

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
  const smartphones = products.filter((p) => p.category === "electronics");
  const beauty = products.filter((p) => p.category === "jewelery");
  if (loading) {
    return (
      <div className="bg-white w-full h-screen flex justify-center items-center ">
        <Spinner color="primary">Loading...</Spinner>
      </div>
    );
  }

  const ProductCard = ({ product }) => (
    <>
      <Card className="h-full border-0 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
        <div className="relative">
          <CardImg
            top
            src={product.image}
            alt={product.title}
            className="h-48 object-contain p-4 bg-white"
          />
          <Badge
            color="danger"
            className="absolute top-2 right-2 px-2 py-1 rounded-md"
          >
            {Math.round(20 + Math.random() * 30)}% OFF
          </Badge>
          <Button
            color="link"
            className="absolute bottom-2 right-2 p-1 bg-white rounded-full shadow-sm text-gray-500 hover:text-red-500"
          >
            <FiHeart size={20} />
          </Button>
        </div>
        <CardBody className="p-4">
          <CardTitle
            tag="h5"
            className="text-sm font-medium text-gray-800 mb-1 truncate"
          >
            {product.title}
          </CardTitle>
          <div className="flex items-center mb-2">
            {[...Array(5)].map((_, i) => (
              <FiStar
                key={i}
                className={
                  i < 4 ? "text-yellow-400 fill-current" : "text-gray-300"
                }
                size={14}
              />
            ))}
            <span className="text-xs text-gray-500 ml-1">
              ({Math.floor(Math.random() * 100) + 50})
            </span>
          </div>
          <div className="flex items-baseline justify-between">
            <div>
              <p className="text-lg font-bold text-gray-900">
                ₹{product.price.toFixed(2)}
              </p>
              <p className="text-xs text-gray-500 line-through">
                ₹{(product.price * 1.3).toFixed(2)}
              </p>
            </div>
            <Button
              color="primary"
              size="sm"
              className="rounded-full px-3 flex items-center"
              onClick={() => navigate(`/product/${product.id}`)}
            >
              <FiShoppingCart className="mr-1" size={16} />
              <span>Add</span>
            </Button>
          </div>
        </CardBody>
      </Card>
    </>
  );
  const CategoryCard = ({ title, icon, bgColor, onClick }) => (
    <div
      className="flex flex-col items-center justify-center p-4 rounded-xl cursor-pointer hover:shadow-md transition-all duration-300"
      style={{ backgroundColor: bgColor }}
      onClick={onClick}
    >
      <div className="bg-white rounded-full p-3 mb-2">{icon}</div>
      <h3 className="text-sm font-medium text-gray-800 text-center">{title}</h3>
    </div>
  );

  const ServiceCard = ({ icon, title, description }) => (
    <div className="flex items-start p-3">
      <div className="text-blue-600 mt-1 mr-3">{icon}</div>
      <div>
        <h4 className="font-medium text-gray-800">{title}</h4>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
  return (
    <div className="bg-[#f1f2f4] p-3">
      {/* Hero Section - Made responsive with height adjustments */}
      <div className="w-full mb-6">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop
          className="h-[40vh] md:h-[50vh] rounded-xl overflow-hidden"
        >
          <SwiperSlide>
            <div className="relative h-full w-full">
              <img
                src="https://images.unsplash.com/photo-1607083206968-13611e3d76db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1512&q=80"
                alt="Summer Sale"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
                <div className="container mx-auto px-6 text-white">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-lg mb-3">
                    Summer Sale is Live!
                  </h1>
                  <p className="text-lg max-w-md mb-6">
                    Up to 50% off on all electronics and gadgets
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative h-full w-full">
              <img
                src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="New Collection"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-black/70 to-transparent flex items-center justify-end">
                <div className="container mx-auto px-6 text-white text-right">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-lg mb-3 ml-auto">
                    New Fashion Collection
                  </h1>
                  <p className="text-lg max-w-md mb-6 ml-auto">
                    Discover the latest trends for this season
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative h-full w-full">
              <img
                src="https://images.unsplash.com/photo-1571115177098-24ec42ed204d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1467&q=80"
                alt="Beauty Products"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900/70 to-transparent flex items-center">
                <div className="container mx-auto px-6 text-white">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-lg mb-3">
                    Premium Beauty Products
                  </h1>
                  <p className="text-lg max-w-md mb-6">
                    Luxury skincare and cosmetics at amazing prices
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800">Beauty Products</h2>
          <Button
            color="link"
            className="text-blue-600 font-medium"
            onClick={() =>
              navigate("/products", { state: { category: "beauty" } })
            }
          >
            View All
          </Button>
        </div>
        <Swiper
          modules={[FreeMode, Navigation]}
          freeMode
          navigation
          slidesPerView={2}
          spaceBetween={15}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
        >
          {beauty.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* Main Content Container */}
      <Container fluid>
        {/* Smartphones Section - Responsive grid layout */}
        <Row className="mb-4">
          {/* <Col lg={9} md={8} sm={12} className="mb-3 mb-md-0">
            <Card className="cursor-pointer h-full"> */}
          {/* <CardBody>
                <p
                  className="text-2xl font-bold mb-3"
                  onClick={() =>
                    navigate("/products", {
                      state: { category: "smartphones" },
                    })
                  }
                >
                  Smart Phones
                </p>
                <SmartPhones />
              </CardBody> */}
          {/* </Card>
          </Col> */}

          {/* <Col lg={3} md={4} className="d-none d-md-block"> */}
          <CardImg
            top
            src="https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg"
            alt="shoes"
            className="h-full w-full object-cover"
          />
          {/* </Col> */}
        </Row>

        <Row className="mb-4">
          <Col md={4} sm={6} xs={12} className="mb-3">
            <Card className="shadow-sm h-full">
              <CardBody>
                <ProductCards category={"beauty"} />
              </CardBody>
            </Card>
          </Col>
          <Col md={4} sm={6} xs={12} className="mb-3">
            <Card className="shadow-sm h-full">
              <CardBody>
                <ProductCards category="kitchen-accessories" />
              </CardBody>
            </Card>
          </Col>
          <Col md={4} sm={6} xs={12} className="mb-3">
            <Card className="shadow-sm h-full">
              <CardBody>
                <ProductCards category={"groceries"} />
              </CardBody>
            </Card>
          </Col>
        </Row>

        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-800">Smart Products</h2>
            <Button
              color="link"
              className="text-blue-600 font-medium"
              onClick={() =>
                navigate("/products", { state: { category: "smartphones" } })
              }
            >
              View All
            </Button>
          </div>
          <Swiper
            modules={[FreeMode, Navigation]}
            freeMode
            navigation
            slidesPerView={2}
            spaceBetween={15}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
            }}
          >
            {smartphones.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Shop by Category
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <CategoryCard
            title="Electronics"
            icon={<FiTruck size={24} className="text-blue-600" />}
            bgColor="#e0f2fe"
            onClick={() =>
              navigate("/products", { state: { category: "electronics" } })
            }
          />
          <CategoryCard
            title="Fashion"
            icon={<FiGift size={24} className="text-pink-600" />}
            bgColor="#fce7f3"
            onClick={() =>
              navigate("/products", { state: { category: "clothing" } })
            }
          />
          <CategoryCard
            title="Beauty"
            icon={<FiStar size={24} className="text-purple-600" />}
            bgColor="#f3e8ff"
            onClick={() =>
              navigate("/products", { state: { category: "beauty" } })
            }
          />
          <CategoryCard
            title="Home"
            icon={<FiShield size={24} className="text-green-600" />}
            bgColor="#dcfce7"
            onClick={() =>
              navigate("/products", { state: { category: "home" } })
            }
          />
          <CategoryCard
            title="Groceries"
            icon={<FiShoppingCart size={24} className="text-yellow-600" />}
            bgColor="#fef9c3"
            onClick={() =>
              navigate("/products", { state: { category: "groceries" } })
            }
          />
          <CategoryCard
            title="Toys"
            icon={<FiHeart size={24} className="text-red-600" />}
            bgColor="#fee2e2"
            onClick={() =>
              navigate("/products", { state: { category: "toys" } })
            }
          />
        </div>
      </div>
      <div className="bg-white rounded-xl shadow-sm p-4 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <ServiceCard
            icon={<FiTruck size={24} />}
            title="Free Shipping"
            description="On orders over ₹50"
          />
          <ServiceCard
            icon={<FiShield size={24} />}
            title="Secure Payments"
            description="100% protected payments"
          />
          <ServiceCard
            icon={<FiGift size={24} />}
            title="Daily Offers"
            description="Discounts up to 70%"
          />
          <ServiceCard
            icon={<FiStar size={24} />}
            title="Premium Quality"
            description="Guaranteed satisfaction"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
