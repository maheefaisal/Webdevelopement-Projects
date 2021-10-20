// x = 10;
// y = 10;
// Using alert
// alert(x + y);

//Using log
// console.log(x - y);

// Window alert
// window.alert(x + y);

// Variable
// var x = 10,
//   y = 10,
//   z = 10;

// alert(x + y + z);

// var x = ["Mahee ", "Mahee ", "Mahee ", "Mahee ", "Mahee "];
// alert(x);

// function mahee() {
//   alert("HelloGuys");
// }

// mahee();

// function gun() {
//   console.log("BAM BAM BAM!!!");
//   document.write("BAM BAM BAM!!!");
//   return "BAM BAM BAM!!!";
// }

// Function example
// function mahee(one,two) {
//   console.log(one+two);
// }

// mahee('one', 'two');

// document.getElementById('text').style.color = "red";
// document.getElementById('text').style.backgroundColor = "black";
// document.getElementById('text').style.fontSize = "100px";
// document.getElementById('texttwo').style.fontFamily = "tahoma";

// var marks_received = 100,
//   pass_marks = 50;
var marks_received = prompt("Enter Your Marks Please");
var pass_marks_for_your_section = prompt(
  "Enter Passing Marks For Your Section"
);
if (marks_received < pass_marks_for_your_section) {
  console.log("Get Out");
} else if (marks_received > pass_marks_for_your_section) {
  console.log("Great Job ");
} else {
  console.log("Uredka");
}
