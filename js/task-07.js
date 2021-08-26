const fsControl = document.querySelector("#font-size-control");
const textControl = document.querySelector("#text");

const fontSizeChange = e => {
    let size = e.currentTarget.value + "px";
    console.log(size);
    textControl.style.fontSize = size;
};

fsControl.addEventListener("input", fontSizeChange);

