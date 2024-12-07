import React from "react";
import { Card } from "reactstrap";

function ProductCards() {
  const products = [
    { id: 1, name: "Product 1", image: "https://via.placeholder.com/100" },
    { id: 2, name: "Product 2", image: "https://via.placeholder.com/100" },
    { id: 3, name: "Product 3", image: "https://via.placeholder.com/100" },
    { id: 4, name: "Product 4", image: "https://via.placeholder.com/100" },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 p-2">
      {products.map((product) => (
        <Card
          key={product.id}
          className="bg-white hover:shadow-lg transition-shadow duration-200 rounded-lg p-4 flex flex-col items-center"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-20 h-20 object-cover rounded-md mb-2"
          />
          <p className="text-gray-800 font-medium">{product.name}</p>
        </Card>
      ))}
    </div>
  );
}

export default ProductCards;
