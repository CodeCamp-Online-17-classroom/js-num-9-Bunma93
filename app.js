// write code here
function diagonalLength(width, height) {
    return Math.sqrt(width * width + height * height);
}

let width = prompt("ความกว้างของสี่เหลี่ยม(ซม.)");
let height = prompt("ความยาวของสี่เหลี่ยม(ซม.)");
let diagonal = diagonalLength(width, height).toFixed(2);
alert(`ความยาวเส้นแทยงมุมประมาณ ${diagonal} ซม.`);