import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Card,
  CardBody,
  Spinner,
  Row,
  Col,
  Button,
  CardImg,
  Input,
  Badge,
  Container,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import {
  FiHeart,
  FiStar,
  FiShoppingCart,
  FiFilter,
  FiChevronLeft,
} from "react-icons/fi";

function Products() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const category = location.state?.category || "all";
  const [loading, setLoading] = useState(true);
  const [cartProducts, setCartProducts] = useState([]);
  const [sortOption, setSortOption] = useState("featured");
  const [priceRange, setPriceRange] = useState(1000);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Toggle dropdown
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  // Fetch products
  useEffect(() => {
    setLoading(true);
    fetch(
      category !== "all"
        ? `https://dummyjson.com/products/category/${category}`
        : "https://dummyjson.com/products"
    )
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
        setFilteredProducts(data.products);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
        setLoading(false);
      });
  }, [category]);

  // Filter and sort products
  useEffect(() => {
    let result = [...products];

    // Apply search filter
    if (searchQuery) {
      result = result.filter(
        (product) =>
          product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply price filter
    result = result.filter((product) => product.price <= priceRange);

    // Apply brand filter
    if (selectedBrands.length > 0) {
      result = result.filter((product) =>
        selectedBrands.includes(product.brand)
      );
    }

    // Apply sorting
    switch (sortOption) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // Default sorting (featured)
        break;
    }

    setFilteredProducts(result);
  }, [products, sortOption, priceRange, selectedBrands, searchQuery]);

  const addToCart = (product) => {
    const array = [...cartProducts];
    const isProductInCart = array.some((p) => p.id === product.id);

    if (!isProductInCart) {
      array.push({ ...product, quantity: 1 });
      setCartProducts(array);
      localStorage.setItem("cart", JSON.stringify(array));
    }
  };

  const toggleBrandSelection = (brand) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter((b) => b !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  if (loading) {
    return (
      <div className="bg-white w-full h-screen flex flex-col justify-center items-center">
        <Spinner color="primary" style={{ width: "3rem", height: "3rem" }} />
        <p className="mt-3 text-gray-600">Loading products...</p>
      </div>
    );
  }

  // Extract unique brands
  const brands = [...new Set(products.map((product) => product.brand))];

  return (
    <Container fluid className="bg-gray-50 min-h-screen p-0">
      {/* Sticky Header */}
      <div className="sticky top-0 z-10 bg-white shadow-sm py-4 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <Button
              color="link"
              className="text-gray-700 flex items-center"
              onClick={() => navigate(-1)}
            >
              <FiChevronLeft className="mr-1" /> Back
            </Button>

            <h1 className="text-xl md:text-2xl font-bold text-gray-800 capitalize">
              {category.replace(/-/g, " ")} Products
            </h1>

            <div className="relative">
              <Button
                color="primary"
                className="rounded-full relative"
                onClick={() => navigate("/cart")}
              >
                <FiShoppingCart className="text-xl" />
                {cartProducts.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartProducts.length}
                  </span>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto py-6 px-4">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4 bg-white rounded-xl shadow-sm p-5 h-fit sticky top-24">
            <div className="mb-6">
              <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                <FiFilter className="mr-2" /> Filters
              </h2>

              {/* Search Filter */}
              <div className="mb-5">
                <h3 className="font-medium text-gray-700 mb-2">Search</h3>
                <Input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="rounded-full"
                />
              </div>

              {/* Price Filter */}
              <div className="mb-5">
                <h3 className="font-medium text-gray-700 mb-2">
                  Price Range:{" "}
                  <span className="text-primary font-bold">₹{priceRange}</span>
                </h3>
                <Input
                  type="range"
                  min="0"
                  max="2000"
                  step="50"
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>₹0</span>
                  <span>₹2000</span>
                </div>
              </div>

              {/* Brand Filter */}
              <div className="mb-5">
                <h3 className="font-medium text-gray-700 mb-2">Brands</h3>
                <div className="space-y-2">
                  {brands.map((brand) => (
                    <div key={brand} className="flex items-center">
                      <Input
                        type="checkbox"
                        id={brand}
                        checked={selectedBrands.includes(brand)}
                        onChange={() => toggleBrandSelection(brand)}
                        className="rounded text-primary focus:ring-primary"
                      />
                      <label
                        htmlFor={brand}
                        className="ml-2 text-gray-700 capitalize"
                      >
                        {brand}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Reset Filters */}
              <Button
                color="light"
                className="w-full mt-2"
                onClick={() => {
                  setSelectedBrands([]);
                  setPriceRange(1000);
                  setSearchQuery("");
                }}
              >
                Reset Filters
              </Button>
            </div>
          </div>

          {/* Products Section */}
          <div className="lg:w-3/4">
            {/* Sorting Header */}
            <div className="bg-white rounded-xl shadow-sm p-4 mb-6 flex flex-col sm:flex-row justify-between items-center">
              <p className="text-gray-600 mb-2 sm:mb-0">
                Showing{" "}
                <span className="font-bold">{filteredProducts.length}</span>{" "}
                products
              </p>

              <div className="flex items-center">
                <span className="text-gray-700 mr-2">Sort by:</span>
                <Dropdown isOpen={isDropdownOpen} toggle={toggleDropdown}>
                  <DropdownToggle caret className="flex items-center">
                    {sortOption === "featured" && "Featured"}
                    {sortOption === "price-low" && "Price: Low to High"}
                    {sortOption === "price-high" && "Price: High to Low"}
                    {sortOption === "rating" && "Top Rated"}
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem onClick={() => setSortOption("featured")}>
                      Featured
                    </DropdownItem>
                    <DropdownItem onClick={() => setSortOption("price-low")}>
                      Price: Low to High
                    </DropdownItem>
                    <DropdownItem onClick={() => setSortOption("price-high")}>
                      Price: High to Low
                    </DropdownItem>
                    <DropdownItem onClick={() => setSortOption("rating")}>
                      Top Rated
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </div>

            {/* Products Grid */}
            {filteredProducts.length === 0 ? (
              <div className="bg-white rounded-xl shadow-sm p-12 text-center">
                <img
                  src="https://cdni.iconscout.com/illustration/premium/thumb/no-product-found-8867280-7265559.png"
                  alt="No products found"
                  className="w-64 mx-auto mb-6"
                />
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  No products found
                </h3>
                <p className="text-gray-600 mb-4">
                  Try adjusting your filters or search terms
                </p>
                <Button
                  color="primary"
                  onClick={() => {
                    setSelectedBrands([]);
                    setPriceRange(1000);
                    setSearchQuery("");
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            ) : (
              <Row className="g-4">
                {filteredProducts.map((product) => (
                  <Col key={product.id} md={4} sm={6} xs={12}>
                    <Card className="h-full border-0 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                      <div className="relative">
                        <CardImg
                          top
                          src={product.thumbnail}
                          alt={product.title}
                          className="h-48 object-contain p-4 bg-white cursor-pointer"
                          onClick={() => {
                            navigate("/product/details", {
                              state: { productID: product.id },
                            });
                          }}
                        />
                        <Badge
                          color="danger"
                          className="absolute top-2 left-2 px-2 py-1 rounded-md"
                        >
                          {Math.round(20 + Math.random() * 30)}% OFF
                        </Badge>
                        <Button
                          color="link"
                          className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-sm text-gray-500 hover:text-red-500"
                        >
                          <FiHeart size={20} />
                        </Button>
                      </div>

                      <CardBody className="p-4">
                        <div
                          className="cursor-pointer"
                          onClick={() => {
                            navigate("/product/details", {
                              state: { productID: product.id },
                            });
                          }}
                        >
                          <h5 className="text-base font-medium text-gray-800 mb-1">
                            {product.title}
                          </h5>
                          <div className="flex items-center mb-2">
                            {[...Array(5)].map((_, i) => (
                              <FiStar
                                key={i}
                                className={
                                  i < Math.floor(product.rating)
                                    ? "text-yellow-400 fill-current"
                                    : "text-gray-300"
                                }
                                size={14}
                              />
                            ))}
                            <span className="text-xs text-gray-500 ml-1">
                              ({product.rating})
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                            {product.description}
                          </p>
                        </div>

                        <div className="flex items-baseline justify-between">
                          <div>
                            <p className="text-lg font-bold text-gray-900">
                              ₹{product.price}
                            </p>
                            <p className="text-xs text-gray-500 line-through">
                              ₹{(product.price * 1.3).toFixed(2)}
                            </p>
                          </div>
                          <Button
                            color="primary"
                            size="sm"
                            className="rounded-full px-3 flex items-center"
                            onClick={(e) => {
                              e.stopPropagation();
                              addToCart(product);
                            }}
                          >
                            <FiShoppingCart className="mr-1" size={16} />
                            <span>Add</span>
                          </Button>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                ))}
              </Row>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Products;
