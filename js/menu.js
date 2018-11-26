function myFunction(y) {
    y.classList.toggle("change");
    var x = document.getElementById("myMenu");
    if (x.style.display === "block") {
        x.style.display = "none"
    } else {
        x.style.display = "block"
    }
}

function myTop(y) {
    moveTo(".main", 1);
}

function myOne(y) {
    moveTo(".main", 1);
}

function myTwo(y) {
    moveTo(".main", 2);
}

function myThree(y) {
    moveTo(".main", 3);
}
