let cookie_selection = Cookies.get(`selection`);



if (cookie_selection === undefined) {
    document.body.insertAdjacentHTML(`afterend`, `<h1>Make a selection on home page</h1>`);
};

if (cookie_selection !== undefined) {
    let fruit_info = JSON.parse(cookie_selection);
    document.body.insertAdjacentHTML(`afterend`, `<p>${fruit_info[`name`]}</p>`);
    document.body.insertAdjacentHTML(`afterend`, `<p>${fruit_info[`description`]}</p>`)
    document.body.insertAdjacentHTML(`afterend`, `<p>${fruit_info[`image_url`]}</p>`)
};