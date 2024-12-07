import React, { useEffect, useState } from "react";
import { Button, Card, CardBody, CardImg, CardTitle, Col } from "reactstrap";

function ProductCards(category) {
  const [sports, setSports] = useState([]);
  console.log(category);
  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${category.category}`)
      .then((response) => response.json())
      .then((data) => {
        setSports(data.products);
        console.log(data.products);
        // setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
        // setLoading(false);
      });
  }, []);

  return (
    <div className="grid grid-cols-2 ">
      {" "}
      {/* Adjusted gap for reduced vertical space */}
      {sports.slice(0, 4).map((product) => (
        <Col md="12" key={product.id} className="p-2">
          <Card className=" hover:shadow-lg transition-shadow p-2">
            <CardImg
              top
              src={product.thumbnail}
              alt={product.name}
              className=" h-60"
            />
            <CardBody className="">
              <CardTitle
                tag="h5"
                className="font-semibold text-gray-700 text-center"
              >
                {product.title.length > 10
                  ? `${product.title.slice(0, 20)}...`
                  : product.title}
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
