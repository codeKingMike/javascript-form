console.log("JS is working!");


const inputs = document.getElementsByClassName('form-control');

const ten = 10;

const getName = (firstName = "John", lastName = "Doe") => {
    return "Hello my name is " + firstName + " " + lastName;
}


const addADub = (number = 0) => {
    return number + 20;
}

getName("Jake", "Smith");

console.log(getName("Jake", "Smith"));
console.log(getName("Mike", "Jones"));
console.log(getName("Amy", "Pover"));
console.log(getName("Luke", "Skywalker"));

console.log(getName(ten, ten));


document.addEventListener("click", function() {
    function changeColor() {
        document.getElementsByClassName('form-control').style.backgroundColor = "red";
    }
});

// Displays Input Results When User Fills Out Form And Click Button
function displayResult() {
    // Display Email Demo
    var emailResults = document.getElementById("inputEmail4").value;
    document.getElementById("demo").innerHTML = "Your email is: " + "<h2 style='font-weight:bold;'>" + emailResults + "</h2>";
    console.log("Your email is: " + emailResults);

    // Display Email Demo1
    var passwrdResults = document.getElementById("inputPassword4").value;
    document.getElementById("demo1").innerHTML = "Password: " + "<h2 style='font-weight:bold;'>" + passwrdResults + "</h2>";
    console.log("Your password is: " + passwrdResults);

    // Display Address Demo2
    var addressResults = document.getElementById("inputAddress").value;
    document.getElementById("demo2").innerHTML = "Address: " + "<h2 style='font-weight:bold;'>" + addressResults + "</h2>";
    console.log("Your email is: " + addressResults);

    // Display City Demo3
    var cityResults = document.getElementById("inputCity").value;
    document.getElementById("demo3").innerHTML = "City: " + "<h2 style='font-weight:bold;'>" + cityResults + "</h2>";
    console.log("Your city is: " + cityResults);

    // Display State Demo4
    var stateResults = document.getElementById("inputState").value;
    document.getElementById("demo4").innerHTML = "State: " + "<h2 style='font-weight:bold;'>" + stateResults + "</h2>";
    console.log("Your state is: " + stateResults);

    // Display Zip Demo5
    var zipResults = document.getElementById("inputZip").value;
    document.getElementById("demo5").innerHTML = "Zip Code: " + "<h2 style='font-weight:bold;'>" + zipResults + "</h2>";
    console.log("Your zip code is: " + zipResults);

    // Display Checkded Demo6
    var ckeckboxResults = document.getElementById("gridCheck").checked;
    document.getElementById("demo6").innerHTML = "Box Checked: " + "<h2 style='font-weight:bold;'>" + ckeckboxResults + "</h2>";
    console.log("Box Checked: " + ckeckboxResults);
    
};


