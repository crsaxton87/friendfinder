var qTemp = document.getElementById("qTemp").innerHTML;
var template = Handlebars.compile(qTemp);

var questions = template([
    {
        number: 1,
        text: "Does coding feel more like work or fun?",
        top: "Fun",
        bottom: "Work"
    },
    {
        number: 2,
        text: "How much do you enjoy new coding challenges?",
        top: "Enjoy very much",
        bottom: "Don't enjoy"
    },
    {
        number: 3,
        text: "How quickly do you grasp new coding concepts?",
        top: "Very fast",
        bottom: "Very slow"
    },
    {
        number: 4,
        text: "How easy is it for you to remember specific syntax?",
        top: "Very easy",
        bottom: "Very hard"
    },
    {
        number: 5,
        text: "How fast do you type?",
        top: "Very fast",
        bottom: "Very slow"
    },
    {
        number: 6,
        text: "How well can you read and interpret code written by others?",
        top: "Very easily",
        bottom: "Very poorly"
    },
    {
        number: 7,
        text: "How often do you practice coding to improve retention?",
        top: "Very often",
        bottom: "Almost never"
    },
    {
        number: 8,
        text: "How quickly can you find answers to questions through research?",
        top: "Very quickly",
        bottom: "Very slowly"
    },
    {
        number: 9,
        text: "How often do you begin a project by pseudocoding?",
        top: "Always",
        bottom: "Never"
    },
    {
        number: 10,
        text: "How difficult is it for you to pseudocode a project before beginning to code?",
        top: "Very easy",
        bottom: "Very difficult"
    }
]);

document.getElementById("questions").innerHTML += questions;
