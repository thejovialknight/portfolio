function onPostButtonClick(title) {
    // Set header to display article title
    //const headerPrefix = "conner's | ";
    //header.innerHTML = headerPrefix + title;
    
    // Removed on page load to achieve fade in effect
    article.classList.add("invisible");
    
    // Set post buttons to be on or off
    const selectedClassName = "selected";
    for(let i = 0; i < postButtons.length; ++i) {
        let button = postButtons[i];
        if(button.dataset.fname === title) {
            button.classList.add(selectedClassName);
        }
        else {
            button.classList.remove(selectedClassName);
        }
    }
    
    // Request html file
    let request = new XMLHttpRequest();
    request.addEventListener("load", onPostLoad);
    request.open("GET", "https://raw.githubusercontent.com/thejovialknight/portfolio/main/" + title + ".html");
    request.send();
}

function onPostLoad() {
    console.log("Loaded!");
    article.innerHTML = this.responseText;
    article.classList.remove('invisible');
}

function main() {
    for(let i = 0; i < postButtons.length; ++i) {
        let button = postButtons[i];
        button.addEventListener("click", () => { onPostButtonClick(button.dataset.fname); });
    };
}

const header = document.querySelector('header h1');
const article = document.querySelector('article');
const postButtons = document.querySelectorAll('li');

main();
