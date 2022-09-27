const containerEl = document.querySelector(".container");
console.log(containerEl)
// to get 30 elements for color-container by document
for (let index = 0; index < 30; index++) {
    const colorContainerEl = document.createElement("div");//create div
    colorContainerEl.classList.add("color-container");//add class
    containerEl.appendChild(colorContainerEl);
}
//use document to write css
const colorContainerEls = document.querySelectorAll(".color-container");
// console.log(colorContainerEls);
colorContainerEls.forEach(
    (element) => {
        console.log(element);
        let color = randomColor();
        console.log(color);
        element.style.backgroundColor = color;
        element.innerText = color;
});


randomColor();
function randomColor(){
    const char = "0123456789abcdef";
    const numberIndex = "";
    console.log(numberIndex);
    const color = "";
    let RGB = "#";
    for (let index = 0; index < 6; index++) {
        const numberIndex = Math.floor(Math.random() * char.length);
        const color = char.substring(numberIndex, numberIndex+1);
        RGB += color;
    }
    console.log(RGB);
    return RGB;
}