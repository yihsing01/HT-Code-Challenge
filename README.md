# HT-Code-Challenge
## Q1 - Crispy Dollop

### Problem Description

The problem statement of this question is to program a function that takes a number as input and returns the next bigger number by rearrangeing the same digits. For instance:
- `12` ==> `21`
- `513` ==> `531`
- `2017` ==> `2071`

If it is impossible to rearrange the digits to form a bigger number, the function should return `-1`. For example:
- `9` ==> `-1`
- `111` ==> `-1`
- `531` ==> `-1`

### Solution

The solution involves finding the next bigger number by rearranging the digits in the input number. The function first converts the input number into an array. Then, the function checks if the input number either only has one digit or only has the same digit, which will return `-1`. If not, then starting form right to left, the function searches for the first digit that is smaller than the digit on its right. If the function reaches the leftmost digit and still does not find it, it will return `-1`. If the digit is found, it identifies its next bigger digit among the digits on its right. These two digits are swapped, the remaining digits on the right are then sorted in ascending order to form the next bigger number.

### Reasoning Behind the Solution

1. **Convert to Array**: For easier manipulation and comparison of individual digits.
2. **Check for Single or Same Digit Number**: If the input number consists of only a single digit or only the same digit, it is impossible to rearrange them to form a bigger number.
3. **Identify a Position for Rearrangement**: Scanning the digits from right to left to identify the first instance where a digit is smaller then the digit on its right. This indicates a position where rearrangement can create a bigger number. If not found, it indicates that it is impossible to form a bigger number.
4. **Swap with the Smallest Larger Digit on the Right**: The algorithm locates the smallest larger digit to the right of the identified digit from the previous step. The two identified digits are swapped to create the next immediate larger number while minimising changes to the original number.
5.  **Sort the Remaining Digits Ascendingly**: The remaining digits on the right are sorted ascendingly to ensure the smallest possible number for the new arrangement, resulting in the next bigger number from the input.

### Trade-offs and Omissions

- **Input Validation and Error Handling**: The code does not handle non-numeric inputs or other potential errors.
- **Performance**: The code contains numerous iterations, loops, and conditional statements, which could result in a potentially higher time complexity for bigger input numbers.
- **Optimisation**: The algorithm could be optimise to be simpler and more readable while achieving the same result.

### Possible Improvements

Given more time, the additional improvements that could be made:
- **Input Validation and Error Handling**: Implementing validations for invalid inputs and error handling.
- **Performance Enhancement**: Optimising the algorithm to reduce time complexity for bigger numbers.
- **Code Optimisation**: Simplify and modularise the code to improve readability and maintainability while achieving the same result.

## Q2 -Scaling Umbrella

### Problem Description

The problem statement of this question is to program a function that takes an `n x n` input array and returns the array elements arranged from the outermost elements to the middle element, traveling clockwise.

For example:
```
array = [[1,2,3],
	 [4,5,6],
	 [7,8,9]]

arrange(array) #=> [1,2,3,6,9,8,7,4,5]

array = [[1,2,3],
	 [8,9,4],
	 [7,6,5]]

arrange(array) #=> [1,2,3,4,5,6,7,8,9]
```

### Solution

The solution involves traversing the array in a clockwise direction from the top left element to the inner elements. In the function, the top left element is initialised as the starting point going right. A counter is created to keep track of the progress. A while loop is programmed to keep going while a counter is used to stop it once the task is completed. For each while loop iteration, an inner for loop will traverse through all the elements of a particular direction. The index of the current element is always recorded for the algorithm to figure out what action to take next. The direction changes based on the previous direction to form a clockwise movement. The function keeps track of the boundaries of the array, and updates the traversed elements as new boundaries. The function will not traverse the boundaries. For each element traversed, the function collects the elements, appends it to an output array, and increment the counter by one unit. After all the elements are collected, the output array is displayed.

### Reasoning Behind the Solution

1. **Counter as Ending Condition for Loop**: The counter is incremented by one unit after an element is collected. It is set to end the loop once its value reaches the total number of elements in the array, which is when all the elements are collected.
2. **Keep Track of the Index of Current Element**: The index of the current element is always kept track of as it is an important variable to let the algorithm know what to do next.
3. **Movement and Boundary System**: This is how the algorithm decides what to do:
     - **If the current element has not been recorded**: The element will be appended to the answer array, the position of the current element will be set as a boundary, the counter will be incremented by one unit.
     - **If the next element in the current direction is not a boundary and has not been recorded**: The algorithm will traverse in the same direction by one unit.
     - **If the next element in the current direction is a boundary or has been recorded**: The algorithm will stay at the same position. In the next iteration, the algorithm will identify that the element of the current position has been recorded, it will do nothing until the loop ends.
     - **After the loop ends for the current direction ends**: The direction will be changed to the next, and the algorithm will then traverse to the element in the next direction.

### Trade-offs and Omissions

- **Input Validation and Error Handling**: The code does not handle invalid array dimension, invalid element data type, or other potential errors.
- **Performance**: The code contains numerous iterations, loops, and conditional statements, which could result in a potentially higher time complexity for arrays with higher dimension.
- **Complexity**: The code might be complex and harder to understand and maintain as there are many variables and multiple loops and conditional statements involved.

### Possible Improvements

With additional time, improvements could be made in the following areas:
- **Input Validation and Error Handling**: Implementing validations for invalid inputs and error handling.
- **Performance Enhancement**: Optimising the algorithm to reduce time complexity for bigger numbers.
- **Code Optimisation**: Simplify and modularise the code to improve readability and maintainability while achieving the same result.
