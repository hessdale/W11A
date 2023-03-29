let apple = document.getElementById(`apple`);
let banana = document.getElementById(`banana`);
let peach = document.getElementById(`peach`);



let apple_info =
{
    name: `apple`,
    description: `red`,
    image_url: `/images/apple.png`
}
let banana_info = {
    name: `banana`,
    descirption: `yellow`,
    image_url: `/images/banana.png`
}
let peach_info = {
    name: `peach`,
    descirption: `orange`,
    image_url: `/images/peach.png`
}
let apple_JSON = JSON.stringify(apple_info);
let banana_JSON = JSON.stringify(banana_info);
let peach_JSON = JSON.stringify(peach_info);


function apple_clicked(details) {
    Cookies.set(`selection`, apple_JSON);
}

function banana_clicked(details) {
    Cookies.set(`selection`, banana_JSON);
}
function peach_clicked(details) {
    Cookies.set(`selection`, peach_JSON);
}

let cookie_selection = Cookies.get(`selection`);

apple.addEventListener(`click`, apple_clicked);
banana.addEventListener(`click`, banana_clicked);
peach.addEventListener(`click`, peach_clicked);

