// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

// forEach() Basics: Logs each name and each province to the console. Then, logs each name with a matching province in the format "Name (Province)".
provinces.forEach((province) => console.log(province));
names.forEach((name) => console.log(name));

names.forEach((name, index) => console.log(`${name} (${provinces[index]})`)); // Matches names and provinces in corresponding order

// Uppercase Transformation: Creates a new array of province names in all uppercase. Log the new array to the console.
const upperCaseProvinces = provinces.map((province) => province.toUpperCase());
console.log(upperCaseProvinces);

// Name Lengths: Creates a new array that contains the length of each name.
const nameLengths = names.map((name) => name.length);
console.log(nameLengths);
