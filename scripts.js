/*       Exercises       */

// A list of provinces:
const provinces = [
  "Western Cape",
  "Gauteng",
  "Northern Cape",
  "Eastern Cape",
  "KwaZulu-Natal",
  "Free State",
];

// A list of names:
const names = [
  "Ashwin",
  "Sibongile",
  "Jan-Hendrik",
  "Sifso",
  "Shailen",
  "Frikkie",
];

// forEach() Basics: Logs each name and each province to the console. Then, logs each name with a matching province in the format "Name (Province)".
provinces.forEach((province) => console.log(province));
names.forEach((name) => console.log(name));

names.forEach((name, index) => console.log(`${name} (${provinces[index]})`)); // Matches names and provinces in corresponding order

// Uppercase Transformation: Creates a new array of province names in all uppercase. Logs the new array to the console.
const upperCaseProvinces = provinces.map((province) => province.toUpperCase());
console.log(upperCaseProvinces);

// Name Lengths: Creates a new array that contains the length of each name.
const nameLengths = names.map((name) => name.length);
console.log(nameLengths);

// Sorting: Alphabetically sort the provinces.
provinces.sort();
console.log(provinces);

// Filtering Cape: Removes provinces containing "Cape". Logs the count of remaining provinces.
const provincesWithoutCape = provinces.filter(
  (province) => !province.includes("Cape")
);
console.log(provincesWithoutCape.length);

// Finding 'S': Creates a boolean array to determine if a name contains the letter 'S'.
const hasS = names.map((name) => name.toLowerCase().includes("s"));
console.log(hasS);

// Creating Object Mapping: Transforms the names array into an object, mapping names to their respective provinces.
const nameProvinceMap = names.reduce((acc, name, index) => {
  acc[name] = provinces[index] || "No Province Assigned"; // Assign if no province is available
  return acc;
}, {});
console.log(nameProvinceMap);

/*       Advanced Exercises       */

// A list of products with prices:
const products = [
  { product: "banana", price: "2" },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: "8" },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

const productsData = {
  // Iterates over the products array & logs each product name
  productName: products.map((name) => name.product).join(", "),

  // Filters out products with names longer than 5 characters
  productsFilteredByNameLength: products
    .filter((name) => name.product.length <= 5)
    .map((name) => name.product),

  // Filters out products without prices, converts string prices to numbers & calculates the total price.
  totalPrice: products
    .filter((product) => product.price && product.price !== " ") // Filter products with prices
    .reduce((acc, product) => {
      acc += parseInt(product.price); // Convert price to number and add to accumulator
      return acc;
    }, 0),
};

console.log(productsData);
