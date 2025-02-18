let gridcontainer = document.querySelector("#gridcontainer");

function getSize() {
    let size = prompt("Enter a number between 1 and 100 to create grid");
    size = parseInt(size);
    if (size <= 100 && size > 0) {
        return size
    }
    else {
        size = prompt ("Invalid number, please try again")
    
    }
}


function createGrid(size) {
    gridcontainer.innerHTML = "";
    for (let i = 0; i < size; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        gridcontainer.appendChild(row);

        for (let i = 0; i < size; i++) {
        let gridsquare = document.createElement("div");
        gridsquare.classList.add("gridsquare")
        row.appendChild(gridsquare);
        gridsquare.id = "gridsquare";
        }
    }

}

createGrid(50);




const gridsquares = document.querySelectorAll(".gridsquare");
let drawing = false;

gridsquares.forEach(gridsquare => {
    gridsquare.addEventListener("mousedown", () => {
        gridsquare.style.backgroundColor = "red";
        drawing = true;
        draw();
    });
    gridsquare.addEventListener("mouseup", () => {
        drawing = false;
    })
});


function draw() { 
    gridsquares.forEach(gridsquare => {
        gridsquare.addEventListener("mouseenter", () => {
            if (drawing === true) {
                gridsquare.style.backgroundColor = "red"
            } else {
                gridsquare.style.nackgroundColor = "white"
            }
        })
    })
}

createGridButton = document.querySelector(".createGrid");
createGridButton.addEventListener("click", () => {
    createGrid(getSize());
});