function onPostButtonClick(title) {
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
    let article = document.querySelector('article')
    article.innerHTML = this.responseText;
    article.style.opacity = 0.0;
}

function main() {
    for(let i = 0; i < postButtons.length; ++i) {
        let button = postButtons[i];
        button.addEventListener("click", () => { onPostButtonClick(button.dataset.fname); });
    };
}

const postButtons = document.querySelectorAll('li');

main();
