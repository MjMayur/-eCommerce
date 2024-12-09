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
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
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
    <Row md={12} className="m-3">
      <p className="text-center text-3xl text-bold">Products</p>
      {products.map((product) => (
        <Col md={2} className="mt-5">
          <Card className="shadow-md hover:shadow-lg transition-shadow h-100 ">
            <CardImg
              top
              src={product.images[0]}
              alt={product.title}
              className="h-80 p-5 hover:scale-110 transition-transform duration-300"
            />
            <CardBody>
              <CardTitle tag="h5" className="font-semibold text-gray-700">
                {product.title?.length > 20
                  ? `${product.title.slice(0, 20)}...`
                  : product.title}
              </CardTitle>
              <p className="text-sm">
                {product.description?.length > 40
                  ? `${product.description.slice(0, 40)}...`
                  : product.description}
              </p>
              <div className="bg-success w-14 mt-1 text-[12px] text-white rounded p-1 flex items-center justify-center">
                <i
                  className="fa fa-star  text-[12px] mr-1"
                  aria-hidden="true"
                ></i>
                {product.rating}
              </div>
              <div className="flex justify-between items-center mt-3 p-3">
                <span className="font-bold text-primary absolute bottom-3 left-3 text-2xl">
                  ${product.price}
                </span>
                <Button
                  color="primary bottom-3 absolute right-3"
                  size="sm"
                  onClick={() => addToCart(product)}
                >
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
