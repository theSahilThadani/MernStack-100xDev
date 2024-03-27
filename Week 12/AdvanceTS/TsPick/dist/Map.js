"use strict";
// Initialize an empty Map
const ProductList = new Map();
// Add users to the map using .set
ProductList.set("1", { id: 89, category: "man", stock: "outofstock" });
// Accessing a value using .get
console.log(ProductList.get('1'));
