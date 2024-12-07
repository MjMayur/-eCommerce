import React from "react";
import { Button, Card, CardBody, CardImg, CardTitle, Col } from "reactstrap";

function ProductCards() {
  const products = [
    {
      id: 1,
      name: "Product 1",
      image:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAuAMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAAAQIDBAUGBwj/xAA5EAABAwIEBAQFAQUJAAAAAAABAAIDBBEFBhIhEzFBYSJRcYEHFDKRoUIjM1Ji8BUWNIKSscHR8f/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABkRAQEBAQEBAAAAAAAAAAAAAAABEQIhEv/aAAwDAQACEQMRAD8A9m...",
      price: "25.00",
    },
    {
      id: 2,
      name: "Product 2",
      image: "https://via.placeholder.com/100",
      price: "15.00",
    },
    {
      id: 3,
      name: "Product 3",
      image: "https://via.placeholder.com/100",
      price: "30.00",
    },
    {
      id: 4,
      name: "Product 4",
      image: "https://via.placeholder.com/100",
      price: "20.00",
    },
  ];

  return (
    <div className="grid grid-cols-2 ">
      {" "}
      {/* Adjusted gap for reduced vertical space */}
      {products.map((product) => (
        <Col md="12" key={product.id} className="p-2">
          <Card className=" hover:shadow-lg transition-shadow p-2">
            <CardImg
              top
              src={product.image}
              alt={product.name}
              className=" h-60"
            />
            <CardBody className="">
              <CardTitle
                tag="h5"
                className="font-semibold text-gray-700 text-center"
              >
                {product.name.length > 30
                  ? `${product.name.slice(0, 20)}...`
                  : product.name}
              </CardTitle>
              <div className="flex justify-between items-center pt-8">
                <span className="font-bold text-primary absolute bottom-3 left-3">
                  {product.price ? `$${product.price}` : "N/A"}
                </span>
                <Button
                  color="primary"
                  size="sm"
                  className="absolute bottom-3 right-3"
                >
                  Add to Cart
                </Button>
              </div>
            </CardBody>
          </Card>
        </Col>
      ))}
    </div>
  );
}

export default ProductCards;
