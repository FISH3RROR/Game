const cock = document.querySelector(".cock");
const dick = document.querySelector(".dick");

document.addEventListener("keydown", function (event) {
    console.log(2);
    jump();
});

function jump() {

    if (cock.classList != "jump") {
        cock.classList.add("jump")
    }

    setTimeout(function () {
        cock.classList.remove("jump")
    }, 300)

}


let isAlive = setInterval( function() {
    let cockTop = parseInt(window.getComputedStyle(cock).getPropertyValue("top"));

    let dickLeft = parseInt(window.getComputedStyle(dick).getPropertyValue("left"));


    if (dickLeft < 50 && dickLeft > 0 && cockTop >= 140){
        alert("ПЕТУХ НАСАЖЕН!")
    }


}, 10)