//using variables to define each button on the index.html
let apple = document.getElementById(`apple`);
let banana = document.getElementById(`banana`);
let peach = document.getElementById(`peach`);
//using a object to define each with name/description/image
let apple_info =
{
    name: `apple`,
    description: `red`,
    image_url: `/images/apple.png`
};
let banana_info = {
    name: `banana`,
    description: `yellow`,
    image_url: `/images/banana.png`
};
let peach_info = {
    name: `peach`,
    description: `orange`,
    image_url: `/images/peach.png`
};
//using variable of JSON to convert cookie info in functions
let apple_JSON = JSON.stringify(apple_info);
let banana_JSON = JSON.stringify(banana_info);
let peach_JSON = JSON.stringify(peach_info);

//functions that set the cookie info when a user makes selection
function apple_clicked(details) {
    Cookies.set(`selection`, apple_JSON);
};
function banana_clicked(details) {
    Cookies.set(`selection`, banana_JSON);
};
function peach_clicked(details) {
    Cookies.set(`selection`, peach_JSON);
};
//using addEventListener to execute code on click of specific button
apple.addEventListener(`click`, apple_clicked);
banana.addEventListener(`click`, banana_clicked);
peach.addEventListener(`click`, peach_clicked);