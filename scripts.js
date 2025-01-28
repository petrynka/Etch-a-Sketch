const container = document.querySelector(".container");


function addDivsGrid(num){
    
    for (let i = 0; i <=(num*num)-1; i++) {
        const content = document.createElement("div");
        content.classList.add("block");
        content.style.cssText = `flex: 1 1 calc(100% / ${num}); height: calc(100% / ${num});`
        container.appendChild(content);
    }

}

addDivsGrid(16);

const blocks = document.querySelectorAll(".block");

blocks.forEach(block => {
    block.addEventListener("mouseenter", () => {
        block.style.backgroundColor = "black"
    });
});

