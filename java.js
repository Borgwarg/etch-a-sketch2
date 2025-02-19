let gridcontainer = document.querySelector("#gridcontainer");
gridcontainer.addEventListener('dragstart', (e) => {
    e.preventDefault();
});

function getSize() {
    let size = -1;
    while(size <= 0 || size > 100 || isNaN(size)) {
        console.log(typeof size);
        size = parseInt(prompt("Enter a number between 1 and 100"));   
        console.log("User input:", size);
    };
    console.log(size)
    return size;
}



let drawing = false;

function createMouseEvents() {
    const gridsquares = document.querySelectorAll(".gridsquare");

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
};

function draw() { 
    const gridsquares = document.querySelectorAll(".gridsquare");

    gridsquares.forEach(gridsquare => {
        gridsquare.addEventListener("mouseenter", () => {
            if (drawing === true) {
                gridsquare.style.backgroundColor = "red"
            } else {
                gridsquare.style.nackgroundColor = "white"
            }
        });
    });
}

createGridButton = document.querySelector(".createGrid");
createGridButton.addEventListener("click", () => {
    createGrid(getSize());
});

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
        };
    };

    createMouseEvents();

};

createGrid(50);
