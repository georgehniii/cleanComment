const noGoWords = ["zoom","channel","galvanize","mcsp","garrett","ross","incompetent","unfunny"];
//not at all how I feel just put it together for testing.
const badComment = "Garrett Ross thinks he is funny with all is witty comments and joke that he brings" 
    +" out during his zoom lectures. In reailty he is so unfunny and does not cover up his incompetent mind" 
    +" as an Galvanize instructor. He is letting down mcsp 12 and never shows his incompetence in the slack channel.";

let history = ["Comments from the past comming back to haunt you."];
//let isClean = true;
let submitBtn = document.getElementById('submitBtn');
let userComment = document.getElementById('userComment');

const censore = (word,comment,index) => {
    console.log(`Not this word ${word}`);
    let dashes = "";
    for(var i = 1; i <= word.length; i++){
        dashes+="-";
    }
    let splitComment = comment.split('');
    splitComment.splice(index+1,dashes.length-1,dashes);
    comment = splitComment.join("");
    console.log(comment);
    comment = wordCheck(comment);
    return comment;
}

const wordCheck = (com) => {
    console.log("Checking for filtered words");
    let comLowered = com.toLowerCase();
    noGoWords.forEach( element => {
        comLowered.includes(element) ? com=censore(element,com,comLowered.indexOf(element)) : console.log(`${element} checked good`);
    });
        isClean = false;
        history.push(com);
        console.log(history);
        return;   
}

submitBtn.addEventListener("click",() => {
    //console.log("You clicked me");
    let current = userComment.value;
    wordCheck(current);
    postComments();
});

//Show past comments====================================
function postComments() {
    let commentsContainer = document.getElementById('commentsContainer');
history.forEach(comment => {
    let commentBox = document.createElement("div");
    let text = document.createTextNode(`${comment}`);
    commentBox.appendChild(text);
    commentsContainer.prepend(commentBox);
});
}

