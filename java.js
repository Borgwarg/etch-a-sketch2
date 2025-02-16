let gridcontainer = document.querySelector("#gridcontainer");

function createGrid(size) {
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

createGrid(16);

const gridsquares = document.querySelectorAll(".gridsquare");

gridsquares.forEach(gridsquare => {
    gridsquare.addEventListener("mouseenter", () => {
        gridsquare.style.backgroundColor = "red"
    });
});




