//defining a variable that gets the info of cookie selection
let cookie_selection = Cookies.get(`selection`);
//using that variable in an if statement to see if its undefined and if it is then puts a message on the page
if (cookie_selection === undefined) {
    document.body.insertAdjacentHTML(`afterend`, `<h1>Make a selection on home page</h1>`);
};
//using the variable in an if statement to add the selected fruits info on the page
if (cookie_selection !== undefined) {
    //defining the fruit info by converting the JSON using parse
    let fruit_info = JSON.parse(cookie_selection);
    document.body.insertAdjacentHTML(`afterend`, `<p>${fruit_info[`name`]}</p>`);
    document.body.insertAdjacentHTML(`afterend`, `<p>${fruit_info[`description`]}</p>`)
    document.body.insertAdjacentHTML(`afterend`, `<p>${fruit_info[`image_url`]}</p>`)
};