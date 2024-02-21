//* Question 1

import http from "http";

const server = http.createServer((req, res) => {
   if (req.url == "/") {
      res.statusCode = 200;
      res.end("Welcome all to our Website");
   } else if (req.url == "/men") {
      const menJsonData = [
         {
            id: 1,
            name: "Casual Shirt",
            category: "Shirts",
            color: "Blue",
            size: "M",
            price: 29.99,
         },
         {
            id: 2,
            name: "Slim Fit Jeans",
            category: "Jeans",
            color: "Black",
            size: "32x34",
            price: 39.99,
         },
         {
            id: 3,
            name: "Polo T-shirt",
            category: "T-shirts",
            color: "Red",
            size: "L",
            price: 19.99,
         },
         {
            id: 4,
            name: "Formal Trousers",
            category: "Trousers",
            color: "Gray",
            size: "34",
            price: 49.99,
         },
         {
            id: 5,
            name: "Hooded Sweatshirt",
            category: "Sweatshirts",
            color: "Navy Blue",
            size: "XL",
            price: 34.99,
         },
         {
            id: 6,
            name: "Leather Jacket",
            category: "Jackets",
            color: "Brown",
            size: "L",
            price: 79.99,
         },
         {
            id: 7,
            name: "Denim Shorts",
            category: "Shorts",
            color: "Light Blue",
            size: "30",
            price: 24.99,
         },
         {
            id: 8,
            name: "Striped Dress Shirt",
            category: "Shirts",
            color: "White/Blue",
            size: "M",
            price: 32.99,
         },
         {
            id: 9,
            name: "Cargo Pants",
            category: "Pants",
            color: "Olive Green",
            size: "33x32",
            price: 44.99,
         },
         {
            id: 10,
            name: "V-neck Sweater",
            category: "Sweaters",
            color: "Charcoal",
            size: "XL",
            price: 37.99,
         },
      ];
      res.statusCode = 200;

      res.end(JSON.stringify(menJsonData));
   } else if (req.url == "/women") {
      const womenJsonData = [
         {
            id: 1,
            name: "Summer Floral Dress",
            category: "Dresses",
            color: "Yellow",
            size: "S",
            price: 39.99,
         },
         {
            id: 2,
            name: "Skinny Jeans",
            category: "Jeans",
            color: "Indigo",
            size: "28x30",
            price: 49.99,
         },
         {
            id: 3,
            name: "Crop Top",
            category: "Tops",
            color: "Pink",
            size: "M",
            price: 24.99,
         },
         {
            id: 4,
            name: "Pleated Midi Skirt",
            category: "Skirts",
            color: "Navy Blue",
            size: "L",
            price: 34.99,
         },
         {
            id: 5,
            name: "Off-shoulder Blouse",
            category: "Blouses",
            color: "White",
            size: "S",
            price: 29.99,
         },
         {
            id: 6,
            name: "Maxi Evening Gown",
            category: "Dresses",
            color: "Black",
            size: "L",
            price: 69.99,
         },
         {
            id: 7,
            name: "Wide-leg Palazzo Pants",
            category: "Pants",
            color: "Teal",
            size: "M",
            price: 44.99,
         },
         {
            id: 8,
            name: "Printed Silk Scarf",
            category: "Accessories",
            color: "Multicolor",
            size: "One Size",
            price: 19.99,
         },
         {
            id: 9,
            name: "Casual Jumpsuit",
            category: "Jumpsuits",
            color: "Olive Green",
            size: "XL",
            price: 54.99,
         },
         {
            id: 10,
            name: "Cotton Cardigan",
            category: "Sweaters",
            color: "Gray",
            size: "S",
            price: 27.99,
         },
      ];
      res.statusCode = 200;
      res.end(JSON.stringify(womenJsonData));
   } else if (req.url == "/other") {
      res.statusCode = 404;
      res.end("page not found");
   }
});

server.listen(5000, () => {
   console.log("Server is Running on Port 5000");
});
