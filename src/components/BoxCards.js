import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Toast,
  ToastHeader,
  ToastBody,
  Button,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  Col,
  Alert,
} from "reactstrap";

function ProductCards(category) {
  const [sports, setSports] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [toast, setToast] = useState({ visible: false, message: "" });
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${category.category}`)
      .then((response) => response.json())
      .then((data) => {
        setSports(data.products);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });
  }, []);

  const addToCart = (value) => {
    const array = [...cartProducts];
    const isProductInCart = array.some((product) => product.id === value.id);

    if (!isProductInCart) {
      array.push(value);
      setCartProducts(array);
      localStorage.setItem("product", JSON.stringify(array));
      setToast({
        code: 200,
        visible: true,
        message: `Added "${value.title}" to cart!`,
      });
    } else {
      setToast({
        code: 400,
        visible: true,
        message: `"${value.title}" is already in the cart.`,
      });
    }
    setTimeout(() => {
      setToast({
        visible: false,
        message: "",
      });
    }, 3000);
  };

  return (
    <div className="grid grid-cols-2 ">
      {/* Toast Notification */}
      {toast.visible && (
        <div
          className="position-fixed top-20 start-50 translate-middle p-3"
          style={{ zIndex: 1050 }}
        >
          {toast.code === 200 ? (
            <Alert color="primary">{toast.message}.</Alert>
          ) : (
            <Alert color="danger">{toast.message}.</Alert>
          )}
        </div>
      )}

      {sports.slice(0, 4).map((product) => (
        <Col md="12" key={product.id} className="p-2">
          <Card
            className="hover:shadow-lg transition-shadow p-2 hover:text-[#0d6efd] cursor-pointer"
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
              className="h-60"
            />
            <CardBody className="">
              <CardTitle tag="h5" className="font-semibold text-center">
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
                    event.stopPropagation();
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
