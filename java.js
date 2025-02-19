const gridcontainer = document.querySelector("#gridcontainer");
gridcontainer.addEventListener('dragstart', (e) => {
    e.preventDefault();
});

let drawing = false;

function getSize() {
    let size;
    do {
        size = parseInt(prompt("Enter a number between 1 and 100"));
    } while (isNaN(size) || size <= 0 || size > 100);
    return size;
}

function createMouseEvents() {
    gridcontainer.addEventListener("mousedown", (e) => {
        if (e.target.classList.contains("gridsquare")) {
            e.target.style.backgroundColor = "rgb(48, 48, 48)";
            drawing = true;
        }
    });

    gridcontainer.addEventListener("mouseup", () => drawing = false);

    gridcontainer.addEventListener("mouseenter", (e) =>  {
        if (drawing && e.target.classList.contains("gridsquare")) {
            e.target.style.backgroundColor = "rgb(48, 48, 48)";
        }
    });
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
        };
    };

    createMouseEvents();

};

createGrid(50);


createGridButton = document.querySelector(".createGrid");
createGridButton.addEventListener("click", () => {
    createGrid(getSize());
});

const clearButton = document.querySelector(".btnc")
clearButton.addEventListener("click", () => {
   const gridsquares = document.querySelectorAll(".gridsquare");
   gridsquares.forEach(gridsquare => gridsquare.style.backgroundColor = "rgb(13, 168, 11)");
});
