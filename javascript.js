

let body = document.querySelector("body");



for (let i = 0; i < 16; i++) {
let row = document.createElement("div")
body.appendChild(row)
row.className = "row"

for (let e = 0; e < 16; e++) {
 let column = document.createElement("div")
 row.appendChild(column)
 column.className = "column";
}

}






