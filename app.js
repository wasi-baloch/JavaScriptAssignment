// alert("Welcome to Java World")

// var str = "Hello World!";
// var enc = window.btoa(str);
// var dec = window.atob(enc);

// var res = "Encoded String: " + enc + "<br>" + "Decoded String: " + dec;








///////////---- Chapter No.1

function greet() {

    alert("welcome to Java World!");
}

function invalidPassword() {

    alert("Error! Please enter a valid password");
}

function lineBreak() {

    alert("Welcome to JS Land...\n Happy Coding!");
}
function sequence() {
    alert("Welcome to JS Land...");
    alert("Happy Coding! \n Prevent this page from creting additional dialogs.");
    // alert("Happy Coding!");
}

function consoleMessage() {
    alert("Hello...! I can run JS through my web browser's console");
}

function doSequence() {

    document.getElementById('test').innerHTML = '1';
    alert('2');
    // document.getElementById('test').innerHTML = '3';
    // alert('4');
    // document.getElementById('test').innerHTML = '5';
    // alert('6');
}

////------ Chapter NO.2 Declaration
var username;
var myName = "Waseem Abbas Baloch"

function helloMessage() {
    var message = "Hello World"
    alert(message);
}

function studentBioDate() {
    var stdName = "Waseem Abbas";
    var age = "30 years";
    var rollNo = "WM12286";
    var stdClass = "Web & Mobile app Development "

    // var message="Name: " + name + " age:" + age
    var message = "Name: " + stdName + "\nage: " + age + "\nRollNo. " + rollNo + "\nClass: " + stdClass;

    alert(message);
}

function pizza() {
    var pizzaVariable = "PIZZA";
    var pizzaMessage = pizzaVariable + "\n" + pizzaVariable.slice(0, pizzaVariable.length - 1) + "\n" + pizzaVariable.slice(0, pizzaVariable.length - 2)
        + "\n" + pizzaVariable.slice(0, pizzaVariable.length - 3) + "\n" + pizzaVariable.slice(0, pizzaVariable.length - 4)

    alert(pizzaMessage);
}

function emailMessage() {
    var email = "example@example.com";
    var message = "My email address is " + email
    alert(message);
}
function bookMessage() {
    var book = "A smarter way to learn JavaScript";
    var message = "I am trying to learn the Book " + book
    alert(message);
}

function broswerMessage() {
    document.write("Yah! I can write HTML content through JavaScript");
}

function symbolMessage() {
    var message = "\u2014 " + "\u2014 " + "\u2014 " + "\u2014 " + "\u2014 " + "\u0153" + "\u2111" + "\u2297" + "\u0153" + "\u2111" + "\u2014 " + "\u2014 " + "\u2014 " + "\u2014 " + "\u2014 "
    alert(message);

}

///// Chapter No. 3

function ageMessage3() {
    var age = "15";
    var message = "I am " + age + " years old"
    alert(message);
}


function incrementAndShowValue() {

    var hitsCount = 0
    var message;
    // Integer hitsCount = (Integer)application.getAttribute("hitCounter");
    if (hitsCount == null || hitsCount == 0) {

        hitsCount = 1;
    } else {

        hitsCount += 1;
    }
    // application.setAttribute("hitCounter", hitsCount);
    message = "You have visited this site " + hitsCount + " times";

    alert(message);
}

function broswerMessageForBirth() {
    var birthYear = 1990;
    var message = "My birth year is " + birthYear + "\nDate type of my declared variable is number";
    document.write(message);
}

function broswerMessageForClothing() {
    var visitorName = "John Doe"
    var productTitle = " T-shirts"
    var quantity = 5
    var message = visitorName + " ordered " + quantity + productTitle + "on XYZ Clothing store."

    document.write(message);
}

//////////////////// Chapter No.4
function broswerMessageForIllegal() {
    var variable1, variable2, variable3;
    var txt = "Hello"
    var ruleVariable = "Rules for naming JS veriables"
    // document.write(rule.bold());

    var message = "Variables names can only, numbers, $ and _. For example $my_1stVeriable" +
        "<br> Variable must begin with a letter, $ or  _. For example : $name, _name or name" +
        "<br> Variable name are case sensitive" + "<br> Variable names should not be JS keywords";

    document.write(ruleVariable.bold());

    document.write("<br>")
    document.write("<br>")
    document.write("<br>")

    document.write(message);
}
//////////// Chapter no.5
function addTwoNuumbers() {
    var variable1 = 3;
    var variable2 = 5;
    var variable3 = variable1 + variable2;

    document.write("Sum of " + variable1 + " and " + variable2 + " is " + variable3);
}

function operationsTwoNuumbers() {
    var variable1 = 3;
    var variable2 = 5;
    var variable3 = variable1 + variable2;

    var _sub = variable2 - variable1;
    var _mul = variable2 * variable1;
    var _div = variable2 / variable1;
    var _mod = variable2 % variable1;

    document.write("Subtraction of " + variable2 + " and " + variable1 + " is " + _sub + "<br>");
    document.write("Multiplication of " + variable2 + " and " + variable1 + " is " + _mul + "<br>");
    document.write("Division of " + variable2 + " and " + variable1 + " is " + _div + "<br>");
    document.write("Modulus of " + variable2 + " and " + variable1 + " is " + _mod + "<br>");

}
function jsMathematicExpression() {
    var variable1;
    document.write("Value after variable declaration is: " + variable1);
    variable1 = 5;
    document.write("<br>Initial value: " + variable1);
    variable1 = variable1 + 1;
    document.write("<br>Value after increment is: " + variable1);
    variable1 = variable1 + 7;
    document.write("<br>Value after addition is: " + variable1);
    variable1 = variable1 - 1;
    document.write("<br>Value after decrement is: " + variable1);
    variable1 = variable1 % 3;
    document.write("<br>The remainder is: " + variable1);
}
function movieTicket() {
    var costOfTicket = 600;
    var totalCost = costOfTicket * 5
    document.write("Total cost to buy 5 tickets to a movie is " + totalCost + "PKR")
}
function mathTable() {
    var tableNumber = 4
    var i = 1;
    var multiplier;

    // multiplier = prompt("Enter a Multiplication Table max multiplier", multiplier)

    document.write("Table of 4 ");

    for (i = 1; i <= 10; i++) {
        document.write("<br>" + tableNumber + "x" + i + "=" + i * tableNumber);
        // document.write("<br>");
    }

}

function temperatureConverter() {
    var celsiusTemperature = 25;
    var fahrenheitTemperature = 70;
    var resultInCelsius = ((fahrenheitTemperature - 32) * 5 / 9);
    var resultInFahrenheit = ((celsiusTemperature * 9 / 5) + 32);
    var icon = "0";
    var result = icon.sup();

    document.write(celsiusTemperature + result + "C is " + resultInFahrenheit + result + "F <br>");
    document.write(fahrenheitTemperature + result + "F is " + resultInCelsius + result + "C <br>");

}
function shoppingCart() {
    var priceOfItem1 = 650;
    var priceOfItem2 = 100;
    var quantityOfItem1 = 3;
    var quantityOfItem2 = 7;
    var shippingCharge = 100;

    var totalCharges = ((quantityOfItem1 * priceOfItem1) + (quantityOfItem2 * priceOfItem2) + shippingCharge)

    document.write("<h1> Shopping Cart </h1>")
    document.write("Price of Item1 is " + priceOfItem1 + "<br>");
    document.write("Quantity of Item1 is " + quantityOfItem1 + "<br>");
    document.write("Price of Item2 is " + priceOfItem2 + "<br>");
    document.write("Quantity of Item2 is " + quantityOfItem2 + "<br> <br>");
    document.write("Total cost of your order is " + totalCharges + "<br>");
}
function resultInPercentage() {
    var totalMarks = 980;
    var obtainedMark = 804;
    var result = obtainedMark / totalMarks * 100;


    document.write("<h1> Marks Sheet </h1> <br> <br>")
    document.write("Total Marks: " + totalMarks + "<br>");
    document.write("Marks Obtained: " + obtainedMark + "<br>");
    document.write("Percentage: " + result + "<br>");

}
function currencyConversion() {
    var usDollars = 10;
    var saudiRiyals = 25;
    var result = (usDollars * 104.80) + (saudiRiyals * 28);

    document.write("<h1> Currency in PKR </h1> <br> <br>")
    document.write("Total Currency in PKR: " + result);
}

function arthemeticSequence() {
    var userVaeriable = 7;
    var result = ((userVaeriable + 5) * 10) / 2;

    alert("Result: " + result);

}
function ageCalculator() {
    var currentYear = 2016;
    var birthYear = 1992;
    var age = currentYear - birthYear;
    document.write("<h1> Age Calculator </h1> <br> <br>")
    document.write("Current Year: " + currentYear);
    document.write("<br> Birth Year: " + birthYear);
    document.write("<br> Your Age is: " + age);
}
function geometrizer() {
    var radius = 20;
    const pi = 3.142;
    var circumference = 2 * pi * radius;
    var areaOfCircle = pi * radius * radius;
    document.write("<h1> The Geometrizer </h1> <br> <br>")
    document.write("Radius of a circle: " + radius);
    document.write("<br> The circumference is: " + circumference);
    document.write("<br> The are is: " + areaOfCircle);

}
function lifetimeSupplyCalculator() {
    var favourSnack = "Chocolate Chip";
    var currentAge = 15;
    var maxAge5 = 65;
    var estimatedAmount = 3;
    var ageLift = maxAge5 - currentAge;

    document.write("<h1> The Lifetime Supply Calculator </h1> <br> <br>")
    document.write("Favourite Snack: " + favourSnack);
    document.write("<br> Current age: " + currentAge);
    document.write("<br> Estimated Maximuim Age: " + maxAge5);
    document.write("<br> Amount of snacks per day: " + estimatedAmount);
    document.write("<br> You will need  " + ageLift * estimatedAmount + " " + favourSnack + " to last you until the ripe old age of " + maxAge5);
}
//////////////////////////////// Chapter no.6
function task61() {
    var a = 10;
    document.write("Result:");
    document.write("<br> The value of a is: " + a);
    document.write("<br>............................................... <br> <br>");
    document.write("<br> The value of ++a is: " + ++a);
    document.write("<br> Now the value of a is: " + a);

    document.write("<br> <br>");
    document.write("<br> The value of a++ is: " + a++);
    document.write("<br> Now the value of a is: " + a);

    document.write("<br> <br>");
    document.write("<br> The value of --a is: " + --a);
    document.write("<br> Now the value of a is: " + a);

    document.write("<br> <br>");
    document.write("<br> The value of a-- is: " + a--);
    document.write("<br> Now the value of a is: " + a);

}
function task62() {
    var a = 2, b = 1;
    var result = --a - --b + ++b + b--;
    document.write("a is " + a);
    document.write("<br> b is " + b);
    document.write("<br> result is " + result);
}
function task63() {
    var name = prompt("Enter your name", "Enter your name")
    document.write("Welcome ", name);
}

function task65() {
    var tableNumber = prompt("Enter number for Multiplication Table");
    var i = 1;
    var multiplier;

    // multiplier = prompt("Enter a Multiplication Table max multiplier", multiplier)
    if (tableNumber == null) {
        // tableNumber=tableNumber;
        tableNumber = 5;
    }
    else {
        tableNumber = tableNumber
    }

    document.write("Table of ", tableNumber);

    for (i = 1; i <= 10; i++) {
        document.write("<br>" + tableNumber + "x" + i + "=" + i * tableNumber);
        // document.write("<br>");
    }

}
function studentSubjectMarks() {
    var subject1 = prompt("Enter First Subject name");
    var subject2 = prompt("Enter 2nd Subject name");
    var subject3 = prompt("Enter 3rd Subject name");
    var totalMars = 100;
    var obtainedMark1 = prompt("Enter First Subject obtained marks");
    var obtainedMark2 = prompt("Enter 2nd Subject obtained marks");
    var obtainedMark3 = prompt("Enter 3rd Subject obtained marks");


}
function javaTable() {
    // var myArray = new Array();
    // myArray[0] = 1;
    // myArray[1] = 2.218;
    // myArray[2] = 33;
    // myArray[3] = 114.94;
    // myArray[4] = 5;
    // myArray[5] = 33;
    // myArray[6] = 114.980;
    // myArray[7] = 5;

    // document.write("<tr><td style='width: 100px; color: red;'>Col Head 1</td>");
    // document.write("<td style='width: 100px; color: red; text-align: right;'>Col Head 2</td>");
    // document.write("<td style='width: 100px; color: red; text-align: right;'>Col Head 3</td></tr>");

    // document.write("<tr><td style='width: 100px;'>---------------</td>");
    // document.write("<td style='width: 100px; text-align: right;'>---------------</td>");
    // document.write("<td style='width: 100px; text-align: right;'>---------------</td></tr>");

    // for (var i = 0; i < 8; i++) {
    //     document.write("<tr><td style='width: 100px;'>Number " + i + " is:</td>");
    //     myArray[i] = myArray[i].toFixed(3);
    //     document.write("<td style='width: 100px; text-align: right;'>" + myArray[i] + "</td>");
    //     document.write("<td style='width: 100px; text-align: right;'>" + myArray[i] + "</td></tr>");
    // }



//         let mountains = [
//             { name: "Monte Falco", height: 1658, place: "Parco Foreste Casentinesi" },
//             { name: "Monte Falterona", height: 1654, place: "Parco Foreste Casentinesi" },
//             { name: "Poggio Scali", height: 1520, place: "Parco Foreste Casentinesi" },
//             { name: "Pratomagno", height: 1592, place: "Parco Foreste Casentinesi" },
//             { name: "Monte Amiata", height: 1738, place: "Siena" }
//           ];

//           let table = document.querySelector("table");
//     let data = Object.keys(mountains[0]);
//     generateTableHead(table, data);
//     generateTable(table, mountains);

// }

// function generateTableHead(table, data) {
//     let thead = table.createTHead();
//     let row = thead.insertRow();
//     for (let key of data) {
//         let th = document.createElement("th");
//         let text = document.createTextNode(key);
//         th.appendChild(text);
//         row.appendChild(th);
//     }
// }

// function generateTable(table, data) {
//     for (let element of data) {
//         let row = table.insertRow();
//         for (key in element) {
//             let cell = row.insertCell();
//             let text = document.createTextNode(element[key]);
//             cell.appendChild(text);
//         }
//     }
// }

// function create() {
//     var row = parseInt(document.getElementById("row").value);
//     var col = parseInt(document.getElementById("col").value);

//     var tablestart = "<table id=myTable border=1>";
//     var tableend = "</table>";
//     var trstart = "<tr bgcolor=#ff9966>";
//     var trend = "</tr>";
//     var tdstart = "<td>";
//     var tdend = "</td>";
//     var data = "data in cell";
//     var str1 = tablestart + trstart + tdstart + data + tdend + trend + tableend;
//     document.write(tablestart);

//     for (var r = 0; r < row; r++) {
//         document.write(trstart);
//         for (var c = 0; c < col; c++) {
//             document.write(tdstart + "Row." + r + " Col." + c + tdend);
//         }
//     }

//     document.write(tableend);
//     document.write("<br/>");
//     var s = "<button id=" + "delete" + " onclick=" + "deleteTable()" + ">Delete top Row </button>";
//     document.write(s);
//     var relod = "<button id=" + "relod" + " onclick=" + "reloadPage()" + ">Reload Page </button>";
//     document.write(relod);
 }

///////////----------- Chapter no.9 to 12 (conditional statements)

function cityCheck(){
    var cityName=prompt("Enter city name");

    if (cityName === "Karachi")
        {
            document.write("Welcome to city of light. ");
        }
    else 
        {
            document.write("You live out of Karachi.");                
        }
}

function genderCheck(){
    var gender=prompt("Enter Gender");

    if (gender === "Male" || gender === "male")
        {
            document.write("Good Morning Sir. ");
        }
    else 
        {
            document.write("Good Morning Ma'am.");                
        }
}
function fuelCheck(){
    var fuel=prompt("Enter fuel in litres");

    if (fuel < 0.25)
        {
            document.write("Please refill the fuel in your car. ");
        }
    else 
        {
            document.write("Enjoy the journey.");                
        }
}

function alertMessageCheck(){
    var a=4;
    if (++a === 5)
        {
            alert("Given condition for variable a is true. ");
        }
    var b=82;
    if (b++ === 83)
       {
            alert("Given condition for variable b is true. ");
        }
    var c=12;
    if (a++ === 13)
        {
            alert("condition 1 is true.");
        }
    if (c === 13)
        {
            alert("condition 2 is true.  ");
        }
    if (++c === 14)
        {
            alert("condition 3 is true.  ");
        }
    if (c === 14)
        {
            alert("condition 4 is true.");
        }
    var materialCost=20000;
    var laborCost=2000;
    var totalCost=materialCost+laborCost;
    if (totalCost === laborCost+materialCost)
        {
            alert("The cost equals. ");
        }
    if (true){
        alert("True <br>");
    }
    if (false){ alert("False");}
    if ("car" < "cat"){
        alert("car is smaller than cat");
    }
}
function marksSheet(){
    var obtainedMarks = [2];
    var totalMarks = [2];
    var i=0,a;
    var sumOfTotalMarks=0, sumOfObtainedMarks=0, percentage=0, grade, remarks;

    for (i=0; i <=2; i++){
        totalMarks[i]= prompt("Enter total marks of subject " + (i+1));
        // sumOfTotalMarks=sumOfTotalMarks+totalMarks[i];

        sumOfTotalMarks += parseInt(totalMarks[i]);
    }

    for (i=0; i <=2; i++){
        obtainedMarks[i]= prompt("Enter obtained marks of subject " + (i+1));
        // a= prompt("Enter obtained marks of subject " + (i+1));
        // obtainedMarks[i]=a;
        // sumOfObtainedMarks=sumOfObtainedMarks+parsint(obtainedMarks[i])

        sumOfObtainedMarks += parseInt(obtainedMarks[i]);

        // document.write(i + "<br>" + obtainedMarks[i])
    }

    // for (i=0; i <=2; i++){
    //     document.write (i + obtainedMarks[i] + "<br>");
    //     // document.write (totalMarks[i] + "<br>");

    //     sumOfObtainedMarks=sumOfObtainedMarks+obtainedMarks[i]
    // }

    percentage=sumOfObtainedMarks/sumOfTotalMarks*100.0

    if (percentage>=80){
        grade="A-One";
        remarks="Excellant"
    }
    else if (percentage>=70 && percentage <= 79.99){
        grade="A";
        remarks="Good"
    }
    else if (percentage>=60 && percentage <= 69.99){
        grade="B";
        remarks="You need to improve"
    }
    else {
        grade="Fail";
        remarks="Sorry"
    }
    document.write("<h1> Marks Sheet </h1> <br> <br>")
    document.write("Total Marks: " + sumOfTotalMarks);
    document.write("<br> Mark Obtained: " + sumOfObtainedMarks);
    document.write("<br> Percentage: " + percentage);
    document.write("<br> Grade: " + grade);
    document.write("<br> Remarks: " + remarks);
}

function secretNumber(){
    var actualNumber=5;
    var userNumber;
    userNumber=prompt("Enter secret number! ");
    if (actualNumber === userNumber){
        document.write("Bingo! Correct answer.")
    }
    else if (actualNumber === userNumber+1) {
        document.write("Close enough to the correct answer")
    }
    else{document.write("Sorry next time!"+actualNumber + " " + userNumber)}
}
function divisible3Check(){
    var userInput;
    userInput=prompt("Enter any number!")
    if (userInput % 3 === 0){
        document.write("<h1> The number " + userInput + " is Divisible by 3 </h1>");
    }
    else { document.write("<h1> The number " + userInput + " is not divisible by 3 </h1>");}
}

function calculator(){
    var a=Number(prompt("Enter First number:"));
    var b = Number(prompt("Enter 2nd number:"));
    var op= prompt("Enter operator for operation?");
    var c=0;
    if (op === '+')
        {
            document.write(a + op + b + "=" + (a+b));
        }
    else if (op === '-')
    {
        document.write(a + op + b + "=" + (a-b));
    }
    else if (op === '*')
    {
        document.write(a + op + b + "=" + (a*b));
    }
    else if (op === '/')
    {
        document.write(a + op + b + "=" + (a/b));
    }
    else if (op === '%')
    {
        document.write(a + op + b + "=" + (a%b));
    }
    else { alert("Illegal operation")}
}

function evenOddCheck(){
    var userInput;
    userInput=prompt("Enter any number!")
    if (userInput % 2 === 0){
        document.write("<h1> Even number </h1>");
    }
    else { document.write("<h1> Odd number </h1>");}
}
function temperatureCheck(){
    var userTemperature;
    userTemperature=prompt("Enter Temperature!")
    if (userTemperature > 40){
        document.write("<h1> It is too hot outside. </h1>");
    }
    else if (userTemperature >=30 && userTemperature < 40){
         document.write("<h1> The Weather today is Normal </h1>");
        }
    else if (userTemperature >=20 && userTemperature < 30){
        document.write("<h1> Today's Weather is cool </h1>");
        }
    else{
        document.write("<h1> OMG! Today's weather is so cool </h1>");
    }    
}


function digitCharacterCheck(){
    var valueInput=prompt("Enter any character");
    var asciCode= valueInput.charCodeAt(0);
    // document.write("ASCI code is: " + valueInput.charCodeAt(0))
    if (asciCode >=45 && asciCode<=57)
        {
            document.write("You enter a digit");
        }
    else if (asciCode >=65 && asciCode<=90)
        {
            document.write("You enter a capital letter");
        }
    else if (asciCode >=97 && asciCode<=122)
        {
            document.write("You enter a small letter");
        }
    else 
        {
            document.write("You enter a special character");
        }
}
function largerCheck(){
    var firstNumber=prompt("Enter 1st number");
    var scondNumber=prompt("Enter 2nd number");

    if (firstNumber === scondNumber)
        {
            document.write("Both digits are equal.");
        }
    else if (firstNumber > scondNumber)
        {
            document.write("First Number is larger i.e. " + firstNumber);
        }
    else 
        {
            document.write("Second number is larger i.e. "+ scondNumber);
        }
}
function positiveCheck(){
    var firstNumber=prompt("Enter any number");

    if (firstNumber < 0)
        {
            document.write("You entered Negative number. ");
        }
    else if (firstNumber > 0)
        {
            document.write("You entered Positive number. ");
        }
    else 
        {
            document.write("You entered Zero.");                
        }
}
function vowelCheck(){
    var valueInput=prompt("Enter any character");
    var asciCode= valueInput.charCodeAt(0);
    // document.write("ASCI code is: " + valueInput.charCodeAt(0))
    if (asciCode === 65 || asciCode === 69 || asciCode === 73 || asciCode === 79 || asciCode === 85 
        || asciCode === 97 || asciCode === 101 || asciCode === 105 || asciCode === 111 || asciCode === 117 )
        {
            document.write("Yes! you enter a Vowel Character.");
        }
    else 
        {
            document.write("No. You enter other Character");
        }
}
function passwordCheck(){
    var validPassword="abc123";
    var inputPassword=prompt("Enter password:");
    if (inputPassword == null)
        {
            document.write("Please enter your password");            
        }
    else if (inputPassword !== validPassword)
        {
            document.write("Incorrect password");
        }
    else
        {
            document.write("Correct! The password you entered matches the original password");
        }

}
function Task126(){
    var greeting;
    var hour =13;
    
    if (hour <18){
        greeting="Good Day";
        document.write(greeting);
    }
    else {
        greeting="Good Evening"
        document.write(greeting);
    }
}
function timeCheck12(){
    var timeInput=prompt("Enter time in 24 hours clock format!");
    if (timeInput >= 0000 && timeInput < 1200)
        {
            document.write("Good morning!");
        }
    else if (timeInput >= 1200 && timeInput < 1700)
        {
            document.write("Good afternoon!");
        }
    else if (timeInput >= 1700 && timeInput < 2100)
    {
        document.write("Good evening!");
    }
    else if (timeInput >= 2100 && timeInput <= 2359)
    {
        document.write("Good night!");
    }
    else 
    {
        document.write("Your enter wrong time.")
    }
}

/////////-------------- Chapter No.14 to 16
function task1to6(){
    var empty = [];
    var myObject = new Array();
    var province = ["Sindh", "Punjab", "KPK", "Balochistan"];
    var stdAge = new Array(15,17,18);
    var boolean = [0, 1, 1, 0];
    var mixed = [1, "Punjab", 2, "Balochistan"];

document.write("var empty = []; <br> var myObject = new Array(); <br> var province = [" + "Sindh," +"Punjab,"+ "KPK," +"Balochistan]; <br>  var stdAge = new Array(15,17,18); <br> var boolean = [0, 1, 1, 0]; <br> var mixed = [1," + "Punjab, 2,"+ "Balochistan];")

}
function qualification(){
    var qualifications =["SSC", "HSC", "BCS","BS","BCOM","MS","M.Phil.","PhD"];
    document.write("<h1> Qualifications: </h1>");
    for (let i=0; i<qualifications.length; i++)
        {
            document.write((i+1)+") " + qualifications[i] + "<br>");
        }
}

function studentPercentage(){
    var names =["Michael", "John", "Tony"];
    var marks = [320, 230, 480];
    var totalMarks=500;
    
    for (let i=0; i<3; i++)
        {
            // document.write((i+1)+") " + names[i] + "<br>");
            document.write("<h2> Score of "+ names[i] + " is "+ marks[i]+ ". Percentage: "+marks[i]/totalMarks*100 +"% <br> </h2>");
            // document.write("<br>")
        }
}
function colorArray(){
    var colors =["White", "Red", "Black"];
    var newColor;
    var newIdex;

    document.write("<h2> Actual Array.</h2> <br>")
    for (let i=0; i<colors.length; i++)
        {
            document.write((i+1)+") " + colors[i] + "<br>");
        }
    newColor=prompt("Enter new color to add at the begenning!");
    colors.unshift(newColor);
    document.write("<h2> a.Added new color at the beginning.</h2> <br>")
    for (let i=0; i<colors.length; i++)
    {
        document.write((i+1)+") " + colors[i] + "<br>");
    }

    newColor=prompt("Enter new color to add at the end!");
    colors.push(newColor);
    document.write("<h2> b.Added new color at the end.</h2> <br>")
    for (let i=0; i<colors.length; i++)
    {
        document.write((i+1)+") " + colors[i] + "<br>");
    }

    colors.unshift("Brown", "Yellow");
    document.write("<h2> c.Added two more new color at the beginning.</h2> <br>")
    for (let i=0; i<colors.length; i++)
    {
        document.write((i+1)+") " + colors[i] + "<br>");
    }
    colors.shift();
    document.write("<h2> d.First Color Deleted ...</h2> <br>")
    for (let i=0; i<colors.length; i++)
    {
        document.write((i+1)+") " + colors[i] + "<br>");
    }

    colors.pop();
    document.write("<h2> e.Last color Deleted ...</h2> <br>")
    for (let i=0; i<colors.length; i++)
    {
        document.write((i+1)+") " + colors[i] + "<br>");
    }
    newIdex=prompt("Enter index to add new color!");
    newColor=prompt("Enter new color to add at given index!");
    // colors[newIdex]=newColor;
    colors.splice(newIdex,0,newColor)

    document.write("<h2> f.Array after adding new color at mentioned index  ...</h2> <br>")
    for (let i=0; i<colors.length; i++)
    {
        document.write((i+1)+") " + colors[i] + "<br>");
    }

    newIdex=prompt("Enter index to delete color(s) from Array!");
    let indexLimit=prompt("Enter index limit that how many you want to delete!");
    
    colors.splice(newIdex,indexLimit);

    document.write("<h2> g.Array after deleting color at mentioned index  ...</h2> <br>")
    for (let i=0; i<colors.length; i++)
    {
        document.write((i+1)+") " + colors[i] + "<br>");
    }
}
function arraySort(){
    var student=[320, 230, 480, 120];
    document.write("<h2> Scores of Students:" + student +"<br>");

    student.sort();
    document.write("Scores of Students:" + student + "</h2>");
}
function citiesTask() {
    var cities=["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
    var selectedCities=[];
    selectedCities.push(cities[2],cities[3]);

    document.write("<h2>Cities list:<br>");
    document.write (cities);
    document.write("<br> <br>");
    document.write("<h2>Selected cities list:<br>");
    document.write (selectedCities);
       
}
function margeString(){
    var arr=["This", "is", "my", "cat"];
    var joinArr=arr.join(" ");
    document.write("<h1>Array:<br>");
    document.write (arr);
    document.write("<br> <br>");
    document.write("String:<br>");
    document.write (joinArr);
}








///------------------- Chapter No.21 to 25
function task211(){
    var firstName=prompt("Enter First Name!");
    var lastName = prompt("Enter Last Name!");
    var fullName= firstName+ " " +lastName;
    document.write("<h1> Welcome " + fullName);
}
/////----Task No.2
function favourtMobile(){
    var mobile=prompt("Enter your favorite mobile phone model!");

    document.write("<h1> My favorite phone is: " + mobile);
    document.write("<br>Length of string "+ mobile.length);
}
/////----Task No.3
function search(searchWord){
    var word="Pakistan";
    var searchedIndex=0
    for (let i=0; i<=word.length; i++){
        if (word[i] === searchWord)
            {
                searchedIndex=i;
                break;
            }
    }
    document.write("<h1> String: "+word );
    document.write("<br> Index of 'n': " + searchedIndex);
}
/////----Task No.4
function searchByIndex(){
    var str = "Hello world.";
    var searchedIndex=0
    // var n = str.indexOf("e", 5);
    // document.write(n);
    var indexArr=[];
    var searchWord='l'
    for (let i=0; i<=str.length; i++){
        if (str[i] === searchWord)
            {
                indexArr.push(i);
            }
    }
    document.write("<h1> String: "+str + "<br> Last index of 'l': " + indexArr[indexArr.length-1]);
}
/////----Task No.5
function task212(){
    var str="Pakistan";
    var searchWord;
    // for(let i=0; i<str.length; i++){
    //     if (i ===3)
    //     {
    //         searchWord=str(i);
    //         // document.write(i);
    //         break;
    //     }
    // }
    document.write("<h1>String: " +str);
    document.write("<br> Character at index 3:" +str[3]);

}
/////----Task No.6
function concatination(){
    var str1 = "Hello ";
    var str2 = "world!";
    var str3 = " Have a nice day!";
    var res = str1.concat(str2, str3);
    var firstName=prompt("Enter First Name!");
    var lastName = prompt("Enter Last Name!");
    var fullName=firstName.concat(lastName);
    document.write("<h1> Welcome " + fullName);
}
/////----Task No.7
function  stringReplce(){
    var str = "Hyderabad";
    var res = str.replace("Hyder", "Islam");
    document.write("<h1> City: " + str +"<br> After replacement: " + res);
}
/////----Task No.8
function  stringReplceAll(){
    var str = "Ali and Sami are best friends. They play cricket and football together.";
    var res = str.replace(/and/g, "&");
    document.write("<h1> Actual string: " + str +"<br> After replacement: " + res);
}
/////----Task No.9
function stringToNumber(){
    var str = "472";
    var num=parseInt(str);
    document.write("<h1> Value: "+str + "<br> Type: string");
    document.write("<h1> <br> Value: "+ num + "<br> Type: number");
}
/////----Task No.10
function capitalization(){
    var str=prompt("Enter any text!");
    var res = str.toLocaleUpperCase();
    document.write("<h1> User input: " + str);
    document.write("<br>Upper case "+ res);
}
/////----Task No.11
function stringTitalCase(){
    var str=prompt("Enter any text!");
    // var res = str.toLocaleUpperCase();
    // var res = str.toUpperCase();
    document.write("<h1> User input: " + str);

    str = str.toLowerCase();   
    str = str.split(' ');
 
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 

    }
    str.join(' '); 
    
    // var strCase=str.replace(/,/g, " - ")
    // var res = str.replace(/,/g, "&");
    document.write("<br>Title case: "+ str);
    // document.write("<br>Title case "+ res);
}
/////----Task No.12
function numbertoString(){
    var num = 35.36;
    // var str=num.toString();
    // var myTrunc = Math.trunc(num);
    var myTrunc = num.toFixed(4);

    document.write("<h1> Number: "+num );
    document.write("<br> Result: "+ myTrunc);
}
/////----Task No.13
function inputUserName(){
    var userName=prompt("Enter Username!");
    var found=0
    for (let i=0; i<=userName.length; i++){
        if (userName[i] === '@' || userName[i] === '.' || userName[i] === ',' || userName[i] === '!')
            {
                // document.write("Please enter a valid username!");
                found=1;
                break;
            }
        }
    if (found)
    document.write("Please enter a valid username!");
    else
    document.write("Thank you! you entered a valid username");
}
/////----Task No.14
function bakerySearch(){
    var a=["cake", "apple pie", "cookie", "chips", "patties"]
    var order=prompt("Welcoe to ABC Bakery. What do you want to order sir/Ma'am?");
    var found=0, i=0;

    for( i =0; i<a.length;i++){
        if(a[i] === order){
            // document.write(order+" is available at index "+i +"in our bakery");
            found=1;
            break
        }

    }
    if(found){
        document.write(order+" is available at index "+ (i+1) +"in our bakery");
    }
    else{
        document.write("We are sorry. "+ order +" is not available in our bakery.")
    }
}
/////----Task No.15
function passwordInputCheck(){
    var password=prompt("Enter valid passwordz");
    var found=0, i=0;

    for( i =0; i<a.length;i++){
        if(a[i] === order){
            // document.write(order+" is available at index "+i +"in our bakery");
            found=1;
            break
        }

    }
    if(found){
        document.write(order+" is available at index "+ (i+1) +"in our bakery");
    }
    else{
        document.write("We are sorry. "+ order +" is not available in our bakery.")
    }
}


/////----Task No.16
function stringSplit(){
    var str="University of Karachi";
  

    str = str.split('');
    
    for (let i =0; i<str.length; i++){
        document.write(str[i]+"<br>");
    }
}

/////----Task No.17
function printLastCharacter(){
    var str=prompt("Enter any input?");
    document.write("<h1> User input: " + str);
    document.write("<br> Last character: " + str[str.length-1])
}
//////// ------- Task No.18
function wordCount(){
    var str="The quick brown fox jumps over the lazy dog.";
    var word="the";
    var a = str.toLowerCase();   
    var a = a.split(" "); 
  
    // search for pattern in a 
    let count = 0; 
    for (let i = 0; i <= a.length; i++)  
    { 
    
    if (a[i] === word) 
        count++; 
    }
    document.write("<h1> Text: " + str);
    document.write("<br> There are " + count + " occurrence(s) of word" + word)
}

///////---------------------Chapter No.26 to 30

///------------ Task No.1
function integerOperation(){
    var n=prompt("Enter any positive integer?");
    document.write("<h1> number: " + n);
    document.write("<br> round off value: "+ Math.round(n));
    document.write("<br> floor value: "+ Math.floor(n));
    document.write("<br> ceil value: "+ Math.ceil(n));
}
///------------ Task No.2
function negativeIntegerOperation(){
    var n=prompt("Enter any negative integer?");
    document.write("<h1> number: " + n);
    document.write("<br> round off value: "+ Math.round(n));
    document.write("<br> floor value: "+ Math.floor(n));
    document.write("<br> ceil value: "+ Math.ceil(n));
}
///------------ Task No.3
function absoluteNumber(){
    var n=prompt("Enter any number?");
    document.write("<h1> The absolute value of " + n + " is "+ Math.abs(n));
}
///------------ Task No.4
function diceRandom(){
    // var n=prompt("Enter any number?");
    var bigDecimal = Math.random();
    var improvedNum = (bigDecimal * 6) + 1;
    var numberOfStars = Math.floor(improvedNum);
    document.write("<h1> random dice value: " +  numberOfStars);
}
///------------ Task No.5
function coinRandom(){
    // var n=prompt("Enter any number?");
    var bigDecimal = Math.random();
    var improvedNum = (bigDecimal * 2) + 1;
    var numberOfStars = Math.floor(improvedNum);
    if (numberOfStars === 1)
        document.write("<h1>" +  numberOfStars +"<br> random coin value: Tails");
    else
        document.write("<h1>" +  numberOfStars +"<br> random coin value: Heads");
}
///------------ Task No.6
function hundredRandomNumbers(){
    // var n=prompt("Enter any number?");
    var bigDecimal = Math.random();
    var improvedNum = (bigDecimal * 100) + 1;
    var numberOfStars = Math.floor(improvedNum);
    document.write("<h1> random number between 1 and 100: " +  numberOfStars );
}
///------------ Task No.7
function parseWeight(){
    var weight =prompt("Enter your weight in kilograms?");
    var parseWet=parseFloat(weight);
    document.write("<h1> The weight of user is "+ parseWet +" kilograms");
}
//////------- Task No.08
function secretNumberSearch(){
    var bigDecimal = Math.random();
    var improvedNum = (bigDecimal * 10) + 1;
    var numberSecret = Math.floor(improvedNum);

    var userInput =prompt("Enter your any number in between 1 to 10?");
    if (numberSecret === userInput)
    document.write("<h1> Congratulations the user");
    else
    document.write("<h1> Try again"+ numberSecret);
}
///////////-------------------Chapter No.31 to 34
////----Task No.1
function nowDate(){
var rightNow= new Date();
document.write("<h1>"+ rightNow);
}
////----Task No.2
function currentMonth(){
    var monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var rightNow= new Date();
    var theMonth= rightNow.getMonth()
    document.write("<h1> Current month: "+ monthName[theMonth]);
    }
////----Task No.3
function nowDay(){
    var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var now = new Date();
    var theDay = now.getDay();
    var nameOfToday = dayNames[theDay];
    document.write("<h1> Today is "+ nameOfToday);
    }
////----Task No.4
function funDay(){
    var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var now = new Date();
    var theDay = now.getDay();
    var nameOfToday = dayNames[theDay];
    if (theDay === 0 || theDay === 6)
        document.write("<h1> its Fun Day ");
    else 
        document.write("<h1> Its working Day ");
    }
////----Task No.5
function daysCheck(){
    var now = new Date();
    var theDate = now.getDate();
    if (theDate < 15 )
        document.write("<h1> First fifteen days of the month.");
    else 
        document.write("<h1> Last days of the month ");
    }
////----Task No.6
function elapsedMinutes(){
    var firstDate = new Date("Jan 1, 1970");
    var today= new Date();
    var msTday=today.getTime();
    var msFirstDate=firstDate.getTime();
    // var msDiff=msRamzanDate-msTday;
    var msDiff=msTday-msFirstDate;
    var mintDiff = msDiff / (1000 * 60);
    // dayDiff = Math.floor(dayDiff);

    document.write("<h2> Current Date: "+ today);
    document.write("<br> Elapsed milliseconds since January 1, 1970: "+ msDiff);
    document.write("<br> Elapsed minutes since January 1, 1970: "+ mintDiff);
    }
////----Task No.7
function noonCheck(){
    var now = new Date();
    var theHours = now.getHours;
    if (theHours >= 12 )
        document.write("<h1> It's PM.");
    else 
        document.write("<h1> It's AM ");
    }
/////------Task No.8
function assignDate(){
    var laterDate = new Date("Dec 31, 2020");
    document.write("<h1> Later date: " + laterDate)
}
/////------Task No.9
function calcDayOfRamzan(){
    var ramzanDate = new Date("June 18, 2015");
    var today= new Date();
    var msTday=today.getTime();
    var msRamzanDate=ramzanDate.getTime();
    // var msDiff=msRamzanDate-msTday;
    var msDiff=msTday-msRamzanDate
    var dayDiff = msDiff / (1000 * 60 * 60 * 24);
    dayDiff = Math.floor(dayDiff);
    document.write("<h1> " + dayDiff + " days have passed since 1st Ramzan, 2015");

    // var dateDiff= today-laterDate;
    // document.write("<h1> Later date: " + laterDate)
    // document.write("<br> today date: " + today)
    // document.write("<br> Diff date: " + dateDiff)
}
/////------Task No.10
function secondDiffFromDate(){
    var referDate = new Date("Dec 05, 2015");
    var beginningDate = new Date("Jan 1, 2015");
    var msReferDate=referDate.getTime();
    var msBeginningDate=beginningDate.getTime();
    var msDiff=msReferDate-msBeginningDate;
    var secondDiff = msDiff / (1000 * 60 );
    secondDiff = Math.floor(secondDiff);
    document.write("<h1> On reference date " + referDate );

    document.write("<br> " + secondDiff + " second had passed sience beginning of 2015");
}
/////------Task No.11
function date1HourAgo(){
    var today = new Date();
    var oneHourAgo =  new Date();   
    oneHourAgo.setHours(today.getHours() - 1);
    document.write("<h1> Current date: " + today );
    document.write("<br> 1 hour ago, it was " + oneHourAgo);
}
/////------Task No.12
function hundredYearsBack(){
    var today = new Date();
    var hundredYearsAgo =  new Date();   
    hundredYearsAgo.setFullYear(today.getFullYear() - 100);
    alert("Current date: " + today + "\n100 years back, it was " + hundredYearsAgo);
}
/////------Task No.13
function ageYearCalculate(){
    var age=prompt("Enter your age");
    var birthYear = new Date();
    birthYear.setFullYear(birthYear.getFullYear() - age);

    document.write("<h1> Your age is " + age );
    document.write("<br> Your birth year is " + birthYear.getFullYear());
}
//////-------------Task No.14
function kElectricBill(){
    var monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var name="ABC Customer";
    var currentDate = new Date();
    var month=currentDate.getMonth();
    var consumedUnit=410;
    var pricePerUnit=16;
    var surcharge=350;
    var netAmount=consumedUnit*pricePerUnit;
    var grossAmount=netAmount+surcharge;

    document.write("<h1> K-Electric Bill </h1>");
    document.write("<h2> <br>  Customer Name: " + name);
    document.write("<br> Month: " + monthName[month]);
    document.write("<br> Number of units: " + consumedUnit);
    document.write("<br> Charges per unit: " + pricePerUnit);
    document.write("<br><br> Net Amount Payable (within Due Date): " + netAmount );
    document.write("<br> Late payment surcharge: " + surcharge);
    document.write("<br> Gross Amount Payable (after Due Date): " + grossAmount );
}
/////////////////--------------- CHAPTERS NO.35 TO 38
////-------Task No.1
function currentDateTime(){
var now= new Date();
document.write("<h1>" + now);
}
//////----- Task No.2
function greetings(firstName, lastName){
    var fullName=firstName+lastName;
document.write("<h1> Welcome " +fullName);
}
///////---- Task No.3
function addTwoNum(){
    var a =+prompt("Enter first number?");
    var b = +prompt("Enter 2nd number?");
    var c=0;
    c=add(a,b);
    document.write("<h1>Sum: " +c);
}
function add(num1,num2){
    return(num1 +num2);
}

///////---- Task No.4
function task354(){
    var a =+prompt("Enter first number?");
    var op =prompt("Enter operator for operatioin?");
    var b = +prompt("Enter 2nd number?");
    var c=0;
    c=calculator35(a,op,b);
    document.write("<h1>Result: " +c);
}
function calculator35(num1,op, num2){
    switch(op){
        case "+" :
            return(num1+num2);
            break;
        case "-" :
            return(num1-num2);
            break;
        case "*" :
            return(num1*num2);
            break;
        case "/" :
            return(num1/num2);
            break;
        case "%" :
            return(num1%num2);
            break;
        default :
            return("Invalid!")
    }
}
//////////////------- Task No.5
function squares(num1){
    document.write("<h1> Squares= " + (num1*num1));
}
////////- Task No.6
function task356(){
    var n=+prompt("Enter any number for factorial?");
    document.write("<h1> Factorial of "+n+ " is: "+ factorial(n));
}
function factorial(num){
    var fact=1;
    for (let i=num; i>=1; i--)
        {
            fact=fact*i;
        }
        return fact;
}
////////--------- Task No.7
function countingPrint(){
    var startNum=+prompt("Enter start number?");
    var endNum=+prompt("Enter end limit?");
    for (let i=startNum; i<=endNum; i++)
        {
            document.write(i+"<br>");
        }
}
////////------ Task No.8
function calculateHypotenuse(){
    var base=+prompt("Enter base of triangle?");
    var perpendicular =+prompt("Enter perpendicular?");
    var hypotenuse = calculateSquar(base) + calculateSquar(perpendicular);
    document.write("<h1> Hypotenuse of a right angle triangle is: " +calculateSquar(hypotenuse));


    function calculateSquar(num){
        return (num*num);
    }
}
//////------ Task No.9
function areaOfTriangle(width, height){
    return (width*height);
}
function calculateAreaOfTriangle(){
    var width=prompt("Enter width of Triangle?");
    var height=prompt("Enter height of Triangle?");
    document.write("<h1> Area of Triangle is: " +areaOfTriangle(width,height))
}
//////------- Task No.10
function palindrome(str) {
    var len = str.length;
    var mid = Math.floor(len/2);
    for ( var i = 0; i < mid; i++ ) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}
function taskNo3510(){
    var str=prompt("Enter any string for Palindrome check?");
    if (palindrome(str))
        {
            document.write("<h1> The string " + str +" is palindrome.")
        }
    else
        document.write("<h1> The string " + str +" is not palindrome.")
}
///-----Task No.11
function task3511(){
    stringTitalCase()
}
////-------Task No.12
function findLongestWord(str) {

    var strSplit = str.split(' ');
    
    var longestWord = 0;
    var longestIndex = 0;

    for(var i = 0; i < strSplit.length; i++){
      if(strSplit[i].length > longestWord){ 
      longestWord = strSplit[i].length; 
      longestIndex=i;
       }
    }
    // return longestWord; 
    return strSplit[longestIndex];
  }
function task3512(){
    var str=prompt("Enter any string for finding longest word?")
    document.write("<h1> Longest word is: "+ findLongestWord(str));
}
//////------- Task No.13
function wordCount(str, word){

    var a = str.toLowerCase();   
    var a = a.split(""); 
  
    // search for pattern in a 
    let count = 0; 
    for (let i = 0; i <= a.length; i++)  
    { 
    
    if (a[i] === word) 
        count++; 
    }
    return count;
}
function task3513(){
    var str=prompt("Enter string?");
    var word=prompt("Enter letter to check its occurrence?");

    document.write("<h1> Occurrence of letter " + word +" is: " + wordCount(str,word)); 
}
////////------------ Task No.14
function calCircumference(radi){
    const pi=3.14;
    return 2*pi*radi;
}
function calArea(radi){
    const pi=3.14;
    return pi*radi*radi;
}
function task3514(){
    var r=prompt("Enter radius of circle?");
    document.write("<h1> The circumference is " + calCircumference(r));
    document.write("<br> The area is " + calArea(r));
}





// ///////////// Chapters No.38 to 42
////---------- Task No.1
function calculatePower(){
    var a=prompt("Enter base!");
    var b=prompt("Enter power!");
    document.write("<h1>" + a +" raised to " + b + " is " + power(a,b) +"</h2> <br>")
}
function power(a,b){
    var result=1;
    for(let i=b; i>=1; i--){
        result=result*a;
    }
    return result;
}
////---------- Task No.2

function leapYearCheck(){
    var year=prompt("Enter any year?");
    if (year % 4 === 0){
       document.write("<h2>"+ year +" is a leap year. </h2>")     
    } else{
        document.write("<h2>"+ year +" is not a leap year. </h2>")     
    }
}
////---------- Task No.3
function calculateArea38(){
    var a=+prompt("Enter value of 1st side")
    var b=+prompt("Enter value of 2nd side")
    var c=+prompt("Enter value of 3rd side")
    var s=(a + b +c)/2;
    var area=s*(s-a)*(s-b)*(s-c);
    document.write("<h2> Area of triangle is " + area +"</h2>")     
    // document.write("<h2> Area of triangle is " + s +"</h2>")     
}
////----------- Task No.4
function mainFunction(){
    var a=+prompt("Enter value of 1st subject marks?")
    var b=+prompt("Enter value of 2nd subject marks?")
    var c=+prompt("Enter value of 3rd subject marks?")
    document.write("<h2> Average of Marks is " + average(a,b,c) +"</h2>") 
    document.write("<br><h2> Percentage is " + percentageFunction(a,b,c) +"</h2>") 
}
function average(a,b,c){
    return ((a+b+c)/3)
}
function percentageFunction(a,b,c){
    return ((a+b+c)/300*100)
}
////----------- Task No.5
function indexOfFunction(){
    var str = "Hello world, welcome to the universe."
    var a=prompt("Enter any character?");
    var i=0
    for(i=0; i<=str.length; i++){
        if (str[i]===a){
            break;
        }
    }
    document.write("<h1>" +str)
    document.write("<br> Index of character "+ a + " is " +i);
}
////----------- Task No.6
function deleteVowels(){
    var str = "Hello world, welcome to the universe."
    document.write("<h1> Original String: <br>" +str)

    var i=0
    for(i=0; i<=str.length; i++){
        if (str[i]==="a" || str[i]==="e" || str[i]==="i" || str[i]==="o" || str[i]==="u"){
            str=remove_character(str,i)
            // console.log(i)
        }    
    }
    document.write("<h1> String deleting after Vowels: <br>" +str)
    
}
function remove_character(str, char_pos) 
 {
  part1 = str.substring(0, char_pos);
  part2 = str.substring(char_pos + 1, str.length);
  return (part1 + part2);
 }
////----------- Task No.7
function findOccurrences() {
    var str = "Pleases read this application and give me gratuity";
    var chars = str.toLowerCase().split("");
    var count = 0;
    
    // Loop over every character
    for(let i = 0; i < chars.length - 1; i++) {
      var char = chars[i];
      var next = chars[i + 1];
      
      // Increase count if both characters are any of the following: aeiou
      if(isCorrectCharacter(char) && isCorrectCharacter(next)) {
        count++
      }
    }
    
    // return count;
    document.write("<h1>" + str)
    document.write("<br> Occurrence of two vowels in succession is " + count)
  }
  
  // Check if a character is any of the following: aeiou
  function isCorrectCharacter(char) {
    switch (char) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
        return true;
      default:
        return false;
    }
  }
////----------- Task No.8
function distanceBetweenTwoCities(){
    var distance=+prompt("Enter distance between two cities (in Km) ?")
    var  m = distance*1000; //since 1km = 1000m
    var feet= distance*3280.84; //since 1km=3280.84feet
    var inch=distance*39370.1; //since 1 km=39370.1inches
    var cm=distance*100000; //since 1km = 100000cm
    document.write("<h1> Distance in KM is "+distance)
    document.write("<br> Distance in Meters is " + m)
    document.write("<br> Distance in feet is " + feet)
    document.write("<br> Distance in inches is " + inch)
    document.write("<br> Distance in centimerts is " + cm)
}
////----------- Task No.9
function calculateOverTimePay(){
    var workHour = +prompt("Enter work hour of employee?")
    var overTimeRate = 12.00
    var overTimePay=0 
    if (workHour>40){
        overTimePay= (workHour-40)*overTimeRate;
    }else {
        overTimePay=0
    }
    document.write("<h1> Your over time salary is "+ overTimePay)
}

////----------- Task No.10
function amountDenomination(){
    var hundred=0;
    var tens=0
    var unit=0;
    var number =+ prompt("Enter amount?")
    if(number<1000){
        hundred=number/100;
        number=number%100;
    }
    if (number<100){
        tens=number/50;
        number=number%50;
    }
    if (number <50){
        unit=number/10;
    }

document.write("<h1> You will have "+ Math.trunc(hundred) +" hundred notes " + Math.trunc(tens) +" fifty notes "+ Math.trunc(unit) +" ten notes")

}
// function amountTocoins(amount, coins) 
// {
//  if (amount === 0) 
//   {
//      return [];
//    } 
//  else
//    {
//      if (amount >= coins[0]) 
//        {
//         left = (amount - coins[0]);
//         return [coins[0]].concat( amountTocoins(left, coins) );
//         } 
//       else
//         {
//          coins.shift();
//          return amountTocoins(amount, coins);
//         }
//     }
// } 

// ///////////// Chapters No.43 to 48
////---------- Task No.1
function task431(){
    // document.write("Thanks for purchasing a phone from us!")
    alert("Thanks for purchasing a phone from us!")
}
////------------- Task No.2

function functionAlert(msg, myYes) {
    var confirmBox = $("#confirm");
    confirmBox.find(".message").text(msg);
    confirmBox.find(".yes").unbind().click(function() {
       confirmBox.hide();
    });
    confirmBox.find(".yes").click(myYes);
    confirmBox.show();
 }
////------------- Task No.3
function deleteRecord(tbl){
    document.getElementById("tblStudent").deleteRow(tbl.parentNode.parentNode.rowIndex)
    // console.log("Row index is: " + tbl.parentNode.parentNode.rowIndex);
}
////------------- Task No.4
function increaseCounter(){
    var p =+ document.getElementById("counterResult").value;
    document.getElementById("counterResult").value = p+1;
}
function decreaseCounter(){
    var p =+ document.getElementById("counterResult").value;
    document.getElementById("counterResult").value = p-1;
}
////---------Chapter No.49 to 52
////--------- Task No.2
function expandLoris() {
     var expandedParagraph = "Lunar K2 Bluetooth Wireless Headphone - Rechargeable - Stereo - Mobile Headset - BLACK <br> Specifications of Lunar K2 Bluetooth Wireless Headphone - Rechargeable - Stereo - Mobile Headset - SILVER      BrandlunarSKU141898190_PK-1302040270ConnectorUSBCable Lengthunder 0.5mModelLunar K2 Bluetooth Wireless Headphone - Rechargeable - Stereo - Mobile Headset - SILVERWarranty Policy EN1 Month Brand Warranty. No warranty if broken or damage";
    document.getElementById("slowLoris").innerHTML = expandedParagraph;
}
///------Task no.3


function addRecord(){
    var list =document.getElementById("list")
    var table = document.getElementById("myTable");

    var studentName =document.getElementById("inputName")
    var fatherName =document.getElementById("inputFatherName")
    var address =document.getElementById("inputAddress")
    var studentClass=document.getElementById("inputState")


    var li=document.createElement('li')
    var liText=document.createTextNode(studentName.value)
    li.appendChild(liText)

    ///////////------------table
    // var arrHead = new Array();
    // arrHead = ['Std.Name', 'Father.Name', 'Address', 'Class', 'Operation']
    // var tr = table.insertRow(-1);
    // for (var h = 0; h < arrHead.length; h++) {
    //     var th = document.createElement('th');              
    //     th.innerHTML = arrHead[h];
    //     tr.appendChild(th);
    // }

    var row = table.insertRow(0);
    var _cellName = row.insertCell(0);
    _cellName.innerHTML = studentName.value;
    var cellFatherName = row.insertCell(1);
    cellFatherName.innerHTML = fatherName.value;
    var stAddress = row.insertCell(2);
    stAddress.innerHTML = address.value;
    var stClass = row.insertCell(3);
    stClass.innerHTML = studentClass.value;

    var delBtn =document.createElement("button")
    var delText= document.createTextNode("Delete")
    delBtn.setAttribute("onClick","deleteItem(this)")
    delBtn.appendChild(delText)
    delBtn.setAttribute("class", "btn btn-primary")
    
    var editBtn =document.createElement("button")
    var editText= document.createTextNode("Edit")
    editBtn.appendChild(editText)
    editBtn.setAttribute("class", "btn btn-primary")

    var btnDelete = row.insertCell(4);
    btnDelete.appendChild(delBtn);
    btnDelete.appendChild(editBtn);

    studentName.value=""
    fatherName.value=""
    address.value =""
    studentClass.value=""

//   console.log(li)
//   console.log(list)  
// console.log(studentClass)

    

    // li.appendChild(delBtn)

    // list.appendChild(li)


}
function deleteAll(){
    var table = document.getElementById("myTable");
    table.innerHTML=""
}

function deleteItem(e){
    var table = document.getElementById("myTable");
        table.deleteRow(e)

// console.log(e.parentNode)
// e.parentNode.deleteRow(0)
// e.parentNode.remove();
}

function myCreateFunction() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "NEW CELL1";
    cell2.innerHTML = "NEW CELL2";
  }

 ////--------CHAPTER 59-67

function showImage(e){
 var modalImage=document.getElementById("modalImage")   
 modalImage.setAttribute("src", e.src)

}




//TASK 1 (i)

// var main = document.getElementById("main-content")
// var mainElements = main.childNodes

//TASK 1(ii)

// for(var i = 0 ; i  < mainElements.length ; i++){
//     document.write(mainElements[i].nodeName + "<br>")
// }

//TASK 1(iii)
// var render = document.getElementsByClassName("render")
// for(var i = 0 ; i < render.length ; i++){
//     document.write(render[i].firstChild.nodeValue + "<br>")
// }

//TASK 1(iv)
// var main = document.getElementById("main-content")
// var fname = document.getElementById("first-name")
// fname.value =  main.childNodes[1].firstChild.nodeValue 
// console.log(fname.value)

//TASK 1 (v)
// var main = document.getElementById("main-content")
// var lname = document.getElementById("last-name")
// lname.value =  main.childNodes[2].firstChild.nodeValue 
// console.log(lname.value)

// var main = document.getElementById("main-content")
// var email = document.getElementById("email")
// email.value =  main.childNodes[3].firstChild.nodeValue 
// console.log(email.value)



// document.write("The value of element having id first name is " + fvalue + "<br>")

// //TASK 2 (i)
// var form = document.getElementById("form-content")
// document.write("The node type of id form-content is " + form.nodeType + "<br>")

// //TASK 2 (ii)
// var last = document.getElementById("lastName")
// var child = last.firstChild.nodeValue
// document.write( "<br>" + "The node type of id lastName is " + last.nodeType + " and  child node is  " + child + "<br>")

// //TASK 3 (iii)

// var update = child = "Last Name : Price"
// document.write("The updated value of child node of id lastName is " + update + "<br>")

// //TASK(iv)

// var main = document.getElementById("main-content")
// document.write("The first child of id main-content is " + main.firstChild.nodeName + "<br>")

// //TASK (v)

// var last = document.getElementById("lastName")
// var next = last.nextSibling.nodeValue;
// var previous = last.previousSibling.nodeValue
// document.write("The next sibling of id last name is " + next + "<br>")
// document.write("The previous sibling of id last name is " + previous + "<br>")

// //TASK (vi)

// var email = document.getElementById("email")
// var parent = email.parentNode
// var type = email.nodeType
// document.write("The parent node  of element having id email is  " +parent.nodeName + "<br>")
// document.write("The node type of element having id email is  " +type)




