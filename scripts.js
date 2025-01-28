const container = document.querySelector(".container");
const resetBtn = document.querySelector("#reset");


function addDivsGrid(num){
    
    for (let i = 0; i <=(num*num)-1; i++) {
        const content = document.createElement("div");
        content.classList.add("block");
        content.style.cssText = `flex: 0 0 calc(100% / ${num}); height: calc(100% / ${num});`
        container.appendChild(content);

        content.addEventListener("mouseover", () =>{
            content.style.backgroundColor = "black"
        })

        // const blocks = document.querySelectorAll(".block");

        // blocks.forEach(block => {
        //     block.addEventListener("mouseover", () => {
        //     block.style.backgroundColor = "black"
        //     });
        // });
    }

}

addDivsGrid(16);

function gridCleaner(){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
}

resetBtn.addEventListener("click", () =>{
    let enteredNum = prompt("Please enter number from 1 to 100", );
    if(+enteredNum<1 || +enteredNum>100){
        alert("Please enter number between 1 and 100");
        return;
    }
    gridCleaner();
    
    addDivsGrid(+enteredNum);
    
});