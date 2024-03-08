var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Qno 1 done
//Qno 2
var musab = "Hello Musab, would you like to learn some Python today?";
console.log("musab", musab);
//Q no 3
var name1 = "musab";
name1 = name1.toUpperCase();
console.log("name1", name1);
name1 = name1.toLowerCase();
console.log("name1", name1);
var convertInTitleCase = function (str) {
    if (!str)
        return;
    var words = str.toLowerCase().split(" ").map(function (word) { return word.charAt(0).toUpperCase().concat(word.substr(1)); }).join(" ");
    return words;
};
console.log(convertInTitleCase("GOVErnor sinDh ai"));
//Q no 4
var quote = 'Albert Einstein once said, "A person who never made a mistake never tried anything new".';
console.log(quote);
//Q no 5
var famousPerson = "Albert Einstein";
var quote1 = '"A person who never made a mistake never tried anything new".';
console.log(famousPerson + "," + quote1);
//Q no 6
var abc = "\t \n  Musab Khan  \n \t";
console.log(abc);
console.log(abc.trim());
//Q no 7
//Q no 8 
console.log(10 - 2);
console.log(6 + 2);
console.log(16 / 2);
console.log(4 * 2);
//Q no 9
var favNum = 7;
var message = "my fav number is ".concat(favNum);
console.log(message);
//Q no 10
//In this program i give argument to my function than it convert that text into title case
var convert = function (str) {
    if (!str)
        return;
    var words = str.toLowerCase().split(" ").map(function (word) { return word.charAt(0).toUpperCase().concat(word.substr(1)); }).join(" ");
    return words;
};
console.log(convert("GOVErnor sinDh ai"));
//Q no 11
var friendsArray = [
    "musab", "Haider", "Shawaiz", "Mushaf", "Ali"
];
var friends = function () {
    friendsArray.map(function (friend) { return console.log(friend); });
};
friends();
//Q no 12
var Greeting = function () {
    friendsArray.map(function (friend) { return console.log("Welcome, ".concat(friend, " in the amazing journey of AI")); });
};
Greeting();
//Q no 13
var transportation = ["BMW", "Civic", "Sonata"];
var transportILikeMost = function () {
    transportation.map(function (transport) { return console.log("I would like to own ".concat(transport, " by my own income")); });
};
transportILikeMost();
//Q no 14
var InvitingToDinner = function () {
    friendsArray.map(function (friend) { return console.log("Hey ".concat(friend, " , Hows you? .I am so excited to see you so I arrange a dinner at today's night ,please come over and enjoy")); });
};
InvitingToDinner();
//Q no 15
var newLIst = friendsArray.filter(function (friend) { return friend !== "Shawaiz"; });
var changingInvitationList = function () {
    newLIst.map(function (friend) { return console.log("Hey ".concat(friend, " , Hows you? .I am so excited to see you so I arrange a dinner at today's night ,please come over and enjoy")); });
};
changingInvitationList();
//Q no 16
console.log("now I have a good news , I found a bigger Dinner table so Add more Friends !!!");
newLIst.unshift("Ahmed");
newLIst.splice(2, 0, "Adeeb");
newLIst.push("Humaim");
console.log(newLIst);
var updateList = function () {
    newLIst.map(function (friend) { return console.log("Hey ".concat(friend, " , Hows you? .I am so excited to see you so I arrange a dinner at today's night ,please come over and enjoy")); });
};
updateList();
//Q no 17
console.log("sorry guys , The table is only for two people , i opologize to all friends");
console.log("Sorry ".concat(newLIst.pop(), ", I cant invite you"));
console.log("Sorry ".concat(newLIst.pop(), ", I cant invite you"));
console.log("Sorry ".concat(newLIst.pop(), ", I cant invite you"));
console.log("Sorry ".concat(newLIst.pop(), ", I cant invite you"));
console.log("Sorry ".concat(newLIst.pop(), ", I cant invite you"));
console.log(newLIst);
newLIst.map(function (friend) { return console.log("Hey ".concat(friend, " , Hows you? .I am so excited to see you so I arrange a dinner at today's night ,please come over and enjoy")); });
newLIst.splice(0, 2);
console.log(newLIst);
//Q no 18
//1
var places = ["Makkah", "Madina", "Tokyo", "Dubai", "Amazon"];
//2
console.log(places);
//3
var newarr = __spreadArray([], places, true).sort();
console.log(newarr);
//4
console.log(places);
//5
var newarr2 = __spreadArray([], places, true).reverse();
console.log(newarr2);
//6
console.log(places);
//7
places.reverse();
console.log(places);
//8
places.reverse();
console.log(places);
//9
places.sort();
console.log(places);
//10
places.reverse();
//Q no 19
console.log(newLIst);
//Q no 20
var countries = ["Pakistan", "palastine", "canada", "Russia", "United state"];
var languages = ["HTML", "JS", "TS", "Python", "Java"];
var laptops = ["Dell", "HP", "Mac", "Lenovo", "Toshiba"];
countries.map(function (country) { return console.log(country); });
languages.map(function (language) { return console.log(language); });
laptops.map(function (laptop) { return console.log(laptop); });
//Q no 21
var countriesObject = {
    countries: countries,
    languages: languages,
    laptops: laptops
};
//Q no 22
//i correct the error
//Q no 23
//1
var car = "Civic";
console.log("car == subru | predict true");
console.log(car == "Civic");
//2
//true
var lap = "Dell";
console.log("lap == Dell | predict true");
console.log(lap == "Dell");
var namee = "musab";
console.log("name == musab | predict true");
console.log(lap == "Dell");
var classs = 3;
console.log("class == Dell | predict true");
console.log(classs == 3);
var chair = "blue";
console.log("chair == blue | predict true");
console.log(chair == "blue");
var sir = "Hamza";
console.log("sir == Hamza | predict true");
console.log(sir == "Hamza");
//false
console.log(lap == "react js");
console.log(namee == "react js");
console.log(classs == 4);
console.log(chair == "react js");
console.log(sir == "react js");
//Q no 24
//1
var text = "Hello World";
var text1 = "Hello World1";
console.log(text.length === text1.length);
console.log(text.length !== text1.length);
//2
var text3 = "hello World";
console.log(text == text3);
//3
var num = 10;
var num2 = 12;
console.log(num != num2);
console.log(num == num2);
console.log(num < num2);
console.log(num > num2);
//4
console.log(num == 11 || "yup it is false");
console.log(num == 10 && "yup it is true");
//5
var arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (var i = 0; i < arrNum.length; i++) {
    if (arrNum[i] === 3) {
        console.log(true);
    }
}
for (var i = 0; i < arrNum.length; i++) {
    if (arrNum[i] === 13) {
        console.log(true);
    }
}
// Q no 25 
var color = "green";
if (color === "green") {
    console.log("the player just earned 5 points");
}
if (color !== "green") {
    console.log("oops");
}
//Q no 26
//
if (color === "green") {
    console.log("the player just earned 10 points");
}
//
if (color !== "green") {
    console.log('the player just earned 5 points');
}
color = "red";
//
if (color === "green") {
    console.log("the player just earned 10 points");
}
else {
    console.log('the player just earned 5 points');
}
//Q no 27
//Alien game by mySelf
var game = function () {
    var alien_color = "yellow";
    var shot = 0;
    var beat = 0;
    var dodge = 0;
    var i = 0;
    var gaming = setInterval(function () {
        var counting = Math.ceil(Math.random() * 3);
        if (counting == 1) {
            alien_color = "red";
            console.log(alien_color, "alien shot the you and he earn 10 points");
            beat++;
        }
        if (counting == 2) {
            alien_color = "green";
            console.log(alien_color, " you shot the alien and  earn 10 points");
            shot++;
        }
        if (counting == 3) {
            alien_color = "yellow";
            console.log(alien_color, " you shot the alien and  earn 15 points");
            dodge++;
        }
        i++;
        if (i >= 10) {
            clearInterval(gaming);
            if (beat > shot && beat > dodge) {
                console.log("you lose");
            }
            if (shot > beat && shot > dodge) {
                console.log("you win");
            }
            if (dodge > shot && dodge > beat) {
                console.log("the match is tie");
            }
        }
    }, 1000);
};
// game()
// Q no 28
var age = function () {
    var age = 20;
    if (age < 2) {
        console.log("the person is a baby.");
    }
    if (age < 2) {
        console.log("the person is a baby.");
    }
    if (age < 2) {
        console.log("the person is a baby.");
    }
    if (age >= 2 && age < 4) {
        console.log("the person is a toddler.");
    }
    if (age >= 4 && age < 13) {
        console.log("the person is a kid.");
    }
    if (age >= 13 && age < 20) {
        console.log("the person is a teenager.");
    }
    if (age >= 20 && age < 65) {
        console.log("the person is a adult.");
    }
    if (age >= 65) {
        console.log("the person is a elder.");
    }
};
//Q no 29
// I nor create 5 if statements but just use for loop to make it easier
var favorite_fruits = ["Bananas", "Apple", "Orange"];
for (var i = 0; i < favorite_fruits.length; i++) {
    if (favorite_fruits[i] === "Bananas") {
        console.log("I really Bananas");
    }
    else {
        console.log("I dont like any of it !!");
    }
}
// Q no 30
var users = ["Admin", "Musab", "Haider", "Shawiaz", "Ali", "Ahmed"];
// by for loop
for (var i = 0; i < users.length; i++) {
    if (users[i] === "Admin") {
        console.log(" Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(users[i], ", thank you for logging in again."));
    }
}
//by ternary operator and map
users.map(function (user) { return user === "Admin" ? console.log(" Hello admin, would you like to see a status report?") : console.log("Hello ".concat(user, ", thank you for logging in again.")); });
//Q no 31
//statement
if (!users) {
    console.log("We need some more users");
}
users = [];
if (!users.length) {
    console.log("We need some more users");
}
//Q no 32
var current_users = ["Admin", "Musab", "Haider", "Shawiaz", "Ali", "Ahmed"];
var new_users = ["Maaz", "Adeeb", "Hussain", "Ahmed", "Sameer"];
for (var i = 0; i < current_users.length; i++) {
    for (var j = 0; j < new_users.length; j++) {
        if (current_users[i] === new_users[j]) {
            console.log("he name ".concat(new_users[j], " is Already exits! please enter a new name"));
        }
    }
}
//Q no 33
var count = [1, 2, 3, 4, 5, 6, 7, 8, 9];
count.map(function (num) {
    if (num < 4) {
        if (num === 1)
            console.log(num + "st");
        if (num === 2)
            console.log(num + "nd");
        if (num === 3)
            console.log(num + "rd");
    }
    else {
        console.log(num + "th");
    }
});
//Qno 34
var pizzas = ["cheese Max", "pepperoni", "fajita"];
for (var i = 0; i < pizzas.length; i++) {
    console.log("I like ".concat(pizzas[i], " pizza"));
    console.log("I really love pizza!");
}
//Q no 35
var animals = ["cat", "lion", "puma"];
// i use switch statament to do this
for (var i = 0; i < animals.length; i++) {
    switch (animals[i]) {
        case "cat":
            console.log("Cats are cute! ");
            break;
        case "lion":
            console.log("Lion are dangerous! ");
            break;
        case "puma":
            console.log("Pumas are cute and dangerous too! ");
            break;
        default:
            console.log("no animal");
            break;
    }
}
//Q no 36
var make_shirt = function (size, text) {
    console.log("The order of  ".concat(text, " text tshirt will be the size of ").concat(size));
};
make_shirt("medium", "menz");
//Q no 37
var large_shirt = function (size, text) {
    if (size === void 0) { size = "large"; }
    if (text === void 0) { text = "I love TS"; }
    console.log("The order of  ".concat(text, " text tshirt will be the size of ").concat(size));
};
var medium_shirt = function (size, text) {
    if (size === void 0) { size = "medium"; }
    if (text === void 0) { text = "I love TS"; }
    console.log("The order of  ".concat(text, " text tshirt will be the size of ").concat(size));
};
//Q no 38
var describe_city = function (city) {
    if (city === void 0) { city = "Karachi"; }
    console.log("".concat(city, " in Pakistan"));
};
describe_city("Lahore");
describe_city("Quetta");
describe_city("Swat");
//Q no 39
var city_country = function (country, city) {
    if (country === void 0) { country = "Pakistan"; }
    if (city === void 0) { city = "Karachi"; }
    console.log("".concat(city, " , ").concat(country));
};
city_country("tokyo", "Japan");
city_country("Ankara", "Turkey");
city_country("Jerusalem ", "Palestine ");
//Q no 40
var album_make = function (artist, title, tracks) {
    var album = {
        artist: artist,
        title: title,
    };
    if (tracks) {
        album.tracks = tracks;
    }
    return console.log(album);
};
album_make("dua lipa", "Best Singer");
album_make("Ariana Grande", "Multiple voice", 10);
album_make("Nicki Minaj", "Best rapper");
//Qn o 41
var magician = ["Shin Lim", "Jeff McBride", "Siegfried & Roy", "Roger Lapin"];
var show_magicians = function () {
    magician.map(function (magi) { return console.log(magi); });
};
show_magicians();
//Q no 42
var make_great = function () {
    var great = magician.map(function (member) { return console.log("".concat(member, " Great")); });
    return great;
};
//Qno 43
make_great();
show_magicians();
//Q no 44
var sandwitches = function () {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("making sandwich");
    items.map(function (item) { return console.log(item); });
};
sandwitches("cheese , bread , fried egg");
sandwitches("cheese , bread , beef pattie");
sandwitches("cheese , bread , chicken pattie");
function createCar(manufacturer, model) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    args.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        car[key] = value;
    });
    return car;
}
var myCar = createCar("Toyota", "Camry", ["colors", "blue"], ["year", 2022]);
console.log(myCar);
