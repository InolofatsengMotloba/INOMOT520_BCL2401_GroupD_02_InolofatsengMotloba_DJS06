# DJS06 Project Brief: Higher Order Functions

## Objective

This project has challenged and deepened your understanding of JavaScript's powerful array methods. I manipulated data using `forEach`, `map`, `filter`, `reduce`, and more, to perform a variety of tasks. This exercise tested my ability to apply these methods in combination to solve complex problems and achieve desired outcomes.

#### Exercises

1. **ForEach Basics**: Used `forEach` to log each name and each province to the console. Then, log each name with a matching province in the format "Name (Province)".
2. **Uppercase Transformation**: Used `map` to create a new array of province names in all uppercase. Logged the new array to the console.
3. **Name Lengths**: Created a new array using `map` that contains the length of each name.
4. **Sorting**: Used `sort` to alphabetically sort the provinces. 
5. **Filtering Cape**: Used `filter` to remove provinces containing "Cape". Logged the count of remaining provinces.
6. **Finding 'S'**: Created a boolean array using `map` and `some` to determine if a name contains the letter 'S'.
7. **Creating Object Mapping**: Used `reduce` to transform the names array into an object, mapping names to their respective provinces.

#### Advanced Exercises (Single `console.log` Execution)
For these exercises, I wrapped my logic in an object and `console.log` the object:

1. **Log Products**: Iterated over the products array, logging each product name.
2. **Filter by Name Length**: Filtered out products with names longer than 5 characters.
3. **Price Manipulation**: Filtered out products without prices, converted string prices to numbers, and calculated the total price using `reduce`.
4. **Concatenate Product Names**: Used `reduce` to concatenate all product names into a single string.
5. **Find Extremes in Prices**: Identified the highest and lowest-priced items, returning a string formatted as "Highest: X. Lowest: Y."
6. **Object Transformation**: Using `Object.entries` and `reduce`, I recreated the products object with keys 'name' and 'cost', maintaining their original values.


