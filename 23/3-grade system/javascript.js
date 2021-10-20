var marks_received = prompt("Enter Your Marks");

// First condition
if (marks_received < 30) {
  document.write("Better Luck Next Time.");
}

// Second Condition
else if (marks_received <= 30) {
  document.write("You Passed Work harder");
}

// Third Condition
else if (marks_received > 30 && marks_received < 60) {
  document.write("You Got B. Great Job Lad.");
}

// Fourth Condition
else if (marks_received > 60 && marks_received < 80) {
  document.write("You Got A. Its party time.");
}

// Fifth Condition
else if (marks_received > 80 && marks_received < 100) {
    document.write("You Got A+. Time for booze.");
  }
  
else{
    document.write('Error');
}