import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, CardBody, CardImg, CardTitle, Col } from "reactstrap";

function ProductCards(category) {
  const [sports, setSports] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${category.category}`)
      .then((response) => response.json())
      .then((data) => {
        setSports(data.products);

        // setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
        // setLoading(false);
      });
  }, []);

  const addToCart = (value) => {
    const array = [...cartProducts];

    // Check if the product is already in the cart
    const isProductInCart = array.some((product) => product.id === value.id);

    if (!isProductInCart) {
      array.push(value);
      setCartProducts(array);
      localStorage.setItem("product", JSON.stringify(array));
    } else {
      console.log("Product is already in the cart");
    }
  };

  return (
    <div className="grid grid-cols-2 ">
      {" "}
      {/* Adjusted gap for reduced vertical space */}
      {sports.slice(0, 4).map((product) => (
        <Col md="12" key={product.id} className="p-2">
          <Card
            className=" hover:shadow-lg transition-shadow p-2 hover:text-[#0d6efd] cursor-pointer"
            onClick={() => {
              navigate("/product/details", {
                state: {
                  productID: product.id,
                },
              });
            }}
          >
            <CardImg
              top
              src={product.thumbnail}
              alt={product.name}
              className=" h-60"
            />
            <CardBody className="">
              <CardTitle tag="h5" className="font-semibold  text-center ">
                {product.title.length > 10
                  ? `${product.title.slice(0, 20)}...`
                  : product.title}
              </CardTitle>
              <p className="text-sm text-center">
                {product.description?.length > 45
                  ? `${product.description.slice(0, 45)}...`
                  : product.description}
              </p>
              <div className="flex justify-between items-center pt-8">
                <span className="font-bold text-primary absolute bottom-3 left-3">
                  {product.price ? `$${product.price}` : "N/A"}
                </span>
                <Button
                  color="primary"
                  size="sm"
                  className="absolute bottom-3 right-3"
                  onClick={(event) => {
                    event.stopPropagation(); // Prevent bubbling
                    addToCart(product);
                  }}
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
