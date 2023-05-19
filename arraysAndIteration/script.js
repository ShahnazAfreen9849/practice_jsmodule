// Creates an array containing names of five students in the class
var students = ["Sarah", "Saba", "Sana", "David", "Tom"];


// Logs length of the students array
console.log(students.length);

// Now, write a console log introducing each student
console.log("Welcome to the class " + students[0]);
console.log("Welcome to the class " + students[1]);
console.log("Welcome to the class " + students[2]);
console.log("Welcome to the class " + students[3]);
console.log("Welcome to the class " + students[4]);

// Replace the first student in the array with a new student Bob.
students[0] = "Bob";

// Use your Javascript to check if "Bob" is the first elemnt in the array 
if (students[0] === "Bob") {
    console.log(students[0] + " is in the class");
}

//Iteration activity

// For loop starts at 0, runs while i is less than length of student array
  // Increments by 1
for (var i = 0; i < students.length; i++) {
    // This statement will run each time the loop is executed
    console.log("Great to see you, " + students[i] + " !");

}

