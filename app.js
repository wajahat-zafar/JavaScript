//CHAP-1 ALERTS//

alert("Hello Visitor")

alert("Error Please Enter the valid password")

alert("Welcome to JS Land.." + "\n" + "Happy Coding!")


alert("Welcome to JS Land.." + "\n" + "prevent this page for creating the additional dailogues")

console.log("Hello...i can run JS through my web browser console")

//CHAP-2//
var username= "Jhon Doe";
alert(username)

var myName= "Muhammad Wajahat";
alert(myName)

var message="Hello World";
alert(message)

var name="John Doe";
var age = "15years";
var Qualification="Certified Mobile application developement"
alert(name)
alert(age)
alert(Qualification)


var pizza = "PIZZA \n PIZZ \n PIZ \n PI \n P"
alert(pizza)

var email = "zafarwajahat14@gmail.com"

alert("My email address is"+ " " + email)

var book = "I am trying to learn book A smarter way to learn java script";
alert(book)

var greeting=" Yah! I can write HTML content through java script"
document.write(greeting)

alert("“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”")

//CHAP-3//
var age = "20"
alert("I am" + " " + age + " " + "year old")

var visits = "15"
alert("You have visited" + " " + visits + " " + "times this page")

birthYear = "1999"
document.write("My birth year is" + " " + birthYear + "<br>" + "Datatype of my declared variable is number"+ "<br>")


var visitor = "Jhon Doe"
var product = "Shoes"
var Quantity = "3 pieces"
document.write(visitor + " " +  "want to order" + " " + Quantity + " " + product + " " + "from xyz shopping store")


//CHAP-4//
var statement1 = "Variable name can only contain numbers,$ and _.For Example:$my_1stVariable";
document.write(statement1 + "<br>")
var statement2 = "Variable must begin with a letter,$or_.Forexample:$name,_name or name"
document.write(statement2 +  "<br>")

var statement3 = "Variable names are case sensitive"
document.write(statement3 + "<br>")
var statement4 = "Variable names should not be a JS keywords"
document.write(statement4)


//CHAP-5//

document.write("Part1" + "<br>")
const number1 = 10;
const number2 = 5;
var sumNumber = number1 + number2;
var diffNumber = number1 - number2;
var productNumber = number1 * number2;
var divNumber = number1 / number2;
var modNumber = number1 % number2;
document.write("The sum of" + " " + number1 + " " +"and" + " " +  number2 + " " + "is" + " " + sumNumber + "<br>")
document.write("The difference between" + " " + number1 + " " +"and" + " " +  number2 + " " + "is" + " " + diffNumber + "<br>")
document.write("The product of" + " " + number1 + " " +"and" + " " +  number2 + " " + "is" + " " + productNumber + "<br>")
document.write("The division of" + " " + number1 + " " +"and" + " " +  number2 + " " + "is" + " " + divNumber + "<br>")
document.write("The remainder of" + " " + number1 + " " +"and" + " " +  number2 + " " + "is" + " " + modNumber + "<br>"+ "<br>")
document.write("Part2"+ "<br>")

var number = "??"
document.write("Value after variable declaration is:" + " " + number +"<br>")
var number = "5"
document.write("Initial Value is:" + " " + number +"<br>")
var increase = ++number
document.write("The Value after increment is:" + " " + increase +"<br>")
var add = number + 5
document.write("The value after addition is:" + " " + add +"<br>")
var decrease = --add
document.write("The value after decrease is:" + " " + decrease +"<br>")
var remainder = decrease % 3
document.write("The remainder is:" + " " + remainder + "<br>"+ "<br>" )
document.write("Part3 "+ "<br>")
var ticket = 300;
var costTickets = ticket*5;
document.write("The cost to buy 5 tickets for a movie is:" + " " +costTickets +"<br>"+ "<br>" )
document.write("Part4 "+ "<br>")

for(var i = 1; i<=10;i++){
    document.write("4"+" "+"x"+" "+i+"="+" "+4*i+"<br>" + "<br>")
}
document.write("Part5 "+ "<br>")

var tempCelcius = 50;
var convTempF= (tempCelcius*9/5)+32 
document.write("The Converted temperature in Fahrenheit is:" + " " + convTempF +"NNoF"+ "<br>")
var tempFahren = 100;
var convTempC= (tempFahren-32)*5/9 
document.write("The Converted temperature in Celcius is:" + " " + convTempC +"NNoC"+ "<br>"+ "<br>")



document.write("Part6 "+ "<br>")
var item1 = 650;
var item2 = 100;
var qtyItem1 = 3;
var qtyItem2 = 7;
var shipping = 100;
var totalCost = (item1*qtyItem1 + item2 * qtyItem2+shipping)
document.write("The price of item1 is:" + " " + item1 + "<br>" )
document.write("The quantity of item1 is:" + " " + qtyItem1 + "<br>" )
document.write("The price of item2 is:" + " " + item2 + "<br>" )
document.write("The quantity of item2 is:" + " " + qtyItem2 + "<br>" )
document.write("TotalCost:"+ " " + totalCost + "<br>"+ "<br>")

document.write("Part7 "+ "<br>")

var tMarks = 600;
var oMarks = 450;
var per = (450*100)/600
document.write("The total marks are:"+" "+ tMarks+ "<br>")
document.write("The marks obtained by a student is:" + " " + oMarks+ "<br>")
document.write("Percentage:" + " " + per+ "%" + "<br>"+ "<br>")


document.write("Part8 "+ "<br>")
var convertCurrency = (10 * 104.80 + 25 * 28)
document.write("Total Currency in PKR:"+ " " + convertCurrency + "<br>" + "<br>")

document.write("Part9 "+ "<br>")

var num = 8;
var calculation = (num + 5)*10/2;
document.write("Calculation:" + " " + calculation+ "<br>"+ "<br>")


document.write("Part10 "+ "<br>")
var currentYear = 2020;
var birthYear = 1999;
var age = currentYear-birthYear
document.write("Current Year:" + " " +currentYear+ "<br>")
document.write("BirthYear:" + " " + birthYear+ "<br>")
document.write("Your age is:" + " " + age+ "<br>"+ "<br>")


document.write("Part11 "+ "<br>")

var radius = 10;
document.write("The radius is:" + " " + radius + "cm" + "<br>")
var circumference = 2 * 3.14 * radius
document.write("The circumference is:" + " " + circumference + "cm"+ "<br>")
var area = 3.14 * radius**2;
document.write("The area of a circle is:" + " " + area+ "<br>"+ "<br>")

document.write("Part11 "+ "<br>")
var snack = "Chocolate Chip";
document.write("Favourite Snack:" + " " +snack+ "<br>")
var currentAge = 21;
document.write("Current Age:" + " " + currentAge+ "<br>")
var maxAge = 70;
document.write("Max Age:" + " " + maxAge+ "<br>")
var amountperDay = 5;
document.write("AmountPerDay:" + " " + amountperDay+ "<br>")
var totalConsume = (maxAge-currentAge)*5
document.write("TotalConsume:" + " " + totalConsume)





//CHAP 6-9//
document.write("Part1"+ "<br>"+ "<br>")
var a = 10;
var b = ++a;
document.write("The value of ++a is:" + " " + b + "<br>")
document.write("Now the value of a is:" + " " + b+ "<br>")
var c = b++;
document.write("The value of a++ is:" + " " + c + "<br>")
document.write("Now the value of a is:" + " " + b+ "<br>")
var d = --b;
document.write("The value of --a is:" + " " + d + "<br>")
document.write("Now the value of a is:" + " " + b+ "<br>")
var e = b--;
document.write("The value of a-- is:" + " " + e + "<br>")
document.write("Now the value of a is:" + " " + b+ "<br>"+ "<br>")

document.write("Part2"+ "<br>"+ "<br>")
var a = 2;
var b = 1;
var result = --a - --b + ++b + b--;

document.write("The --a becomes 1" + "<br>")
document.write("The --b becomes 0" + "<br>")
document.write("The ++b becomes 1" + "<br>")
document.write("The b++ becomes 1" + "<br>")
document.write("The result becomes" + " " + result + "<br>"+ "<br>")

document.write("Part3"+ "<br>"+ "<br>")
var name = prompt("Enter your name")
alert("Hello" + " " + name + "!")

document.write("Part4"+ "<br>"+ "<br>")

var num1 = prompt("Enter your number")
for (var i = 1; i<=10;i++){
    if (num1 === 5){
        document.write("5" + " " + "x"+ " " +i + "=" + 5*i + "<br>");
    }
    else{
        document.write(num1 + " " + "x"+ " "+i+" "+"="+num1*i + "<br>")
    }
}

document.write("Part5"+ "<br>"+ "<br>")
var inputSub1 = prompt("Enter your subject1");
var sub1 = inputSub1
var inputSub2 = prompt("Enter your subject2");
var sub2 = inputSub2
var inputSub3 = prompt("Enter your subject3");
var sub3 = inputSub3
var totalMarks = prompt("Enter the total marks:")
var tMarks = totalMarks
var obtainMarks1 = prompt("Enter the obtain marks of Sub1")
var oMarks1 = obtainMarks1
var obtainMarks2 = prompt("Enter the obtain marks of Sub2")
var oMarks2 = obtainMarks2
var obtainMarks3 = prompt("Enter the obtain marks of Sub3")
var oMarks3 = obtainMarks3
var Total = (totalMarks+totalMarks+totalMarks)
var totalSub = (oMarks1+oMarks2+oMarks3)
var perSub1 = (obtainMarks1*100)/totalMarks
var perSub2 = (obtainMarks2*100)/totalMarks
var perSub3 = (obtainMarks3*100)/totalMarks
document.write(sub1 + " " + totalMarks + " " + obtainMarks1 + " " + perSub1 + "%" + "<br>" + "<br>")
document.write(sub2 + " " + totalMarks + " " + obtainMarks2+ " " + perSub2 + "%" + "<br>"+ "<br>")
document.write(sub3 + " " + totalMarks + " " + obtainMarks3 + " " + perSub3 + "%" + "<br>")
document.write(Total + " " + totalSub)


//CHAP 9-11//
document.write("Part1" + "<br>" + "<br>")

var city = prompt("Enter the city name:")
if (city === "Karachi") {
    alert("Welcome to the city of lights!")
}
else {
    alert("This is also a beautiful city!")
}

document.write("Part2" + "<br>" + "<br>")

var gender = prompt("Enter your Gender:")

if (gender === "Male") {
    alert("Good Morning Sir!")
}
if (gender === "Female") {
    alert("Good Morning maam!")
}

document.write("Part3" + "<br>" + "<br>")

var trafficLight = prompt("Enter your traffic light!")

if (trafficLight === "Red") {
    alert("Must Stop!")
}

else if (trafficLight === "Yellow") {
    alert("Ready To move!")
}

else if (trafficLight === "Green") {
    alert("Move Now!")
}
document.write("Part4" + "<br>" + "<br>")

var fuelLitres = prompt("Enter Your Fuel in Litres:")
var minFuel = 0.25

if (fuelLitres < minFuel) {
    alert("Please refill the fuel in your car")
}
else {
    alert("You have enough fuel to drive your car")
}

document.write("Part5" + "<br>" + "<br>")
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}
if (true) {
    alert("True");
}
if (false) {
    alert("False")
}
document.write("MarkSheet" + "<br>" + "<br>")

const mark1 = prompt("Enter the marks in subject 1")
const mark2 = prompt("Enter the marks in subject 2")
const mark3 = prompt("Enter the marks in subject 3")
const totalOMarks = +(mark1) +(+mark2) + (+mark3) 
alert("The Total Obtain Marks are:" + totalOMarks)
var total = 300
var percentage = (totalOMarks*100)/total
alert(percentage+" "+"%")
if (percentage > 80 || percentage  === 80){
    document.write("Grade" + "<br>" + "A-one" + "<br>" + "Remarks" + "<br>" + "Excellent")
}
else if (percentage > 70 || percentage ===70){
    document.write("Grade" + "<br>" + "A" + "<br>" + "Remarks" + "<br>" + "Good")

}
else if (percentage > 60 || percentage ===60){
    document.write("Grade" + "<br>" + "B" + "<br>" + "Remarks" + "<br>" + "You need Improvement")


}
else if (percentage < 60){
    document.write("Grade" + "<br>" + "Fail" + "<br>" + "Remarks" + "<br>" + "Sorry"+ "<br>" + "<br>" )
}



document.write("GuessGame" + "<br>" + "<br>")

var guess = 6;
var guessNumber = prompt("Enter your guess number:")

if(guess == guessNumber){
    alert("Bingo! you guess Correct answer")
}


else if (guessNumber == ++guess){
    alert("Close enough to correct answer")
}

else{
    alert("Please try again later ")
}

document.write("Part8" + "<br>" + "<br>")


var num = prompt("Enter the number")
if (num%3 == 0){
    alert("Yes your number is divisible by 3")
}
else{
    alert("This number is not divisible by 3")
}

document.write("Part9" + "<br>" + "<br>")

var checkNumber = prompt("Enter your number")

if (checkNumber%2 == 0){
    alert("Your number is even")
}

else if (checkNumber%2!= 0){
    alert("Your number is odd")
}
document.write("Part10" + "<br>" + "<br>")

var temp = prompt("enter your temperature")

if (+temp>40){
    alert("Its too hot outside!")
}

else if(+temp>30){
    alert("The weather today is normal")

}

else if(+temp>20){
    alert("Today weather is cool!")
}

else if (+temp >10){
    alert("OMG! The weather is so cold outside")
}

document.write("Part11" + "<br>" + "<br>")

var firstNumber = prompt("Enter the first number")
var operator = prompt("Enter your operator")
var secondNumber = prompt("Enter the second number")


if (operator ==="+"){
    calc1 = ((+firstNumber) +(+secondNumber))
    alert(calc1)
}
else if (operator ==="-"){
    calc2 = ((+firstNumber) -(+secondNumber))
    alert(calc2)
}
else if (operator ==="*"){
    calc3 = (firstNumber * secondNumber)
    alert(calc3)
}
else if (operator ==="/"){
    calc4 = (firstNumber / secondNumber)
    alert(calc4)
}

else if (operator ==="%"){
    calc5 = (firstNumber % secondNumber)
    alert(calc5)
}



//CHAP 12-13 //

document.write("Part1" + "<br>" + "<br>")


var character = "WAJAHAT"

if (Number.isInteger(character)){
    alert("The character is a number")
}

else if(character ===character.toUpperCase()){
    alert("The character is UpperCase")
}

else if(character ===character.toLowerCase()){
    alert("The character is LowerCase")
}

document.write("Part2" + "<br>" + "<br>")

const number1 = prompt("Enter your integer 1")
const number2 = prompt("Enter your integer 2")

if (number1 === number2){
    alert("The both integers are equal")
}

else if(number1>number2 && number2<number1){
    alert("Integer 1 is greater")
}

else if(number2 >number1 && number1< number2){
    alert("Integer 2 is greater")
}


document.write("Part3" + "<br>" + "<br>")

var num = prompt("Enter your number")

if (+num == 0){
    alert("The number is zero")
}
else if (+num>0){
    alert("The number is positive")
}

else if (+num<0){
    alert("The number is negative")
}

document.write("Part3" + "<br>" + "<br>")

var character = "a"
if (character == "a" || character =="e" || character =="i"||character =="o"|| character == "u"){
    alert("True")
}
else{
    alert("False")
}

document.write("Part4" + "<br>" + "<br>")

var pass = "wajji1234"
var password = prompt("Enter your password")
if (password == "False"){
    alert("Please enter your password")
}
else if(pass === password){
    alert("Correct! The password you entered matches the original password")
}
else{
    alert("Incorrect Password")
}

document.write("Part5" + "<br>" + "<br>")

var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
}
else{
greeting = "Good evening";
}

document.write("Part5" + "<br>" + "<br>")

var time = 1900;
if (time >=0000 && time<1200){
    alert("Goodmorning!")
}
else if(time>=1200 && time<1700){
    alert("GoodAfterNoon")
}
else if(time>=1700 && time<2100){
    alert("GoodEvening")
}
else if(time>=2100 && time<2359){
    alert("GoodNight")
}





//CHAP14-16//
//part1//

var stud = ['wajahat']

document.write(stud[0] + "<br>")

// //part2//

var stud = ['wajahat']

document.write(stud[0]+ "<br>"+ "<br>")

// //part3//

var stringArray = ["Atlanta", "Baltimore", "Chicago", "Denver", "Los Angeles", "Seattle"]

document.write(stringArray[0] + " " + stringArray[1] + " " + stringArray[2]+ "<br>"+ "<br>")

// //part4//

var numberArrays = ["1","2","3","4"]
document.write(numberArrays[0] +" " +  numberArrays[1]+" " +numberArrays[2] + "<br>"+ "<br>")

// //part5//
var booleanArrays = ["True","False"]
document.write(booleanArrays[0] + " "+ booleanArrays[1] )


// //part6//

var mixedArray = [1, "Bob", "Now is", true]

document.write(mixedArray[0] + " " + mixedArray[1] + " " + mixedArray[2]+ "<br>"+ "<br>" )

//part7//

var pakEducation = ['SSC','HSC','BCS','BS','BCOM','MS','M.PHIL','PHD']

for (i = 0; i<=pakEducation.length-1; i++){
    document.write( pakEducation[i]+ "<br>" + "<br>")
}


//part8//

var student = ['Micheal','John','Tony']
var score = [300,400,350]
var per1 = (score[0]*100)/500
var per2 =(score[1] * 100)/500
var per3 = (score[2] * 100)/500
var percentage = [per1,per2,per3]

document.write("The score of" + " " +student[0] + " " + score[0] + " " + "Percentage:" + " " + percentage[0] + "%" + "<br>")
document.write("The score of" + " " +student[1] + " " + score[1] + " " + "Percentage:" + " " + percentage[1] + "%" + "<br>")
document.write("The score of" + " " +student[2] + " " + score[2] + " " + "Percentage:" + " " + percentage[2] + "%" + "<br>"+ "<br>")


// //part9//
var myArr = ['Red' , 'Blue']
var ask = prompt("Do you want to add color in the beginning of the array?")

if (ask == "yes"){
    myArr.unshift("Brown")
    document.write(myArr + "<br>"+ "<br>")
}

var ask = prompt("Do you want to add color at the end of the array?")

if (ask == "yes"){
    myArr.push("Purple")
    document.write(myArr + "<br>"+ "<br>")
}

myArr.unshift("Green",'Voilet')
document.write(myArr+ "<br>"+ "<br>")


myArr.shift("Green")
document.write(myArr+ "<br>"+ "<br>")

myArr.pop("Purple")
document.write(myArr+ "<br>"+ "<br>")

var ask3 = prompt("Do you want to add the color name at your desired position?")
if (ask3 =="yes"){

    myArr.splice(2,0,"White")
    document.write(myArr+ "<br>"+ "<br>")
}

var ask4 = prompt("Do you want to delete any color in the array?")
var ask5 = prompt("How many color do you want to delete?")
var ask6 = prompt("From which position do you want to remove your color")
if (ask4 =="yes"){
    myArr.splice(ask5,ask6)
    document.write(myArr+ "<br>"+ "<br>")
}


//part10//

var scores = [ 320,230,480,120]
scores.sort(function(a,b){return a-b});
document.write(scores+ "<br>"+ "<br>")


//part11//


var cities = ['Karachi','Lahore','Islamabad','Quetta','Peshawar']
var selectedCities = [cities[0],cities[1],cities[2]]
document.write(selectedCities+ "<br>"+ "<br>")

//part12//

var arr = ["This", "is",  "my", "cat"];
arr.join()
document.write(arr+ "<br>"+ "<br>")


//part13//

var arr = ['Keyboard','Mouse','Monitor','Printer']
for (i = 0; i<= arr.length-1; i++){
    document.write("Out:" + arr[i] + "<br>"+ "<br>")
}

 //part14//
var arr1 = ['Keyboard','Mouse','Monitor','Printer']
for (i= arr.length-1;i>=0; i--){
    document.write("Out:" + arr[i] + "<br>"+ "<br>")
}

//part15//

var manufacturer = ['Apple','Samsung','Motorolla','Nokia','Sony','Haier']
document.write("<select>")

for (i = 0 ; i<=manufacturer.length-1; i++){
    document.write("<option>" + manufacturer[i] + "<option>")
}

document.write("</select>")


//chap17-20//
//part1//
var myArr = [[], []]
for (i = 0; i <= myArr.length; i++) {
    document.write(myArr[i] + "<br>")
}
//part2//

var myArr2 = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]]
for (i = 0; i <= myArr2.length - 1; i++) {
    document.write(myArr2[i] + "<br>")

}

//Part3//
var array = [

    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],



]
var array=[

    [1,2,3,4,5],
    [6,7,8,9,10],
    
    
    
    ];


var i;
var j;
var rows = 2;
var colums = 5;
for (i = 0; i < rows; i++) {

    for (j = 0; j < colums; j++) {

        document.write(array[i][j] + "<br>");

    }


}


//part4//
var number = window.prompt("Enter a number to show its multiplication table");
var length = window.prompt("Enter length multiplication table");
var Length = length;
var i;
document.write("Multiplication table of " + number + "<br>");
document.write("Length" + Length + "<br>");
for (i = 1; i <= Length; i++) {

    document.write(number + "*" + i + "=" + number * i + "<br>");


}



//part5
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
var Fruits = [];
var i;
var length = fruits.length;

for (i = 0; i < length; i++) {

    Fruits[i] = document.write(fruits[i] + "<br>");


}
for (i = 0; i < length; i++) {

    document.write("Element at index " + i + " is " + fruits[i] + "<br>");



}




//part6
var count = window.prompt("Please enter the range of counting");
var i;
var numbering = [];
var reversing = [];
var even = [];
var odd = [];
var series = [];
document.write("Counting:");

for (i = 0; i <= count; i++) {

    numbering[i] = document.write(+i + ",");

}

document.write("Reverse counting:" + "<br>");

for (i = count; i >= 0; i--) {

    reversing[i] = document.write(+i + ",");

}

document.write("Even:" + "<br>");
for (i = 0; i <= count; i++) {

    if (i % 2 == 0) {

        even[i] = document.write(+i + ",");

    }

}

document.write("Odd:" + "<br>");
for (i = 0; i <= count; i++) {

    if (i % 2 !== 0) {

        odd[i] = document.write(+i + ",");

    }

}

document.write("Series:" + "<br>");
for (i = 2; i <= count; i = i + 2) {

    series[i] = document.write(+i + "k" + ",");

}


//part7
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var search = window.prompt("Welcome to ABC Bakery. What you want to order");
var Length = A.length
var i;
for (i = 0; i < Length; i++) {

    if (search == A[i]) {

        document.write(search + " is available at index " + i + " in our bakery ");

    }

    else {

        document.write("Not available")

    }

}











