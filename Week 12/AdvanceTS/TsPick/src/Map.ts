interface product {
    id:number,
    category:string,
    stock:string
}
// Initialize an empty Map
const ProductList = new Map<string,product>();
// Add users to the map using .set
ProductList.set("1",{id:89,category:"man",stock:"outofstock"});
// Accessing a value using .get
console.log(ProductList.get('1'));
