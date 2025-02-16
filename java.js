let gridcontainer = document.querySelector("#gridcontainer");

function createGrid(size) {
    for (let i = 0; i < size; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        gridcontainer.appendChild(row);

        for (let i = 0; i < size; i++) {
        let column = document.createElement("div");
        column.classList.add("column");
        row.appendChild(column);
        }
    }

}

createGrid(16);



