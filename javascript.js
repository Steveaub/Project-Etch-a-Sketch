
let gridContainer =document.getElementById("gridContainer")


for (let i = 0; i < 16; i++) {
let row = document.createElement("div")
gridContainer.appendChild(row)
row.className = "row"


for (let e = 0; e < 16; e++) {
    gridContainer =document.getElementById("gridContainer")
    function colorChange (element,color) {
        element.style.backgroundColor = color;
    }
    



 let column = document.createElement("div")
 row.appendChild(column)
 column.className = "column";
 column.addEventListener("mouseover", () => colorChange(column,"purple") )
}

}





