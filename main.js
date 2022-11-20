function onPostButtonClick(title) {
    // Set header to display article title
    //const headerPrefix = "conner's | ";
    //header.innerHTML = headerPrefix + title;
    
    // Move post button container
    postButtonContainer.classList.remove('initial');
    
    // Set post buttons to be on or off
    const selectedClassName = 'selected';
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

function onNoteButtonClick(text, button, index) {
    if(clickedNoteIndices.includes(index)) {
        return;
    }
    else {
        clickedNoteIndices.push(index);
    }

    const noteElement = document.createElement("p");
    noteElement.innerHTML = "<span class='note-index'>" + index + "</span> " + text;

    noteElement.classList.add("note-text");
    paragraph = button.parentElement;
    paragraph.style.marginBottom = "0px";
    paragraphParent = paragraph.parentElement;
    paragraphParent.insertBefore(noteElement, paragraph.nextSibling);
    button.classList.add("clicked-note");
}

function onPostLoad() {
    console.log("Loaded!");
    article.innerHTML = this.responseText;
    article.classList.remove('invisible');
    let noteButtons = document.querySelectorAll('.note');
    for(let i = 0; i < noteButtons.length; ++i) {
        let button = noteButtons[i];
        
        let index = i + 1;
        button.innerHTML = index;

        console.log("Found note: " + button.dataset.noteText);
        button.addEventListener("click", () => { onNoteButtonClick(button.dataset.noteText, button, index); }
    );
    };
}

function main() {
    for(let i = 0; i < postButtons.length; ++i) {
        let button = postButtons[i];
        button.addEventListener("click", () => { onPostButtonClick(button.dataset.fname); });
    };
}

const header = document.querySelector('header h1');
const article = document.querySelector('article');
const postButtonContainer = document.querySelector('aside');
const postButtons = document.querySelectorAll('li');
const clickedNoteIndices = [];

main();
