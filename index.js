const noGoWords = ["zoom","channel","galvanize","mcsp","garrett","ross","incompetent","unfunny"];

let history = ["Comments from the past comming back to haunt you."];
//let isClean = true;
let submitBtn = document.getElementById('submitBtn');
let userComment = document.getElementById('userComment');
let commentIndex = 0;

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
    wordCheck(comment);
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
}

submitBtn.addEventListener("click",() => {
    //console.log("You clicked me");
    let current = userComment.value;
    wordCheck(current);
    postComments(commentIndex);
});

//Show past comments====================================
const postComments = (index) => {
    console.log("posting");
    let commentsContainer = document.getElementById('commentsContainer');
    let posting = history.slice(index,history.length);

    posting.forEach(comment => {
        let commentBox = document.createElement("div");
        let text = document.createTextNode(`${comment}`);
        commentBox.appendChild(text);
        commentsContainer.prepend(commentBox);
        commentIndex++;
    });
}
postComments(commentIndex);
