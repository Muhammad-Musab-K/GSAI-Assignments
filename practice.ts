//Qno 1 done
//Qno 2
let musab = "Hello Musab, would you like to learn some Python today?";
console.log("musab", musab);
//Q no 3
var name1 = "musab";
name1 = name1.toUpperCase();
console.log("name1", name1);
name1 = name1.toLowerCase();
console.log("name1", name1);
const convertInTitleCase = (str) => {
    if (!str) return;

    let words = str.toLowerCase().split(" ").map((word) => word.charAt(0).toUpperCase().concat(word.substr(1))).join(" ")
    return words
}
console.log(convertInTitleCase("GOVErnor sinDh ai"))

//Q no 4
const quote = 'Albert Einstein once said, "A person who never made a mistake never tried anything new".'
console.log(quote)

//Q no 5

const famousPerson = "Albert Einstein"
const quote1 = '"A person who never made a mistake never tried anything new".'
console.log(famousPerson + "," + quote1)

//Q no 6

const abc = "\t \n  Musab Khan  \n \t"
console.log(abc)
console.log(abc.trim())


//Q no 7
//Q no 8 
console.log(10 - 2)
console.log(6 + 2)
console.log(16 / 2)
console.log(4 * 2)

//Q no 9

let favNum = 7
let message = `my fav number is ${favNum}`
console.log(message)

//Q no 10

//In this program i give argument to my function than it convert that text into title case
const convert = (str) => {
    if (!str) return;

    let words = str.toLowerCase().split(" ").map((word) => word.charAt(0).toUpperCase().concat(word.substr(1))).join(" ")
    return words
}
console.log(convert("GOVErnor sinDh ai"))

//Q no 11
var friendsArray = [
    "musab", "Haider", "Shawaiz", "Mushaf", "Ali"
]
const friends = () => {
    friendsArray.map(friend => console.log(friend))
}
friends()

//Q no 12
const Greeting = () => {
    friendsArray.map(friend => console.log(`Welcome, ${friend} in the amazing journey of AI`))
}
Greeting()

//Q no 13
const transportation = ["BMW", "Civic", "Sonata"]

const transportILikeMost = () => {
    transportation.map(transport => console.log(`I would like to own ${transport} by my own income`))
}
transportILikeMost()

//Q no 14
const InvitingToDinner = () => {
    friendsArray.map(friend => console.log(`Hey ${friend} , Hows you? .I am so excited to see you so I arrange a dinner at today's night ,please come over and enjoy`))
}
InvitingToDinner()

//Q no 15
var newLIst = friendsArray.filter(friend => friend !== "Shawaiz")

const changingInvitationList = () => {
    newLIst.map(friend => console.log(`Hey ${friend} , Hows you? .I am so excited to see you so I arrange a dinner at today's night ,please come over and enjoy`))

}
changingInvitationList()


//Q no 16
console.log("now I have a good news , I found a bigger Dinner table so Add more Friends !!!")

newLIst.unshift("Ahmed")
newLIst.splice(2, 0, "Adeeb")
newLIst.push("Humaim")
console.log(newLIst)

const updateList = () => {
    newLIst.map(friend => console.log(`Hey ${friend} , Hows you? .I am so excited to see you so I arrange a dinner at today's night ,please come over and enjoy`))
}
updateList()

//Q no 17
console.log("sorry guys , The table is only for two people , i opologize to all friends")
console.log(`Sorry ${newLIst.pop()}, I cant invite you`)
console.log(`Sorry ${newLIst.pop()}, I cant invite you`)
console.log(`Sorry ${newLIst.pop()}, I cant invite you`)
console.log(`Sorry ${newLIst.pop()}, I cant invite you`)
console.log(`Sorry ${newLIst.pop()}, I cant invite you`)
console.log(newLIst)
newLIst.map(friend => console.log(`Hey ${friend} , Hows you? .I am so excited to see you so I arrange a dinner at today's night ,please come over and enjoy`))
newLIst.splice(0, 2)
console.log(newLIst)

//Q no 18
//1
const places = ["Makkah", "Madina", "Tokyo", "Dubai", "Amazon"]
//2
console.log(places)
//3
let newarr = [...places].sort()
console.log(newarr)
//4
console.log(places)
//5
let newarr2 = [...places].reverse()
console.log(newarr2)
//6
console.log(places)
//7
places.reverse()
console.log(places)
//8
places.reverse()
console.log(places)
//9
places.sort()
console.log(places)
//10
places.reverse()


//Q no 19
console.log(newLIst)

//Q no 20

const countries = ["Pakistan", "palastine", "canada", "Russia", "United state"]
const languages = ["HTML", "JS", "TS", "Python", "Java"]
const laptops = ["Dell", "HP", "Mac", "Lenovo", "Toshiba"]

countries.map(country => console.log(country))
languages.map(language => console.log(language))
laptops.map(laptop => console.log(laptop))


//Q no 21

const countriesObject = {
    countries,
    languages,
    laptops
}

//Q no 22

//i correct the error

//Q no 23

//1
let car = "Civic"
console.log("car == subru | predict true")
console.log(car == "Civic")
//2
//true
let lap = "Dell"
console.log("lap == Dell | predict true")
console.log(lap == "Dell")

let namee = "musab"
console.log("name == musab | predict true")
console.log(lap == "Dell")

let classs = 3
console.log("class == Dell | predict true")
console.log(classs == 3)

let chair = "blue"
console.log("chair == blue | predict true")
console.log(chair == "blue")

let sir = "Hamza"
console.log("sir == Hamza | predict true")
console.log(sir == "Hamza")

//false

console.log(lap == "react js")
console.log(namee == "react js")
console.log(classs == 4)
console.log(chair == "react js")
console.log(sir == "react js")

//Q no 24

//1
let text = "Hello World"
let text1 = "Hello World1"

console.log(text.length === text1.length)
console.log(text.length !== text1.length)

//2
let text3 = "hello World"
console.log(text == text3)

//3
const num: number = 10
const num2: number = 12
console.log(num != num2)
console.log(num == num2)
console.log(num < num2)
console.log(num > num2)

//4
console.log(num == 11 || "yup it is false")
console.log(num == 10 && "yup it is true")

//5
const arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let i = 0; i < arrNum.length; i++) {
    if (arrNum[i] === 3) {
        console.log(true)
    }
}

for (let i = 0; i < arrNum.length; i++) {
    if (arrNum[i] === 13) {
        console.log(true)
    }
}

// Q no 25 

let color = "green"
if (color === "green") {
    console.log("the player just earned 5 points")
} if (color !== "green") {
    console.log("oops")
}

//Q no 26
//
if (color === "green") {
    console.log("the player just earned 10 points")
}
//
if (color !== "green") {
    console.log('the player just earned 5 points')
}

color = "red"
//
if (color === "green") {
    console.log("the player just earned 10 points")
}
else {
    console.log('the player just earned 5 points')
}

//Q no 27
//Alien game by mySelf


const game = () => {
    let alien_color = "yellow";
    let shot = 0
    let beat = 0
    let dodge = 0
    let i = 0;
    const gaming = setInterval(() => {
        const counting = Math.ceil(Math.random() * 3)
        if (counting == 1) {
            alien_color = "red"
            console.log(alien_color, "alien shot the you and he earn 10 points")
            beat++
        }
        if (counting == 2) {
            alien_color = "green"
            console.log(alien_color, " you shot the alien and  earn 10 points")
            shot++
        }

        if (counting == 3) {
            alien_color = "yellow"
            console.log(alien_color, " you shot the alien and  earn 15 points")
            dodge++
        }
        i++
        if (i >= 10) {
            clearInterval(gaming)
            if (beat > shot && beat > dodge) {
                console.log("you lose")
            }
            if (shot > beat && shot > dodge) {
                console.log("you win")
            }
            if (dodge > shot && dodge > beat) {
                console.log("the match is tie")
            }
        }
    }, 1000)
}
// game()

// Q no 28

const age = () => {
    let age = 20
    if (age < 2) {
        console.log("the person is a baby.")
    }
    if (age < 2) {
        console.log("the person is a baby.")
    }
    if (age < 2) {
        console.log("the person is a baby.")
    }
    if (age >= 2 && age < 4) {
        console.log("the person is a toddler.")
    }
    if (age >= 4 && age < 13) {
        console.log("the person is a kid.")
    }
    if (age >= 13 && age < 20) {
        console.log("the person is a teenager.")
    }
    if (age >= 20 && age < 65) {
        console.log("the person is a adult.")
    }
    if (age >= 65) {
        console.log("the person is a elder.")

    }
}

//Q no 29

// I nor create 5 if statements but just use for loop to make it easier
const favorite_fruits = ["Bananas", "Apple", "Orange"]
for (let i = 0; i < favorite_fruits.length; i++) {
    if (favorite_fruits[i] === "Bananas") {
        console.log("I really Bananas")
    } else {
        console.log("I dont like any of it !!")
    }
}

// Q no 30

let users = ["Admin", "Musab", "Haider", "Shawiaz", "Ali", "Ahmed"]
// by for loop
for (let i = 0; i < users.length; i++) {
    if (users[i] === "Admin") {
        console.log(" Hello admin, would you like to see a status report?")
    } else {
        console.log(`Hello ${users[i]}, thank you for logging in again.`)
    }
}
//by ternary operator and map
users.map(user => user === "Admin" ? console.log(" Hello admin, would you like to see a status report?") : console.log(`Hello ${user}, thank you for logging in again.`))

//Q no 31
//statement
if (!users) {
    console.log("We need some more users")
}

users = []
if (!users.length) {
    console.log("We need some more users")
}

//Q no 32
let current_users = ["Admin", "Musab", "Haider", "Shawiaz", "Ali", "Ahmed"]
let new_users = ["Maaz", "Adeeb", "Hussain", "Ahmed", "Sameer"]

for (let i = 0; i < current_users.length; i++) {
    for (let j = 0; j < new_users.length; j++) {
        if (current_users[i] === new_users[j]) {
            console.log(`he name ${new_users[j]} is Already exits! please enter a new name`)
        }
    }
}

//Q no 33

let count = [1, 2, 3, 4, 5, 6, 7, 8, 9]

count.map((num) => {
    if (num < 4) {
        if (num === 1) console.log(num + "st")
        if (num === 2) console.log(num + "nd")
        if (num === 3) console.log(num + "rd")
    }
    else {
        console.log(num + "th")
    }
})

//Qno 34
let pizzas = ["cheese Max", "pepperoni", "fajita"]

for (let i = 0; i < pizzas.length; i++) {
    console.log(`I like ${pizzas[i]} pizza`)
    console.log("I really love pizza!")

}

//Q no 35

const animals = ["cat", "lion", "puma"]
// i use switch statament to do this
for (let i = 0; i < animals.length; i++) {
    switch (animals[i]) {
        case "cat":
            console.log("Cats are cute! ")
            break
        case "lion":
            console.log("Lion are dangerous! ")
            break
        case "puma":
            console.log("Pumas are cute and dangerous too! ")
            break
        default:
            console.log("no animal")
            break
    }
}

//Q no 36

const make_shirt = (size: string, text: string) => {
    console.log(`The order of  ${text} text tshirt will be the size of ${size}`)
}

make_shirt("medium", "menz")

//Q no 37
const large_shirt = (size: string = "large", text: string = "I love TS") => {
    console.log(`The order of  ${text} text tshirt will be the size of ${size}`)
}
const medium_shirt = (size: string = "medium", text: string = "I love TS") => {
    console.log(`The order of  ${text} text tshirt will be the size of ${size}`)
}

//Q no 38

const describe_city = (city: string = "Karachi") => {
    console.log(`${city} in Pakistan`)
}
describe_city("Lahore")
describe_city("Quetta")
describe_city("Swat")

//Q no 39

const city_country = (country: string = "Pakistan", city: string = "Karachi") => {
    console.log(`${city} , ${country}`)
}
city_country("tokyo", "Japan")
city_country("Ankara", "Turkey")
city_country("Jerusalem ", "Palestine ")

//Q no 40

const album_make = (artist: string, title: string, tracks?: number) => {
    let album: {
        artist: string,
        title: string,
        tracks?: number
    } = {
        artist: artist,
        title: title,
    };

    if (tracks) {
        album.tracks = tracks;
    }

    return console.log(album);
}
album_make("dua lipa", "Best Singer")
album_make("Ariana Grande", "Multiple voice", 10)
album_make("Nicki Minaj", "Best rapper")



//Qn o 41

const magician = ["Shin Lim", "Jeff McBride", "Siegfried & Roy", "Roger Lapin"]
const show_magicians = () => {
    magician.map(magi => console.log(magi))
}
show_magicians()


//Q no 42

const make_great = () => {
    const great = magician.map((member) => console.log(`${member} Great`))
    return great
}

//Qno 43
make_great()
show_magicians()

//Q no 44

const sandwitches = (...items: string[]) => {
    console.log("making sandwich")
    items.map((item) => console.log(item))
}
sandwitches("cheese , bread , fried egg")
sandwitches("cheese , bread , beef pattie")
sandwitches("cheese , bread , chicken pattie")

//Q no 45

interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any; 
}

function createCar(manufacturer: string, model: string, ...args: [string, any][]): Car {
    let car: Car = {
        manufacturer,
        model
    };
    args.forEach(([key, value]) => {
        car[key] = value;
    });
    return car;
}

const myCar = createCar("Toyota", "Camry", ["colors", "blue"], ["year", 2022]);
console.log(myCar);







































